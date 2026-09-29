# Jaydee & Andrea — Wedding Invitation

A digital wedding invitation website for **Jaydee Robert Laurio & Andrea Marasigan**.

- **Date:** Thursday, January 14, 2027 · 4:00 PM
- **Venue:** Farm Hills Garden, Silang, Cavite
- **Live site:** _add your `[.pages.dev](https://jaydee-andrea-weddinginvitation.pages.dev/)` link here once deployed_
- **Live site:** _add your `` link here once deployed_

Built with plain **HTML, CSS and JavaScript**: no frameworks, no build step, no cost to host.

---

## Sections

| # | Section | What it shows |
|---|---------|---------------|
| 1 | Hero | Couple photo with a slow focus reveal, names, Colossians 3:14, RSVP button |
| 2 | Save the Date | Polaroid photo and a January 2027 calendar with the 14th circled |
| 3 | Venue | Watercolor painting of Farm Hills Garden and a **View Map** link |
| 4 | Dress Code | Watercolor illustrations for Principal Sponsors and Guests |
| 5 | Nuptials | Parents, Principal and Secondary Sponsors, Entourage, Team Groom and Team Bride |
| 6 | FAQ | 9 tap-to-open questions and answers |
| 7 | RSVP | "Confirm Your Attendance" button |
| 8 | Footer | Names, date and venue |

**Extras**

- 🎵 Background music ("Risk It All" instrumental) with a small play/pause button in the bottom-right corner
- Fade-up animations while scrolling
- Works on phones and desktops, and respects the device's "reduce motion" setting

---

## Folder structure

```
jaydee-andrea-wedding/
├── index.html          Page content (all sections and names)
├── css/
│   └── style.css       All styling; image paths are listed at the top
├── js/
│   └── main.js         FAQ accordion, music button, scroll animations
├── images/
│   ├── hero-couple.jpg              Hero background photo
│   ├── save-the-date.jpg            Polaroid photo
│   ├── venue-watercolor.jpg         Venue painting
│   ├── nuptials.jpg                 Photo above the Nuptials section
│   ├── dress-principal-sponsors.webp
│   └── dress-guests.webp
└── audio/
    └── risk-it-all.mp3  Background music
```

---

## Common edits

| To change… | Edit this |
|------------|-----------|
| Names, FAQ answers, any text | `index.html` |
| A photo | Replace the file in `images/` **with the same file name** |
| Music | Replace `audio/risk-it-all.mp3` with the same file name |
| Colors or fonts | The top of `css/style.css` (`:root` section) |
| RSVP link | `index.html`: find `id="rsvpBtn"` and set its `href` |

**Tips**

- Keep images small, ideally under 1 MB each, so the page loads fast on mobile data.
- After replacing a photo, hard-refresh the browser (Cmd + Shift + R) to see the new one.

---

## Preview on your computer

Music and some features only work when the site is served, not opened by double-clicking.

**Option A: VS Code Live Server**

1. Install the **Live Server** extension.
2. Right-click `index.html` and choose **Open with Live Server**.

**Option B: Terminal**

```bash
cd jaydee-andrea-wedding
python3 -m http.server 8000
```

Then open http://localhost:8000.

---

## Deploy (Cloudflare Pages)

This repo is connected to **Cloudflare Pages** (free, no bandwidth limit).

**First-time setup**

1. Go to dash.cloudflare.com, then **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select this repository.
3. Use these settings:
   - **Production branch:** `main`
   - **Framework preset:** None
   - **Build command:** _(leave empty)_
   - **Build output directory:** _(leave empty)_ or `/`
4. Click **Save and Deploy**.

**Updating the live site**

```bash
git add .
git commit -m "Describe what you changed"
git push
```

Cloudflare updates the live site automatically about 1 minute after each push.

> If a push fails with `HTTP 400`, run this once and push again:
> `git config --global http.postBuffer 524288000`

---

## To-do

- [ ] Connect the RSVP button to the RSVP page or form
- [ ] RSVP backend (Google Apps Script + Google Sheet)
- [ ] Confirm the RSVP deadline
- [ ] Add a link-preview image and title for Messenger and Facebook sharing
- [ ] Optional: custom domain

---

## Credits

- **Fonts:** Great Vibes, Alex Brush, Playfair Display, Cormorant Garamond (Google Fonts)
- **Music:** "Risk It All" by Bruno Mars (instrumental version), used for this private invitation
- **Photos and illustrations:** the couple's own photos and commissioned watercolor artwork

Made with love for Jaydee & Andrea · January 14, 2027 🤍
