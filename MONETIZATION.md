# Cyber Particle Interactive - Growth Checklist

Public site:

https://huyansheng3.github.io/cyber-particle-interaction/

Sitemap:

https://huyansheng3.github.io/cyber-particle-interaction/sitemap.xml

## Search Console

1. Open Google Search Console.
2. Add the URL-prefix property:
   `https://huyansheng3.github.io/cyber-particle-interaction/`
3. Use the HTML tag verification method if Google asks for ownership proof.
4. Paste the provided verification meta tag into `index.html` inside `<head>`.
5. Submit `sitemap.xml`.

## Domain

Good domain candidates:

- `cyberparticle.fun`
- `cyberparticle.app`
- `magic-card.fun`
- `particlewish.com`

After buying a domain:

1. Add a `CNAME` file containing the custom domain.
2. Configure DNS `CNAME` to `huyansheng3.github.io`.
3. Update canonical URLs in HTML, `assets/site-enhance.js`, `robots.txt`, and `sitemap.xml`.
4. Re-submit the new domain in Search Console.

## AdSense

Current ad placeholders:

- Homepage: category separator banners.
- Experience pages: one post-experience slot before related templates.

Keep ads away from:

- Game controls.
- Gesture/camera controls.
- Primary share buttons.
- Any area where users may accidentally click while interacting.

When AdSense is approved, replace `.cpi-ad-slot` content with responsive ad units.
Do not ask users to click ads or visually disguise ads as controls.

## Analytics

The site currently records a small local event buffer in `localStorage`.
It also has a disabled beacon hook in `assets/site-enhance.js`:

```js
analyticsEndpoint: ""
```

To connect a real analytics collector, set this to an HTTPS endpoint that accepts
JSON events. The script sends:

- `page_view`
- `share_copy`
- `share_native`
- `share_social`
- `share_card_download`

Keep analytics privacy-friendly. Do not collect names, phone numbers, addresses,
or camera images.

## Traffic Ideas

- Create seasonal landing copies for 520, Qixi, birthday, Christmas, New Year.
- Share short videos of the templates on Xiaohongshu and Weibo.
- Add new templates around recurring keywords: birthday wish generator, confession page, magic circle effect, cyber snake game.
- Keep every new page in `sitemap.xml` and the homepage card list.
