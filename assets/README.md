# C-Cube NicheResource — Website MVP

A bilingual Korean/English static website MVP designed for GitHub Pages.

## Included
- Responsive landing page
- Korean / English language toggle
- Two-way service entry points:
  - Overseas clients looking for Korean suppliers and partners
  - Korean businesses looking for global suppliers, buyers, and partners
- Four service stages: Search, Verify, Connect, Support
- Inquiry form that prepares and copies a project brief locally
- No server, database, API key, or build process required

## Important MVP limitation
The inquiry form does **not** submit data to C-Cube. It formats the entered information and attempts to copy it to the visitor's clipboard. Before public launch, connect a real inquiry route such as a business email link or an approved form service, and publish an appropriate privacy notice.

## Deploy to GitHub Pages
1. Create a GitHub repository, for example `ccube-nicheresource`.
2. Upload the contents of this folder to the repository root. `index.html` must be in the root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then save.
6. Wait for the Pages deployment to finish. GitHub will show the public URL in Settings → Pages.
7. Test the site on desktop and mobile, switch Korean/English, and test the inquiry summary.
8. Add a custom domain only after deciding which domain should represent C-Cube NicheResource.

## Files
- `index.html` — page structure and bilingual content
- `assets/style.css` — responsive visual design
- `assets/script.js` — language switching, mobile menu, inquiry summary

## Editing
Most visible copy is in `assets/script.js` under `translations.ko` and `translations.en`.
Colours and layout are in `assets/style.css`.

## Before production launch
- Connect actual inquiry submission or a monitored business email.
- Add privacy notice and consent language if collecting personal information.
- Replace sample imagery/visuals with approved brand assets and real project examples.
- Verify claims, service availability, pricing, and contact details.
- If using a custom domain, configure DNS and HTTPS in GitHub Pages settings.
