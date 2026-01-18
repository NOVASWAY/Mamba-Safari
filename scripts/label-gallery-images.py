#!/usr/bin/env python3
"""
Script to help identify and label gallery images correctly
Based on image dimensions, file sizes, and content descriptions
"""
import os
from PIL import Image

gallery_dir = 'public/images/gallery'

# Based on the image descriptions provided earlier, let's map them correctly
# We need to identify which file contains which content

image_analysis = {
    # Portrait images (ratio < 0.9)
    'portrait_images': [],
    # Landscape images (ratio > 1.1)  
    'landscape_images': [],
    # Square-ish images (0.9 <= ratio <= 1.1)
    'square_images': []
}

images = sorted([f for f in os.listdir(gallery_dir) if f.endswith('.jpg')])

print("=" * 70)
print("GALLERY IMAGE ANALYSIS")
print("=" * 70)

for img_file in images:
    img_path = os.path.join(gallery_dir, img_file)
    img = Image.open(img_path)
    ratio = img.width / img.height
    size_kb = os.path.getsize(img_path) / 1024
    
    orientation = 'Portrait' if ratio < 0.9 else 'Landscape' if ratio > 1.1 else 'Square'
    
    print(f"\n📸 {img_file}")
    print(f"   Size: {img.width}x{img.height} ({orientation}, ratio: {ratio:.2f})")
    print(f"   File size: {size_kb:.1f}KB")
    
    if ratio < 0.9:
        image_analysis['portrait_images'].append({
            'file': img_file,
            'width': img.width,
            'height': img.height,
            'ratio': ratio,
            'size_kb': size_kb
        })
    elif ratio > 1.1:
        image_analysis['landscape_images'].append({
            'file': img_file,
            'width': img.width,
            'height': img.height,
            'ratio': ratio,
            'size_kb': size_kb
        })
    else:
        image_analysis['square_images'].append({
            'file': img_file,
            'width': img.width,
            'height': img.height,
            'ratio': ratio,
            'size_kb': size_kb
        })

print("\n" + "=" * 70)
print("IMAGE CATEGORIZATION")
print("=" * 70)

print(f"\nPortrait Images ({len(image_analysis['portrait_images'])}):")
for img in sorted(image_analysis['portrait_images'], key=lambda x: x['file']):
    print(f"  - {img['file']} ({img['width']}x{img['height']})")

print(f"\nLandscape Images ({len(image_analysis['landscape_images'])}):")
for img in sorted(image_analysis['landscape_images'], key=lambda x: x['file']):
    print(f"  - {img['file']} ({img['width']}x{img['height']})")

print(f"\nSquare Images ({len(image_analysis['square_images'])}):")
for img in sorted(image_analysis['square_images'], key=lambda x: x['file']):
    print(f"  - {img['file']} ({img['width']}x{img['height']})")

print("\n" + "=" * 70)
print("EXPECTED CONTENT BASED ON DESCRIPTIONS:")
print("=" * 70)
print("""
Based on the image descriptions provided:

1. Lioness closeup - Portrait (tall grass, vehicle in background)
2. Elephants with Kilimanjaro - Portrait (mountain backdrop)
3. Lions on road - Portrait (male with mane, lioness, vehicle)
4. Three lionesses - Portrait (walking in line)
5. Topi antelopes - Portrait (adult with horns, young)
6. Rhinoceros grazing - Landscape (green field, white bird)
7. Hot air balloons - Portrait (sunrise, savanna)
8. Safari vehicle with elephant - Portrait (Land Cruiser, Kilimanjaro)
9. Black-backed jackal - Portrait (grassland, looking at camera)
""")

