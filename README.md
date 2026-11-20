# Jaydee & Andrea — Wedding Invitation

A digital wedding invitation website for **Jaydee Robert Laurio & Andrea Marasigan**.

- **Date:** Thursday, January 14, 2027 · 3:00 PM
- **Venue:** Farm Hills Garden, Silang, Cavite ([View Map](https://maps.app.goo.gl/EEgveXjGWywgGar9A))
- **Live site:** [jaydee-andrea-weddinginvitation.pages.dev](https://jaydee-andrea-weddinginvitation.pages.dev/)
- **RSVP page:** [jaydee-andrea-rsvp.pages.dev/rsvp](https://jaydee-andrea-rsvp.pages.dev/rsvp/)

Built with plain **HTML, CSS and JavaScript**: no frameworks, no build step, free hosting on Cloudflare Pages.

---

## Sections

| # | Section | What it shows |
|---|---------|---------------|
| 1 | Hero | Couple photo with a slow focus reveal, names, Colossians 3:14, **RSVP Here** button |
| 2 | Save the Date | Polaroid photo, "Thursday, January 14, 2027 · 3:00 PM", January calendar with the 14th circled |
| 3 | Venue | Watercolor painting of Farm Hills Garden and a **View Map** button |
| 4 | Dress Code | Watercolor illustrations: Principal Sponsors (Ninongs in all black, Ninangs in all white long gowns) and Guests (all black formal or semi-formal) |
| 5 | Nuptials | Parents, Principal Sponsors, Secondary Sponsors (Cord, Candle, Veil), Entourage, Team Groom and Team Bride |
| 6 | FAQ | 9 tap-to-open questions and answers |
| 7 | RSVP | **Confirm Your Attendance** button, linked to the RSVP page |
| 8 | Footer | Names, date and venue |

**Extras**

- 🎵 **Background music** ("Risk It All" instrumental)
  - Starts on the guest's first tap anywhere on the page. Phones and browsers block sound until the page is touched.
  - The music button in the bottom-right corner plays or pauses it.
  - If a guest pauses it, it stays paused.
  - It also pauses when the guest switches apps.
- Fade-up animations while scrolling
- Works on phones and desktops, and respects the device's "reduce motion" setting

---

## Folder structure

```
Jaydee-Andrea-WeddingInvitation/
├── index.html          Page content: all sections, names, links
├── css/
│   └── style.css       All styling; image paths are listed at the top
├── js/
│   └── main.js         FAQ accordion, music, scroll animations
├── images/
│   ├── hero-couple.jpg               Hero background photo
│   ├── save-the-date.jpg             Polaroid photo
│   ├── venue-watercolor.jpg          Venue painting
│   ├── nuptials.jpg                  Photo above the Nuptials section
│   ├── dress-principal-sponsors.webp
│   └── dress-guests.webp
├── audio/
│   └── risk-it-all.mp3  Background music
├── README.md
└── .gitignore
```

---

## Common edits

| To change… | Edit this |
|------------|-----------|
| Names, FAQ answers, any text | `index.html` |
| Date and time under Save the Date | `index.html`: find `class="savedate-month"` |
| RSVP link | `index.html`: update **both** `id="heroRsvp"` and `id="rsvpBtn"` |
| Map link | `index.html`: find `class="view-map"` |
| A photo | Replace the file in `images/` **with the same file name** |
| Music | Replace `audio/risk-it-all.mp3` with the same file name |
| Colors, fonts, sizes | `css/style.css` (colors are in the `:root` section at the top) |

**Tips**

- Keep images under about 1 MB each so the page loads fast on mobile data.
- After a change goes live, open the site in an incognito window, or hard-refresh with Cmd + Shift + R, to see the newest version.

---

## How to update the live site

The GitHub repo is connected to **Cloudflare Pages**. Every `git push` to `main` updates the live site automatically within about 1 minute.

**Every time you edit:**

```bash
git pull                                  # 1. get the latest first
# 2. edit or replace the files
git add .                                 # 3. stage all changes
git commit -m "Describe what you changed" # 4. save a version
git push                                  # 5. upload, and Cloudflare deploys
```

**Check the deploy:** Cloudflare dashboard → **Workers & Pages** → the Pages project → **Deployments**. The newest entry should say **Success**.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `fatal: not a git repository` | You're in the wrong folder, maybe a GitHub "Download ZIP" copy. Use the folder made by `git clone`, or connect the folder: `git init -b main`, then `git remote add origin <repo URL>`, `git fetch origin`, `git reset origin/main` and `git branch --set-upstream-to=origin/main` |
| Push rejected: `fetch first` | Someone changed GitHub first. Run `git pull --rebase origin main`, then `git push` |
| `CONFLICT` in a file | Choose which version to keep, run `git add <file>`, then `GIT_EDITOR=true git rebase --continue`, then `git push`. To undo: `git rebase --abort` |
| Push fails with `HTTP 400` | Run once: `git config --global http.postBuffer 524288000`, then push again |
| `zsh: command not found: ﬁgit` | Copy-paste merged "fi" into one character. Type the command instead of pasting it |
| Music doesn't play on the computer | Opening `index.html` by double-clicking blocks audio. Use VS Code **Live Server**, or check on the live site |

**Rules of thumb**

- Edit in one place only: VS Code **or** the GitHub website, not both.
- Don't use GitHub's "Download ZIP" for a folder you'll push from.
- Always run `git pull` before you start editing.

---

## Preview on your computer

**VS Code Live Server**

1. Install the **Live Server** extension.
2. Right-click `index.html` and choose **Open with Live Server**.

**Or use the terminal**

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

---

## To-do

- [x] Deploy to Cloudflare Pages
- [x] Connect the RSVP buttons to the RSVP page
- [ ] Confirm the FAQ arrival and ceremony times match the 3:00 PM start
- [ ] Confirm the RSVP deadline
- [ ] Add a link-preview image and title for Messenger and Facebook sharing
- [ ] Security: make the repo private, turn on 2FA for GitHub, Cloudflare and Google, hide the site from search engines, add security headers
- [ ] Optional: custom domain
- [ ] Optional: "Tap to Open Invitation" cover screen so music always starts at the opening

---

## Credits

- **Fonts:** Great Vibes, Alex Brush, Playfair Display, Cormorant Garamond (Google Fonts)
- **Music:** "Risk It All" by Bruno Mars (instrumental version), used for this private invitation
- **Photos and illustrations:** the couple's own photos and watercolor artwork

Made with love for Jaydee & Andrea · January 14, 2027 🤍
