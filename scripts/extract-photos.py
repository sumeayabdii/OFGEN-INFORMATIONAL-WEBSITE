"""Cuts the photos out of the design mock-up (design/mockup.png) and removes
the text that is baked into them. These are stand-ins: replace any file in
public/images with a high-resolution photo of the same name."""
import cv2, numpy as np, os, sys
HERE = os.path.dirname(__file__)
ref = cv2.imread(os.path.join(HERE, "..", "design", "mockup.png"))
OUT = os.path.join(HERE, "..", "public", "images")

def fade_bottom(img, start):
    """Fade the lower part of a card photo into the card's dark colour."""
    h = img.shape[0]
    dark = np.array([22, 20, 18], np.float32)
    out = img.astype(np.float32)
    for y in range(start, h):
        t = min(1, (y - start) / max(1, (h - start) * 0.55))
        out[y] = out[y] * (1 - t) + dark * t
    return out.astype(np.uint8)

def clean(box, masks, upscale=1.0, name=None, bright=200, fade=None):
    x0, y0, x1, y1 = box
    img = ref[y0:y1, x0:x1].copy()
    mask = np.zeros(img.shape[:2], np.uint8)
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    lum = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    for (mx0, my0, mx1, my1, mode) in masks:
        mx0, my0, mx1, my1 = mx0 - x0, my0 - y0, mx1 - x0, my1 - y0
        if mode == "solid":
            mask[my0:my1, mx0:mx1] = 255
        else:
            sub = np.zeros_like(mask)
            text = (lum > bright) | ((hsv[..., 0] < 25) & (hsv[..., 1] > 140) & (hsv[..., 2] > 170))
            sub[text] = 255
            m = np.zeros_like(mask); m[my0:my1, mx0:mx1] = 255
            mask |= sub & m
    mask = cv2.dilate(mask, np.ones((5, 5), np.uint8), iterations=2)
    if mask.any():
        img = cv2.inpaint(img, mask, 9, cv2.INPAINT_TELEA)
        # soften the filled areas so no ghost letters remain, then add a little grain back
        soft = cv2.GaussianBlur(img, (0, 0), 9)
        feather = cv2.GaussianBlur(cv2.dilate(mask, np.ones((9, 9), np.uint8)), (0, 0), 8).astype(np.float32)[..., None] / 255
        img = (img * (1 - feather) + soft * feather).astype(np.float32)
        noise = np.random.default_rng(1).normal(0, 3.5, img.shape[:2])[..., None]
        img = np.clip(img + noise * feather, 0, 255).astype(np.uint8)
    if fade is not None:
        img = fade_bottom(img, fade - y0)
    if upscale != 1:
        img = cv2.resize(img, None, fx=upscale, fy=upscale, interpolation=cv2.INTER_LANCZOS4)
        img = cv2.detailEnhance(img, sigma_s=4, sigma_r=0.08)
    cv2.imwrite(os.path.join(OUT, name), img, [cv2.IMWRITE_JPEG_QUALITY, 90])
    print(name, img.shape[1], "x", img.shape[0])

T, S = "text", "solid"
# Hero (below the header bar, above the dark strip)
clean((0, 102, 1442, 588), [
    (80, 150, 530, 185, S), (80, 195, 735, 335, S), (80, 352, 680, 420, S),
    (84, 438, 358, 506, S), (372, 438, 618, 506, S)], 1.4, "hero.jpg")
# Who we are
clean((548, 752, 1021, 1118), [], 1.6, "who-we-are.jpg")
# Solutions background (sky + pylon, right side, above the cards)
clean((690, 1690, 1442, 1915), [(1200, 1830, 1365, 1860, S)], 1.6, "solutions-bg.jpg")
# Solution cards (text at the bottom removed)
for key, x0, x1 in [("solar", 90, 387), ("storage", 412, 709), ("grid", 735, 1031), ("telecom", 1057, 1353)]:
    clean((x0, 1921, x1, 2270), [(x0 + 10, 2100, x1 - 10, 2262, S)], 1.6, f"solution-{key}.jpg", fade=2095)
# Project cards
for key, x0, x1 in [("solar", 91, 400), ("storage", 430, 737), ("grid", 766, 1057), ("telecom", 1086, 1353)]:
    clean((x0, 3025, x1, 3178), [], 1.8, f"project-{key}.jpg")
# Impact band
clean((0, 3374, 1442, 3582), [(80, 3408, 470, 3545, S), (565, 3398, 740, 3572, S), (775, 3398, 845, 3572, S), (845, 3530, 935, 3572, S),
    (985, 3398, 1150, 3572, S), (1195, 3398, 1340, 3572, S)], 1.4, "impact-bg.jpg")
# Contact panel
clean((0, 3842, 540, 4194), [(80, 3878, 470, 4040, S), (84, 4056, 248, 4108, S)], 1.6, "contact-bg.jpg")
