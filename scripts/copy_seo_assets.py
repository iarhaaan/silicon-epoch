import os
import shutil

def copy_seo_assets():
    assets_dir = "siliconeposh-seo-kit/assets"
    public_dir = "public"
    brand_components_dir = "src/components/brand"
    section_icons_components_dir = os.path.join(brand_components_dir, "section-icons")

    # Create directories if they don't exist
    if not os.path.exists(public_dir):
        os.makedirs(public_dir)
    if not os.path.exists(brand_components_dir):
        os.makedirs(brand_components_dir)
    if not os.path.exists(section_icons_components_dir):
        os.makedirs(section_icons_components_dir)

    # 1. Copy public asset files
    shutil.copy2(os.path.join(assets_dir, "favicon.svg"), os.path.join(public_dir, "favicon.svg"))
    shutil.copy2(os.path.join(assets_dir, "apple-touch-icon-180.png"), os.path.join(public_dir, "apple-touch-icon.png"))
    shutil.copy2(os.path.join(assets_dir, "og-image-1200x630-light.png"), os.path.join(public_dir, "og-image-light.png"))
    shutil.copy2(os.path.join(assets_dir, "og-image-1200x630-dark.png"), os.path.join(public_dir, "og-image-dark.png"))
    shutil.copy2(os.path.join(assets_dir, "og-image-1200x630-dark.png"), os.path.join(public_dir, "og-image.png")) # copy dark as default og-image.png
    print("Copied public favicon, apple-touch-icon, and og-images.")

    # 2. Copy brand SVG logos
    shutil.copy2(os.path.join(assets_dir, "logo-icon-light.svg"), os.path.join(brand_components_dir, "logo-icon-light.svg"))
    shutil.copy2(os.path.join(assets_dir, "logo-icon-dark.svg"), os.path.join(brand_components_dir, "logo-icon-dark.svg"))
    shutil.copy2(os.path.join(assets_dir, "logo-wordmark-light.svg"), os.path.join(brand_components_dir, "logo-wordmark-light.svg"))
    shutil.copy2(os.path.join(assets_dir, "logo-wordmark-dark.svg"), os.path.join(brand_components_dir, "logo-wordmark-dark.svg"))
    shutil.copy2(os.path.join(assets_dir, "logo-horizontal-light.svg"), os.path.join(brand_components_dir, "logo-horizontal-light.svg"))
    shutil.copy2(os.path.join(assets_dir, "logo-horizontal-dark.svg"), os.path.join(brand_components_dir, "logo-horizontal-dark.svg"))
    print("Copied brand SVG logos to components/brand.")

    # 3. Copy section icons
    section_icons_src_dir = os.path.join(assets_dir, "section-icons")
    for filename in os.listdir(section_icons_src_dir):
        src_file = os.path.join(section_icons_src_dir, filename)
        if os.path.isfile(src_file) and filename.endswith(".svg"):
            shutil.copy2(src_file, os.path.join(section_icons_components_dir, filename))
    print("Copied section icons to components/brand/section-icons.")

if __name__ == "__main__":
    copy_seo_assets()
