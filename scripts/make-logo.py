"""Generates the logo variants (transparent + light-on-dark) from public/images/ofgen-logo.png."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "images")

# --- logo: transparent background, plus a light variant for dark backgrounds
src = Image.open(os.path.join(OUT, "ofgen-logo.png")).convert("RGBA")
px = src.load()
w, h = src.size
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        m = min(r, g, b)
        if m > 235:  # near white -> transparent
            px[x, y] = (r, g, b, 0)
        elif m > 200:
            px[x, y] = (r, g, b, int(a * (235 - m) / 35))
src = src.crop(src.getbbox())
src.save(os.path.join(OUT, "logo.png"))
light = src.copy(); lp = light.load()
for y in range(light.size[1]):
    for x in range(light.size[0]):
        r, g, b, a = lp[x, y]
        if a and abs(r - g) < 18 and abs(g - b) < 18:  # grey wordmark -> white
            lp[x, y] = (255, 255, 255, a)
light.save(os.path.join(OUT, "logo-light.png"))
print("ok")
