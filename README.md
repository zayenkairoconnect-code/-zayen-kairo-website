# Zayen Kairo Author Website

A responsive static author website built with HTML, CSS and vanilla JavaScript.

## Pages
- Home
- Books
- About
- Free Resources
- Notes / Blog
- Contact

## Before publishing: important customisation checklist

1. **Verify book titles.** Edit `js/books-data.js` and replace any working titles with the exact titles currently published on Amazon.
2. **Add real book covers.** Replace the SVG placeholders in `images/books/` with your final cover images. Update the `cover` paths in `js/books-data.js` if filenames change.
3. **Add Amazon links.** Replace every `amazonUrl:"#"` value in `js/books-data.js` with the correct Amazon product URL. Do not publish placeholder `#` links.
4. **Personalise the About page.** Replace starter biography text in `about.html` with your approved author biography.
5. **Add a contact email.** Replace `YOUR-EMAIL@example.com` in `contact.html`.
6. **Connect MailerLite.** Create a signup form in MailerLite and paste its official embed code into the `newsletter-form` area in `index.html` or into the relevant page. Remove the disabled placeholder form generated in `js/main.js` once the real embed is installed.
7. **Add real lead magnets.** Upload approved PDF files to the website or a reliable file host, then connect each resource to its correct download or MailerLite delivery automation.
8. **Add legal pages.** Before collecting personal data, publish a Privacy Policy and any required consent/unsubscribe information. Configure MailerLite to handle subscription confirmation and unsubscribe requests.
9. **Test all links and forms** on desktop and mobile before announcing the website.

## Preview locally
Open `index.html` in a browser. For a better local preview, use Visual Studio Code with the Live Server extension.

## Deploy to Cloudflare Pages
1. Push this repository to GitHub.
2. In Cloudflare, open **Workers & Pages** and choose **Create application** > **Pages** > **Connect to Git**.
3. Select this GitHub repository.
4. For a plain static HTML site, leave the build command empty and set the output directory to `/` (the repository root), if the dashboard requests it.
5. Deploy. Cloudflare will provide a `*.pages.dev` preview address.

## Notes
- This is a static website. No passwords, API keys or private credentials should ever be committed to this public repository.
- The newsletter form is intentionally inactive until the real MailerLite form is connected.
- Book covers are visual placeholders, not final Amazon cover artwork.
