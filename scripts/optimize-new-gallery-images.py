#!/usr/bin/env python3
"""
Script to optimize the new gallery images
"""
try:
    from PIL import Image
    import os

    gallery_dir = 'public/images/gallery'
    
    # New images to optimize
    images_to_optimize = [
        '01-rhinoceros-grazing-bridge.jpg',
        '02-lions-safari-vehicle-road.jpg',
        '03-safari-vehicle-elephant-kilimanjaro.jpg',
        '04-kilimanjaro-starry-night.jpg',
    ]
    
    print("Optimizing new gallery images...\n")
    
    for img_file in images_to_optimize:
        img_path = os.path.join(gallery_dir, img_file)
        if not os.path.exists(img_path):
            print(f"⚠ {img_file} not found, skipping")
            continue
        
        img = Image.open(img_path)
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Determine optimal size based on orientation
        ratio = img.width / img.height
        if ratio > 1.1:  # Landscape
            max_size = (1200, 900)
        elif ratio < 0.9:  # Portrait
            max_size = (800, 1200)
        else:  # Square-ish
            max_size = (1000, 1000)
        
        # Calculate optimal size maintaining aspect ratio
        if ratio > max_size[0] / max_size[1]:
            new_width = max_size[0]
            new_height = int(max_size[0] / ratio)
        else:
            new_height = max_size[1]
            new_width = int(max_size[1] * ratio)
        
        # Resize with high quality
        resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Save optimized
        resized.save(img_path, 'JPEG', quality=85, optimize=True)
        
        old_size = os.path.getsize(img_path) / 1024
        print(f"✓ {img_file}")
        print(f"  Resized: {new_width}x{new_height} ({old_size:.1f}KB)\n")
    
    print("✓ Optimization complete!")

except Exception as e:
    print(f"Error: {e}")
    import traceback
    traceback.print_exc()

