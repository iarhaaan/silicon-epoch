import os
import shutil

def copy_seo_files():
    fixes_dir = "siliconeposh-seo-kit/fixes"
    public_dir = "public"
    github_dir = ".github"
    issue_template_dir = os.path.join(github_dir, "ISSUE_TEMPLATE")
    
    # Create directories if they don't exist
    if not os.path.exists(public_dir):
        os.makedirs(public_dir)
    if not os.path.exists(github_dir):
        os.makedirs(github_dir)
    if not os.path.exists(issue_template_dir):
        os.makedirs(issue_template_dir)

    # 1. Copy public files
    shutil.copy2(os.path.join(fixes_dir, "public", "robots.txt"), os.path.join(public_dir, "robots.txt"))
    print("Copied robots.txt")
    
    shutil.copy2(os.path.join(fixes_dir, "public", "sitemap.xml"), os.path.join(public_dir, "sitemap.xml"))
    print("Copied sitemap.xml")
    
    shutil.copy2(os.path.join(fixes_dir, "public", "site.webmanifest"), os.path.join(public_dir, "site.webmanifest"))
    print("Copied site.webmanifest")

    # 2. Copy contributing file
    shutil.copy2(os.path.join(fixes_dir, "CONTRIBUTING.md"), "CONTRIBUTING.md")
    print("Copied CONTRIBUTING.md")

    # 3. Copy github community files
    shutil.copy2(os.path.join(fixes_dir, ".github", "FUNDING.yml"), os.path.join(github_dir, "FUNDING.yml"))
    print("Copied FUNDING.yml")
    
    shutil.copy2(os.path.join(fixes_dir, ".github", "ISSUE_TEMPLATE", "bug_report.md"), os.path.join(issue_template_dir, "bug_report.md"))
    print("Copied bug_report.md")
    
    shutil.copy2(os.path.join(fixes_dir, ".github", "ISSUE_TEMPLATE", "feature_request.md"), os.path.join(issue_template_dir, "feature_request.md"))
    print("Copied feature_request.md")

    # 4. Copy README.md with Bun -> npm string replacement
    readme_src_path = os.path.join(fixes_dir, "README.md")
    if os.path.exists(readme_src_path):
        with open(readme_src_path, "r", encoding="utf-8") as rf:
            readme_content = rf.read()
            
        # Replace Bun commands with npm commands
        replacements = {
            "bun install": "npm install",
            "bun dev": "npm run dev",
            "bun run build": "npm run build",
            "bun run preview": "npm run preview",
            "bun test": "npm run test",
            "bun run test:e2e": "npm run test:e2e"
        }
        for old, new in replacements.items():
            readme_content = readme_content.replace(old, new)
            
        with open("README.md", "w", encoding="utf-8") as wf:
            wf.write(readme_content)
        print("Written optimized README.md with npm commands")

if __name__ == "__main__":
    copy_seo_files()
