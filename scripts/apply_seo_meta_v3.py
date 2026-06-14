import re
import os
import json

def find_head_range(content):
    # Search for head: () => ({ or head: () => { or variations with whitespace
    m = re.search(r"head\s*:\s*\(\)\s*=>\s*\(", content)
    if not m:
        m = re.search(r"head\s*:\s*\(\)\s*=>\s*\{", content)
        if not m:
            return None
    
    start_pos = m.start()
    open_char = content[m.end() - 1]
    
    paren_count = 0
    brace_count = 0
    
    if open_char == '(':
        paren_count = 1
    elif open_char == '{':
        brace_count = 1
        
    idx = m.end()
    while idx < len(content):
        char = content[idx]
        if char == "(":
            paren_count += 1
        elif char == ")":
            paren_count -= 1
        elif char == "{":
            brace_count += 1
        elif char == "}":
            brace_count -= 1
            
        idx += 1
        if brace_count == 0 and paren_count == 0:
            return start_pos, idx
            
    return None

def apply_seo_meta():
    snippets_path = r"siliconeposh-seo-kit/fixes/src/routes/_meta-snippets.md"
    routes_dir = "src/routes"
    
    if not os.path.exists(snippets_path):
        print("Snippets file not found.")
        return
        
    with open(snippets_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    pattern = r"##\s+`([^`]+)`\s+—\s+`([^`]+)`\s*\n\s*```tsx\n(.*?)\n```"
    matches = re.findall(pattern, content, re.DOTALL)
    
    print(f"Found {len(matches)} meta snippets in _meta-snippets.md")
    
    for filename, route_path, block in matches:
        file_path = os.path.join(routes_dir, filename)
        if not os.path.exists(file_path):
            print(f"Warning: route file {file_path} not found.")
            continue
            
        # Standardize the block ending: remove trailing comma/whitespace after })
        block = block.strip()
        if block.endswith(","):
            block = block[:-1].strip()
            
        # Parse the block to get title and description for JSON-LD
        title_match = re.search(r"title:\s*\"([^\"]+)\"", block)
        desc_match = re.search(r"content:\s*\"([^\"]+)\"", block)
        
        title = title_match.group(1) if title_match else "Silicon Epoch"
        description = desc_match.group(1) if desc_match else "A comprehensive field guide to the AI frontier."
        
        slug = route_path.strip("/")
        name = title.split(" — ")[0]
        
        # If this is not index.tsx, we dynamically generate Article and BreadcrumbList JSON-LD scripts
        if filename != "index.tsx":
            article_ld = {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": title,
                "description": description,
                "image": "https://siliconeposh.vercel.app/og-image-dark.png",
                "datePublished": "2026-06-01",
                "dateModified": "2026-06-14",
                "author": { "@type": "Organization", "name": "Silicon Epoch", "url": "https://siliconeposh.vercel.app" },
                "publisher": {
                  "@type": "Organization",
                  "name": "Silicon Epoch",
                  "logo": { "@type": "ImageObject", "url": "https://siliconeposh.vercel.app/apple-touch-icon.png" }
                },
                "mainEntityOfPage": f"https://siliconeposh.vercel.app/{slug}"
            }
            
            breadcrumb_ld = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://siliconeposh.vercel.app/" },
                    { "@type": "ListItem", "position": 2, "name": name, "item": f"https://siliconeposh.vercel.app/{slug}" }
                ]
            }
            
            # Format as tsx scripts array
            scripts_block = f"""  scripts: [
    {{
      type: "application/ld+json",
      children: JSON.stringify({json.dumps(article_ld, ensure_ascii=False)})
    }},
    {{
      type: "application/ld+json",
      children: JSON.stringify({json.dumps(breadcrumb_ld, ensure_ascii=False)})
    }}
  ]"""
            # We want to insert this scripts block right before the final `}` of the object returned by the function.
            # The block structure is:
            # head: () => ({
            #   meta: [...],
            #   links: [...]
            # })
            # Let's find the closing `})` at the end of the block.
            if block.endswith("})"):
                # Replace the last `}` before `)` with scripts_block + `\n}`
                last_brace_idx = block.rfind("}")
                if last_brace_idx != -1:
                    prefix = block[:last_brace_idx].strip()
                    needs_comma = not prefix.endswith(",")
                    block = block[:last_brace_idx] + ("," if needs_comma else "") + "\n" + scripts_block + "\n" + block[last_brace_idx:]
        
        # Read the original file
        with open(file_path, "r", encoding="utf-8") as rf:
            file_content = rf.read()
            
        # Find the head range
        rng = find_head_range(file_content)
        if rng:
            start_pos, end_pos = rng
            # Replace the old head block with the new block
            # Note: We should preserve the trailing comma if it was there or add it.
            # The snippet doesn't end with a comma after `})` in our sanitized block.
            # But the original code might have a comma. Let's see if the character after end_pos is a comma.
            has_comma = file_content[end_pos:end_pos+1] == ","
            replacement = block + ("," if has_comma else "")
            
            new_file_content = file_content[:start_pos] + replacement + file_content[end_pos + (1 if has_comma else 0):]
            
            with open(file_path, "w", encoding="utf-8") as wf:
                wf.write(new_file_content)
                
            print(f"Successfully updated head block in {filename}")
        else:
            print(f"Error: head block not found in {filename}")

if __name__ == "__main__":
    apply_seo_meta()
