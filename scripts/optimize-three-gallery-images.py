#!/usr/bin/env python3
"""
Script to optimize the 3 gallery images
"""
try:
    from PIL import Image
    import os

    gallery_dir = 'public/images/gallery'
    
    # The 3 images to optimize
    images_config = [
        {
            'file': '01-lions-safari-vehicle-road.jpg',
            'max_size': (1200, 900),  # Landscape for lions on road
        },
        {
            'file': '02-hot-air-balloons-sunrise.jpg',
            'max_size': (1200, 800),  # Landscape for balloons
        },
        {
            'file': '03-kilimanjaro-starry-night.jpg',
            'max_size': (800, 1200),  # Portrait for mountain
        },
    ]
    
    print("Optimizing gallery images...\n")
    
    for config in images_config:
        img_path = os.path.join(gallery_dir, config['file'])
        if not os.path.exists(img_path):
            print(f"⚠ {config['file']} not found, skipping")
            continue
        
        img = Image.open(img_path)
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Calculate optimal size maintaining aspect ratio
        original_ratio = img.width / img.height
        target_ratio = config['max_size'][0] / config['max_size'][1]
        
        if original_ratio > target_ratio:
            new_width = config['max_size'][0]
            new_height = int(config['max_size'][0] / original_ratio)
        else:
            new_height = config['max_size'][1]
            new_width = int(config['max_size'][1] * original_ratio)
        
        # Resize with high quality
        resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Save optimized
        resized.save(img_path, 'JPEG', quality=85, optimize=True)
        
        new_size = os.path.getsize(img_path) / 1024
        print(f"✓ {config['file']}")
        print(f"  Resized: {new_width}x{new_height} ({new_size:.1f}KB)\n")
    
    print("✓ Optimization complete!")

except Exception as e:
    print(f"Error: {e}")
    import traceback
    traceback.print_exc()

