# Motoor website

Landing page, privacy policy and support page for Motoor, built with Jekyll for GitHub Pages and styled with the Motoor Design System v2 tokens.

| Page | URL | Use it for |
|---|---|---|
| Landing | `/` | Store listings (website / marketing URL) |
| Privacy policy | `/privacy/` | Privacy policy URL in Play Console and App Store Connect |
| Support | `/support/` | Support URL in App Store Connect, contact link |
| Delete your data | `/support/#delete-your-data` | Data deletion info for Play Console |

## Before you publish

1. Open `_config.yml` and fill in everything marked `TODO`: your name (as on the store), support email, site `url`.
2. Set the `privacy:` switches to match what your app really does. The privacy policy rewrites itself to match. Make the same answers in the Play Data safety form and App Store privacy labels.
3. Read `privacy.md` and `support.md` once more. They mention **Settings → Profile → Delete account**, **Settings → Premium → Restore purchase** and **Settings → About** in the app; rename these if your menus differ.
4. Optional: replace the placeholder logo in `_includes/logo.html` and the icons in `_includes/icon.html` with the files from `assets/Logos` and `assets/Icons`.

## Languages

English is the default and lives at the site root (`/`, `/privacy/`, `/support/`). Every other language has its own folder with the same three pages, e.g. `/id/`, `/id/privacy/`, `/id/support/`. Visitors switch language from the menu at the top right; it keeps them on the same page.

- `_data/languages.yml` lists the languages in menu order (code, native name, `rtl` for Arabic, Urdu and Persian).
- `_data/i18n/<code>.yml` holds the short strings: header, footer, home page and the phone preview. Every file has the same keys as `en.yml`.

The phone preview on the home page has an **Android | iOS** switch. Both show the same screens (`_includes/phone.html`); `data-platform="ios"` restyles them as the iOS 26 Liquid Glass design (iOS block in `assets/css/main.css`). It opens on the visitor's platform and remembers their choice.
- `<code>/privacy.md` and `<code>/support.md` are full translations. When you change the English `privacy.md` or `support.md`, update the translations too. Each translated privacy policy says the English version applies if they differ.
- The reply time shown on the site is `ui.response_time` in each language file. The privacy facts that are words, not switches (where data is stored, where scans run, how long analytics are kept), are under `privacy:` at the end of each language file.

To add a language: add it to `_data/languages.yml`, copy `_data/i18n/en.yml` to `_data/i18n/<code>.yml` and translate it, then copy an existing language folder (e.g. `id/`) to `<code>/` and change `lang`, `permalink` and the text.

The translations were machine-written; have a native speaker review them, especially the privacy policy.

## Publish on GitHub Pages

1. Create a public repository (for example `motoor-site`) and push these files to `main`.
2. In the repository, open **Settings → Pages**, set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`.
3. After a minute the site is live at `https://USERNAME.github.io/motoor-site/`. In that case set `url: "https://USERNAME.github.io"` and `baseurl: "/motoor-site"` in `_config.yml`.

### Custom domain (recommended)

1. Buy a domain, e.g. `motoor.app`.
2. In **Settings → Pages → Custom domain**, enter it. GitHub adds a `CNAME` file.
3. At your domain registrar add four `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a `CNAME` record for `www` pointing to `USERNAME.github.io`.
4. Tick **Enforce HTTPS** once the certificate is ready, and keep `baseurl: ""`.

## Preview locally

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

When the app is live, paste the store links into `stores:` in `_config.yml`; the "Coming soon" buttons become real download buttons.

## Licence

The site's code, design, text, logo and the app screens shown in the phone preview are © Ido Yudhatama, all rights reserved; see [LICENSE](LICENSE). The repository is public only so GitHub Pages can serve it. The app's design files and product documents live in a private repository.

The Figtree font in `assets/fonts/` is under the SIL Open Font License 1.1 ([OFL.txt](assets/fonts/OFL.txt)).
