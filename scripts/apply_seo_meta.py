import re
import os
import json

def apply_seo_meta():
    snippets_path = r"siliconeposh-seo-kit/fixes/src/routes/_meta-snippets.md"
    routes_dir = "src/routes"
    
    if not os.path.exists(snippets_path):
        print("Snippets file not found.")
        return
        
    with open(snippets_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Regex to find:
    # ## `[filename].tsx` — `/[slug]` (or similar)
    # followed by the code block
    pattern = r"##\s+`([^`]+)`\s+—\s+`([^`]+)`\s*\n\s*```tsx\n(.*?)\n```"
    matches = re.findall(pattern, content, re.DOTALL)
    
    print(f"Found {len(matches)} meta snippets in _meta-snippets.md")
    
    for filename, route_path, block in matches:
        file_path = os.path.join(routes_dir, filename)
        if not os.path.exists(file_path):
            print(f"Warning: route file {file_path} not found.")
            continue
            
        print(f"Processing {filename}...")
        
        # Parse the block to get title and description for JSON-LD
        title_match = re.search(r"title:\s*\"([^\"]+)\"", block)
        desc_match = re.search(r"content:\s*\"([^\"]+)\"", block) # first content is description
        
        title = title_match.group(1) if title_match else "Silicon Epoch"
        description = desc_match.group(1) if desc_match else "A comprehensive field guide to the AI frontier."
        
        slug = route_path.strip("/")
        
        # Determine human-friendly name from title
        # E.g. "The Compute Core — Silicon, Packaging, and AI Hardware" -> "The Compute Core"
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
            scripts_block = f""",
  scripts: [
    {{
      type: "application/ld+json",
      children: JSON.stringify({json.dumps(article_ld, ensure_ascii=False)})
    }},
    {{
      type: "application/ld+json",
      children: JSON.stringify({json.dumps(breadcrumb_ld, ensure_ascii=False)})
    }}
  ]"""
            # Insert scripts block before the closing }), of head
            # The snippet ends with links: [...]
            # Let's replace the last closing bracket of links with links: [...], scripts: [...]
            # We can find the links: [ ... ] block in the block string and append scripts
            links_match = re.search(r"links:\s*\[.*?\]", block, re.DOTALL)
            if links_match:
                orig_links = links_match.group(0)
                new_links_with_scripts = orig_links + scripts_block
                block = block.replace(orig_links, new_links_with_scripts)
        
        # Read the original file
        with open(file_path, "r", encoding="utf-8") as rf:
            file_content = rf.read()
            
        # Find the head: () => ({ ... }) block in the original file
        # We search for: head: () => ({ ... })
        # Since it can span multiple lines, let's use a non-greedy regex or matched braces finder
        head_start_idx = file_content.find("head: () => ({")
        if head_start_idx == -1:
            # Maybe it's formatted differently, try head: () => { or head: () => ({
            head_start_idx = file_content.find("head: () =>")
            
        if head_start_idx != -1:
            # We find the matching closing parent/bracket
            # Let's trace braces to find the end of head: () => ({ ... })
            brace_count = 0
            paren_count = 0
            idx = head_start_idx
            
            # Move to the first open parenthesis or brace after head: () =>
            while idx < len(file_content) and file_content[idx] not in ("(", "{"):
                idx += 1
                
            start_pos = idx
            
            # Track parentheses and braces to find matching closing
            opened = False
            while idx < len(file_content):
                char = file_content[idx]
                if char == "(":
                    paren_count += 1
                    opened = True
                elif char == ")":
                    paren_count -= 1
                elif char == "{":
                    brace_count += 1
                    opened = True
                elif char == "}":
                    brace_count -= 1
                    
                idx += 1
                if opened and brace_count == 0 and paren_count == 0:
                    break
                    
            head_end_idx = idx
            
            # Replace the old head block with the new block
            new_file_content = file_content[:head_start_idx] + block + file_content[head_end_idx:]
            
            with open(file_path, "w", encoding="utf-8") as wf:
                wf.write(new_file_content)
                
            print(f"Successfully updated head block in {filename}")
        else:
            print(f"Error: head: () => block not found in {filename}")

if __name__ == "__main__":
    apply_seo_meta()
