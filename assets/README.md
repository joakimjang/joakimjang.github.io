# C-Cube NicheResource — Website MVP

A bilingual Korean/English static website for GitHub Pages.

## Included
- Responsive landing page with larger, more readable body text and a more balanced heading hierarchy
- Korean / English language toggle
- Two-way global partner discovery services
- Four service stages: Search, Verify, Connect, Support
- AJAX contact form routed to `joachimjang@gmail.com` through FormSubmit, with an email-client fallback if the service fails

## Contact form email delivery
The form submits to the fixed FormSubmit AJAX endpoint `https://formsubmit.co/ajax/joachimjang@gmail.com`. This endpoint determines the notification recipient (C-Cube). The visitor email is used only as `Reply-To`, so replying to the notification reaches the customer. The requested success popup appears only after FormSubmit reports acceptance; this does not independently prove final inbox delivery.

1. Deploy the updated files to GitHub Pages.
2. Open the live site and submit one test inquiry using a valid name and email address. Keep in mind that the success popup means the form service accepted the submission, not that you personally confirmed delivery to the inbox.
3. Check `joachimjang@gmail.com` (including Spam) for FormSubmit's first-use confirmation email.
4. Click the confirmation/activation link. FormSubmit requires this one-time verification before normal email delivery begins.
5. Submit another test inquiry and confirm the message arrives.

If a visitor appears to receive the inquiry itself, verify that the live GitHub Pages site has the latest `index.html` and `assets/script.js`; the fixed endpoint in both files must end in `joachimjang@gmail.com`. A message addressed to C-Cube may show the visitor in the Reply-To field; that is intentional and allows C-Cube to reply directly to the customer. The form uses a third-party service. Do not collect sensitive or confidential information through this MVP form. Review FormSubmit's current terms and privacy practices before production use. If you prefer not to use this provider, replace it with another form backend.

## Deploy to GitHub Pages
1. Unzip this package.
2. Upload the contents of the folder to the repository root. `index.html` must be at the root, and the `assets` folder must remain beside it.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/(root)`, then save.
6. Wait for the deployment to finish, then test the live site on desktop and mobile.
7. Test Korean/English switching and submit a test contact form. Email delivery is not verified until you complete the FormSubmit activation step and confirm a test message arrives. If the AJAX request fails, the site opens a prefilled email draft as a fallback; the visitor must send it manually.

## Files
- `index.html` — page structure and bilingual content; includes the form endpoint
- `assets/style.css` — layout, responsive rules, and typography
- `assets/script.js` — language switching and mobile menu

## Before production launch
- Complete the FormSubmit activation and test end-to-end email delivery.
- Add a privacy notice explaining what personal data is collected and how inquiries are handled.
- Verify service descriptions, availability, and contact details.
- If using a custom domain, configure DNS and HTTPS in GitHub Pages settings.
