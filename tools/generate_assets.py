#!/usr/bin/env python3
"""Generate the portfolio's pixel-art portrait (dev-only; Pillow required).

    python3 tools/generate_assets.py

Reads tools/source/my_image.png and writes assets/me-pixel.webp at a web-friendly
size. The whole image is preserved — nothing is cropped — and nearest-neighbour
scaling keeps the original pixel-art look crisp. The site itself has zero
runtime dependencies; this script only builds a static asset once.
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "tools" / "source" / "my_image.png"
ASSETS = ROOT / "assets"
# 360px is 2x the 180px CSS display size — crisp on retina without extra weight.
SIZE = 360


def main():
    if not SOURCE.exists():
        raise SystemExit(f"Missing source image: {SOURCE}")
    ASSETS.mkdir(exist_ok=True)
    with Image.open(SOURCE) as source:
        portrait = source.convert("RGBA").resize(
            (SIZE, SIZE), Image.Resampling.NEAREST
        )
        target = ASSETS / "me-pixel.webp"
        # Lossless WebP keeps pixel art crisp while cutting the payload ~4x vs PNG.
        portrait.save(target, lossless=True, method=6)
    print(f"  {target.relative_to(ROOT)} ({target.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
