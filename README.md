# adityasinha · portfolio

A static site with no build step: `index.html`, `styles.css`, `app.js`, and `assets/`.

## Preview locally

```bash
python3 -m http.server 4321
```

Then open http://localhost:4321.

## Add your photo

Put a portrait at `assets/me.jpg` (4:5 works best, roughly 800×1000). Until you do, the polaroid in the "hey, i'm aditya" section shows an orange mascot instead.

## Deploy (pick one)

- **Vercel:** `npx vercel` in this folder, or drag the folder into vercel.com/new. No framework, no build command.
- **Netlify:** drag this folder onto app.netlify.com/drop.
- **GitHub Pages:** push this folder to a repo, then Settings → Pages → deploy from `main` / root.
- **Cloudflare Pages:** `npx wrangler pages deploy .`

## Editing content

- All the copy lives in `index.html`, in one block per section (search for `====`).
- The 20 hero drawers (label, SQL line, result, caption) are in the `DRAWERS` array in `app.js`.
- The reach chart data is in the `BARS` array in `app.js`.
- Colors are CSS variables at the top of `styles.css` (`--orange`, `--cream`, `--ink`, …).
