# C-Cube NicheResource — Website MVP

A bilingual Korean/English static website for GitHub Pages.

## Included
- Responsive landing page with improved body-text readability
- Korean / English language toggle
- Two-way global partner discovery services
- Four service stages: Search, Verify, Connect, Support
- Contact form routed to `joachimjang@gmail.com` through FormSubmit

## Contact form email delivery
The form posts to FormSubmit because GitHub Pages serves static files and cannot process form submissions on its own.

1. Deploy the updated files to GitHub Pages.
2. Open the live site and submit one test inquiry using a valid name and email address.
3. Check `joachimjang@gmail.com` (including Spam) for FormSubmit's first-use confirmation email.
4. Click the confirmation/activation link. FormSubmit requires this one-time verification before normal email delivery begins.
5. Submit another test inquiry and confirm the message arrives.

The form uses a third-party service. Do not collect sensitive or confidential information through this MVP form. Review FormSubmit's current terms and privacy practices before production use. If you prefer not to use this provider, replace it with another form backend.

## Deploy to GitHub Pages
1. Unzip this package.
2. Upload the contents of the folder to the repository root. `index.html` must be at the root, and the `assets` folder must remain beside it.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/(root)`, then save.
6. Wait for the deployment to finish, then test the live site on desktop and mobile.
7. Test Korean/English switching and submit a test contact form. Email delivery is not verified until you complete the FormSubmit activation step.

## Files
- `index.html` — page structure and bilingual content; includes the form endpoint
- `assets/style.css` — layout, responsive rules, and typography
- `assets/script.js` — language switching and mobile menu

## Before production launch
- Complete the FormSubmit activation and test end-to-end email delivery.
- Add a privacy notice explaining what personal data is collected and how inquiries are handled.
- Verify service descriptions, availability, and contact details.
- If using a custom domain, configure DNS and HTTPS in GitHub Pages settings.
