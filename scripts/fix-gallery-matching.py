#!/usr/bin/env python3
"""
Script to correctly match gallery images with their descriptions
Based on the actual image content descriptions provided
"""
import os
import shutil

gallery_dir = 'public/images/gallery'

# Based on the actual image descriptions from the conversation,
# here's the correct mapping of what each image file should contain
correct_mapping = [
    {
        'file': '01-lioness-savanna-closeup.jpg',
        'correct_name': '01-lioness-savanna-closeup.jpg',
        'alt': 'Lioness in tall savanna grass with safari vehicle visible in background',
        'category': 'Wildlife',
        'description': 'Close encounter with lioness, portrait orientation'
    },
    {
        'file': '02-elephants-mount-kilimanjaro.jpg',
        'correct_name': '02-elephants-mount-kilimanjaro.jpg',
        'alt': 'African elephants with Mount Kilimanjaro snow-capped peak in background',
        'category': 'Wildlife & Landscape',
        'description': 'Elephant herd with mountain backdrop, portrait'
    },
    {
        'file': '03-lions-dirt-road-safari.jpg',
        'correct_name': '03-lions-dirt-road-safari.jpg',
        'alt': 'Male lion with mane and lioness walking on dirt road with safari vehicle behind',
        'category': 'Wildlife',
        'description': 'Two lions on road, portrait'
    },
    {
        'file': '04-three-lionesses-savanna.jpg',
        'correct_name': '04-three-lionesses-savanna.jpg',
        'alt': 'Three lionesses walking in single file line through tall savanna grass',
        'category': 'Wildlife',
        'description': 'Three lionesses in line, portrait'
    },
    {
        'file': '05-topi-antelopes-golden-savanna.jpg',
        'correct_name': '05-topi-antelopes-golden-savanna.jpg',
        'alt': 'Topi antelopes - adult with lyre-shaped horns and young antelope in golden savanna',
        'category': 'Wildlife',
        'description': 'Two Topi antelopes, portrait'
    },
    {
        'file': '06-rhinoceros-grazing-white-bird.jpg',
        'correct_name': '06-rhinoceros-grazing-white-bird.jpg',
        'alt': 'Rhinoceros grazing in lush green field with white bird (egret) nearby',
        'category': 'Wildlife',
        'description': 'Rhino with bird, landscape orientation'
    },
    {
        'file': '07-hot-air-balloons-sunrise-safari.jpg',
        'correct_name': '07-hot-air-balloons-sunrise-safari.jpg',
        'alt': 'Hot air balloons being inflated and prepared for flight at sunrise on savanna',
        'category': 'Adventure',
        'description': 'Balloons at sunrise, portrait'
    },
    {
        'file': '08-safari-vehicle-elephant-kilimanjaro.jpg',
        'correct_name': '08-safari-vehicle-elephant-kilimanjaro.jpg',
        'alt': 'Safari vehicle (Land Cruiser) observing elephant with Mount Kilimanjaro in background',
        'category': 'Safari Experience',
        'description': 'Safari jeep with elephant and mountain, portrait'
    },
    {
        'file': '09-black-backed-jackal-grassland.jpg',
        'correct_name': '09-black-backed-jackal-grassland.jpg',
        'alt': 'Black-backed jackal standing alert in tall grassland looking at camera',
        'category': 'Wildlife',
        'description': 'Jackal in grass, portrait'
    },
]

print("Verifying gallery image descriptions...\n")
print("Current gallery configuration should match these descriptions:\n")

for item in correct_mapping:
    file_path = os.path.join(gallery_dir, item['file'])
    if os.path.exists(file_path):
        print(f"✓ {item['file']}")
        print(f"  Alt: {item['alt']}")
        print(f"  Category: {item['category']}")
        print(f"  {item['description']}\n")
    else:
        print(f"⚠ {item['file']} not found\n")

print("If descriptions don't match, update the component file.")

