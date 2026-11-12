# Zayen Kairo | Official Author Website

Welcome to the official website of **Zayen Kairo**, an author dedicated to making technology easier to understand through practical, beginner-friendly books and learning resources.

This website is built using HTML, CSS, and vanilla JavaScript. It provides readers with a central place to explore books, discover learning resources, read articles, and connect with the author.

## Website Pages

- **Home:** Introduction to the author and featured books.
- **Books:** Explore published and upcoming books.
- **About:** Learn about the author and writing philosophy.
- **Free Resources:** Access supplementary learning materials.
- **Notes / Blog:** Explore articles, insights, and technology-related topics.
- **Contact:** Get in touch with the author.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- GitHub
- Cloudflare Pages

## Project Structure

```text
zayen-kairo-website/
│
├── index.html
├── about.html
├── books.html
├── blog.html
├── contact.html
├── resources.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   └── books-data.js
│
└── images/
    ├── author/
    ├── books/
    └── favicon.svg
```

## Before Publishing: Customisation Checklist

Complete the following tasks before officially launching the website.

1. **Verify Book Titles:** Edit `js/books-data.js` and ensure all book titles and descriptions match the actual books published on Amazon.

2. **Add Final Book Covers:** Replace the SVG placeholder covers in `images/books/` with your final book cover images. Update the corresponding image paths in `js/books-data.js`.

3. **Add Amazon Links:** Replace all placeholder `amazonUrl: "#"` values in `js/books-data.js` with the correct Amazon product URLs.

4. **Personalise the About Page:** Update the starter biography in `about.html` with your final author biography.

5. **Add Contact Information:** Replace `YOUR-EMAIL@example.com` in `contact.html` with your official contact email address.

6. **Connect MailerLite:** Create a signup form in MailerLite and integrate its official embed code into the appropriate website section. Remove the inactive placeholder newsletter form from `js/main.js` once the real form is installed.

7. **Add Free Resources:** Upload your final PDF lead magnets and connect each resource to its correct download link or MailerLite email-delivery automation.

8. **Add Legal Pages:** Publish a Privacy Policy and provide appropriate subscription consent and unsubscribe information before collecting visitor information.

9. **Test the Website:** Check all navigation links, book links, images, newsletter forms, and downloads on desktop, tablet, and mobile devices.

## Preview Locally

You can preview the website on your computer:

1. Open the project folder in Visual Studio Code.
2. Open `index.html` in your browser.

For a better development experience, install the **Live Server** extension in Visual Studio Code and select **Open with Live Server**.

## Deployment with Cloudflare Pages

This project is a static HTML website and can be hosted using Cloudflare Pages through GitHub integration.

### Deployment Steps

1. Upload the complete website project to your GitHub repository.
2. Open your Cloudflare dashboard.
3. Navigate to **Workers & Pages**.
4. Select **Create application → Pages → Connect to Git**.
5. Connect your GitHub account.
6. Select the Zayen Kairo website repository.
7. Configure the deployment settings:
   - **Framework preset:** None
   - **Build command:** Leave empty
   - **Build output directory:** `.` (project root)
8. Click **Save and Deploy**.

After successful deployment, Cloudflare will provide a public website address ending in `.pages.dev`.

Cloudflare can automatically deploy future website updates whenever changes are committed to the connected GitHub production branch.

## Important Notes

- This is a static website built with HTML, CSS, and JavaScript. It does not require a backend server.
- The newsletter form remains inactive until MailerLite is properly integrated.
- Placeholder book covers and Amazon links must be replaced before the official launch.
- Never upload passwords, API keys, private credentials, or sensitive information to this public repository.

---

**Author:** Zayen Kairo  
**Project:** Official Author Website  
**Built with:** HTML, CSS & JavaScript  
**Hosting:** Cloudflare Pages
