import os
from PIL import Image, ImageDraw

def generate_minimal_favicons():
    public_dir = "public"
    if not os.path.exists(public_dir):
        os.makedirs(public_dir)

    COLOR_BG = (28, 27, 25)      # Deep warm charcoal (#1C1B19)
    COLOR_EMBER = (217, 78, 29)   # Premium orange (#D94E1D)

    # 1. Write favicon.svg
    svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="14" fill="#1C1B19" />
  <circle cx="16" cy="16" r="6" fill="#D94E1D" />
</svg>
"""
    with open(os.path.join(public_dir, "favicon.svg"), "w") as f:
        f.write(svg_content)
    print("Generated minimalist favicon.svg")

    # Helper function to draw the same minimal design
    def draw_minimal_icon(size):
        img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Center and radii
        cx, cy = size / 2, size / 2
        r_outer = size * 14 / 32
        r_inner = size * 6 / 32

        # Outer charcoal circle
        draw.ellipse([cx - r_outer, cy - r_outer, cx + r_outer, cy + r_outer], fill=COLOR_BG)
        # Inner orange dot
        draw.ellipse([cx - r_inner, cy - r_inner, cx + r_inner, cy + r_inner], fill=COLOR_EMBER)

        return img

    # 2. Save apple-touch-icon.png (180x180)
    apple_icon = draw_minimal_icon(180)
    apple_icon.save(os.path.join(public_dir, "apple-touch-icon.png"), "PNG")
    print("Generated minimalist apple-touch-icon.png")

    # 3. Save favicon.ico (multi-resolution 16x16, 32x32, 48x48)
    sizes = [16, 32, 48]
    images = [draw_minimal_icon(sz) for sz in sizes]
    images[0].save(
        os.path.join(public_dir, "favicon.ico"),
        format="ICO",
        sizes=[(sz, sz) for sz in sizes],
        append_images=images[1:]
    )
    print("Generated minimalist favicon.ico")

if __name__ == "__main__":
    generate_minimal_favicons()
