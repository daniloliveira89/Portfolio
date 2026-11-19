import os
from PIL import Image, ImageFilter

src_path = r'C:/Users/Zombie PC/.gemini/antigravity/brain/1c2a9853-6515-4feb-8e6e-791b68c45782/.user_uploaded/media_1795102160307_581c292a.png'

im = Image.open(src_path)
bbox = im.getbbox()
print("Original size:", im.size, "BBox:", bbox)

# Crop to tight bounding box
cropped = im.crop(bbox)
cw, ch = cropped.size

# Target square canvas size
CANVAS_SIZE = 1024
square = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (0, 0, 0, 0))

# Scale cropped content to fit inside canvas with 6% margin for aesthetics
scale = (CANVAS_SIZE * 0.88) / max(cw, ch)
new_w = int(cw * scale)
new_h = int(ch * scale)
resized = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)

# Paste centered into square canvas
offset_x = (CANVAS_SIZE - new_w) // 2
offset_y = (CANVAS_SIZE - new_h) // 2
square.paste(resized, (offset_x, offset_y), resized)

# Save master 1024x1024 icon
square.save("assets/images/brand-rabbit.png", "PNG")
print("Saved master brand-rabbit.png")

# Generate standard favicon sizes
sizes = {
    "favicon-16x16.png": 16,
    "favicon-32x32.png": 32,
    "favicon-48x48.png": 48,
    "apple-touch-icon.png": 180,
    "android-chrome-192x192.png": 192,
    "android-chrome-512x512.png": 512,
    "favicon.png": 512
}

for filename, sz in sizes.items():
    icon_resized = square.resize((sz, sz), Image.Resampling.LANCZOS)
    # Save in root
    icon_resized.save(filename, "PNG")
    # Save in assets/images
    icon_resized.save(os.path.join("assets/images", filename), "PNG")
    print(f"Generated {filename} ({sz}x{sz})")

# Generate multi-resolution .ico file
ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
square.save("favicon.ico", format="ICO", sizes=ico_sizes)
square.save("assets/images/favicon.ico", format="ICO", sizes=ico_sizes)
print("Generated multi-size favicon.ico")
