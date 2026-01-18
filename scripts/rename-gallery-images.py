#!/usr/bin/env python3
"""
Script to rename gallery images based on their actual content
Based on the image descriptions provided, matching them correctly
"""
import os
import shutil

gallery_dir = 'public/images/gallery'

# Based on the actual image descriptions, here's the correct mapping
# The order should match what's actually in each image file
image_renames = [
    {
        'old': '02-lioness-closeup.jpg',
        'new': '01-lioness-savanna-closeup.jpg',
        'description': 'Lioness in tall savanna grass with safari vehicle in background'
    },
    {
        'old': '03-elephants-kilimanjaro.jpg',
        'new': '02-elephants-mount-kilimanjaro.jpg',
        'description': 'African elephants with Mount Kilimanjaro in background'
    },
    {
        'old': '04-lions-on-road.jpg',
        'new': '03-lions-dirt-road-safari.jpg',
        'description': 'Male lion and lioness walking on dirt road near safari vehicle'
    },
    {
        'old': '05-three-lionesses-walking.jpg',
        'new': '04-three-lionesses-savanna.jpg',
        'description': 'Three lionesses walking in line through savanna grass'
    },
    {
        'old': '06-topi-antelopes-savanna.jpg',
        'new': '05-topi-antelopes-golden-savanna.jpg',
        'description': 'Topi antelopes (adult and young) in golden savanna'
    },
    {
        'old': '07-rhinoceros-grazing.jpg',
        'new': '06-rhinoceros-grazing-white-bird.jpg',
        'description': 'Rhinoceros grazing in green field with white bird companion'
    },
    {
        'old': '08-hot-air-balloons-sunrise.jpg',
        'new': '07-hot-air-balloons-sunrise-safari.jpg',
        'description': 'Hot air balloons being prepared for flight at sunrise'
    },
    {
        'old': '09-safari-elephant-kilimanjaro.jpg',
        'new': '08-safari-vehicle-elephant-kilimanjaro.jpg',
        'description': 'Safari vehicle observing elephant with Mount Kilimanjaro backdrop'
    },
    {
        'old': '10-black-backed-jackal.jpg',
        'new': '09-black-backed-jackal-grassland.jpg',
        'description': 'Black-backed jackal standing in tall grassland'
    },
]

print("Renaming gallery images to match actual content...\n")

for rename in image_renames:
    old_path = os.path.join(gallery_dir, rename['old'])
    new_path = os.path.join(gallery_dir, rename['new'])
    
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f"✓ {rename['old']} → {rename['new']}")
        print(f"  {rename['description']}\n")
    else:
        print(f"⚠ {rename['old']} not found, skipping\n")

print("✓ Image renaming complete!")

