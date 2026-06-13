import os
from PIL import Image, ImageDraw

def generate_favicons():
    public_dir = "public"
    if not os.path.exists(public_dir):
        os.makedirs(public_dir)

    # Theme colors
    COLOR_BG = (28, 27, 25)      # Warm dark charcoal (approx dark-theme ink)
    COLOR_EMBER = (217, 78, 29)   # Warm premium orange (approx ember)
    COLOR_PAPER = (250, 249, 246) # Warm off-white (approx paper)

    # 1. Write favicon.svg
    svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="8" fill="#1C1B19"/>
  <!-- Central silicon node design -->
  <circle cx="16" cy="16" r="4" fill="#D94E1D" />
  <!-- Connecting orbital traces -->
  <circle cx="16" cy="16" r="8" stroke="#FAF9F6" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.8" />
  <!-- Geodesic corner junctions -->
  <circle cx="16" cy="6" r="1.5" fill="#FAF9F6" />
  <circle cx="16" cy="26" r="1.5" fill="#FAF9F6" />
  <circle cx="6" cy="16" r="1.5" fill="#FAF9F6" />
  <circle cx="26" cy="16" r="1.5" fill="#FAF9F6" />
</svg>
"""
    with open(os.path.join(public_dir, "favicon.svg"), "w") as f:
        f.write(svg_content)
    print("Generated favicon.svg")

    # Helper function to draw the same design on a Pillow image
    def draw_icon(size):
        img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Rounding radius
        rx = size * 8 / 32
        
        # Draw rounded bg
        # Pillow doesn't have an easy rounded rect for older versions, but draw.rounded_rectangle is standard in modern PIL
        try:
            draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=rx, fill=COLOR_BG)
        except AttributeError:
            # Fallback if rounded_rectangle is not available
            draw.rectangle([0, 0, size - 1, size - 1], fill=COLOR_BG)

        # Central silicon node
        cx, cy = size / 2, size / 2
        r_node = size * 4 / 32
        draw.ellipse([cx - r_node, cy - r_node, cx + r_node, cy + r_node], fill=COLOR_EMBER)

        # Orbit dashed line (simulated by drawing arcs or outline ellipse)
        r_orbit = size * 8 / 32
        # Draw orbit outline
        draw.ellipse([cx - r_orbit, cy - r_orbit, cx + r_orbit, cy + r_orbit], outline=COLOR_PAPER, width=max(1, int(size * 1.5 / 32)))

        # Geodesic junction dots
        dot_r = max(1.0, size * 1.5 / 32)
        # Top
        draw.ellipse([cx - dot_r, (size * 6 / 32) - dot_r, cx + dot_r, (size * 6 / 32) + dot_r], fill=COLOR_PAPER)
        # Bottom
        draw.ellipse([cx - dot_r, (size * 26 / 32) - dot_r, cx + dot_r, (size * 26 / 32) + dot_r], fill=COLOR_PAPER)
        # Left
        draw.ellipse([(size * 6 / 32) - dot_r, cy - dot_r, (size * 6 / 32) + dot_r, cy + dot_r], fill=COLOR_PAPER)
        # Right
        draw.ellipse([(size * 26 / 32) - dot_r, cy - dot_r, (size * 26 / 32) + dot_r, cy + dot_r], fill=COLOR_PAPER)

        return img

    # 2. Save apple-touch-icon.png (180x180)
    apple_icon = draw_icon(180)
    apple_icon.save(os.path.join(public_dir, "apple-touch-icon.png"), "PNG")
    print("Generated apple-touch-icon.png")

    # 3. Save favicon.ico (multi-resolution 16x16, 32x32, 48x48)
    sizes = [16, 32, 48]
    images = [draw_icon(sz) for sz in sizes]
    images[0].save(
        os.path.join(public_dir, "favicon.ico"),
        format="ICO",
        sizes=[(sz, sz) for sz in sizes],
        append_images=images[1:]
    )
    print("Generated favicon.ico")

if __name__ == "__main__":
    generate_favicons()
