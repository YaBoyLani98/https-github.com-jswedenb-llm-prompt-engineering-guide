# LLM Prompt Engineering Guide

This is a modern, responsive, and visually appealing multi-page static website built to serve as a comprehensive guide to LLM Prompt Engineering. It covers essential components, core features, advanced capabilities, best practices, common challenges, optimization techniques, and real-world applications, tailored for aspiring graduate-level engineering students in GenAI and LLM Technologies.

## Project Overview

The website is built using HTML5, CSS (vanilla), and minimal JavaScript, ensuring fast performance, strong accessibility (WCAG 2.1 AA), and good SEO. It's designed to be easily hosted on platforms like GitHub Pages or Netlify without any backend dependencies.

## Features

*   **Multi-page Structure:** Home, Components, Features, Advanced, Best Practices, Challenges, Optimization, Applications, Contact, and a 404 page.
*   **Responsive Design:** Adapts seamlessly to mobile, tablet, and desktop screens.
*   **Accessibility Focused:** Semantic HTML, skip links, clear focus states, and high color contrast.
*   **Clean & Modern UI:** Professional design system with a minimalist aesthetic.
*   **Interactive Elements:** Mobile navigation toggle, smooth "Back to Top" scroll.
*   **SEO Friendly:** Meta tags, canonical URLs, `sitemap.xml`, and `robots.txt`.
*   **Contact Form:** Static form ready for integration with services like Netlify Forms or Formspree.

## Prerequisites

No specific prerequisites are needed beyond a web browser to view the site. For local development, a text editor (like VS Code) is sufficient.

## How to Run Locally

1.  **Clone the repository (if applicable):**
    ```bash
    git clone https://github.com/your-username/llm-prompt-engineering-guide.git
    cd llm-prompt-engineering-guide
    ```
    *(Note: This step is illustrative. If you received the codebase directly, skip cloning.)*

2.  **Open `index.html`:**
    Simply open the `index.html` file in your preferred web browser. All other pages are linked internally.

    Alternatively, you can use a local web server (e.g., VS Code's Live Server extension) for a more robust local development experience.

## How to Deploy

This is a static website, making deployment straightforward to services like GitHub Pages or Netlify.

### GitHub Pages

1.  **Create a GitHub Repository:** If you haven't already, create a new public repository on GitHub (e.g., `llm-prompt-engineering-guide`).
2.  **Push Your Code:** Push your local codebase to this new GitHub repository.
3.  **Configure GitHub Pages:**
    *   Go to your repository on GitHub.
    *   Click on "Settings" > "Pages".
    *   Under "Build and deployment", select "Deploy from a branch".
    *   Choose your main branch (e.g., `main` or `master`) and the `/ (root)` folder, then click "Save".
    *   GitHub Pages will build and deploy your site. The URL will typically be `https://your-username.github.io/your-repository-name/`.

### Netlify

1.  **Connect to Git:** Log in to Netlify and click "Add new site" > "Import an existing project".
2.  **Choose Your Git Provider:** Select GitHub, GitLab, or Bitbucket and authorize Netlify.
3.  **Pick Your Repository:** Select the repository containing your website.
4.  **Configure Build Settings:**
    *   **Owner:** Your Git username/organization.
    *   **Branch to deploy:** `main` (or `master`).
    *   **Base directory:** (Leave blank if your files are in the root).
    *   **Build command:** (Leave blank for static sites).
    *   **Publish directory:** (Leave blank, Netlify will detect `index.html` in root).
5.  **Deploy Site:** Click "Deploy site". Netlify will build and deploy your site, providing you with a unique URL.

## How to Configure the Contact Form Endpoint

The `contact.html` page includes a static form that can be easily integrated with services like Netlify Forms or Formspree.

### Netlify Forms

1.  **Deploy your site to Netlify** (as described above).
2.  **No extra configuration is needed in your code.** Netlify automatically detects the `data-netlify="true"` attribute on your form.
3.  **Form Submissions:** Once deployed, Netlify will automatically capture form submissions. You can view them in your Netlify dashboard under "Forms".

### Formspree

1.  **Go to Formspree:** Visit [Formspree.io](https://formspree.io/) and sign up for a free account.
2.  **Create a New Form:** Click "New Form" and follow the instructions to create a new form endpoint.
3.  **Get Your Endpoint URL:** Formspree will provide you with a unique endpoint URL (e.g., `https://formspree.io/f/yourformid`).
4.  **Update `contact.html`:**
    *   Open `contact.html`.
    *   Find the `<form>` tag.
    *   Replace `data-netlify="true"` and `netlify-honeypot="bot-field"` with `action="YOUR_FORMSPREE_ENDPOINT_URL"` and `method="POST"`.
    *   Example: `<form action="https://formspree.io/f/yourformid" method="POST">`
    *   Remove the hidden `bot-field` paragraph if not using Netlify's honeypot.
5.  **Deploy/Update Site:** Deploy your site (or push changes if already deployed). Form submissions will now go to your Formspree endpoint.

## Notes on Customizing Branding, Colors, and Fonts

The design system is defined using CSS variables in `assets/css/styles.css`, making customization straightforward.

*   **Colors:** Modify the hex codes for `--primary-accent`, `--secondary-accent`, `--text-primary`, etc., in the `:root` selector of `assets/css/styles.css`.
*   **Fonts:**
    *   To change Google Fonts, update the `<link>` tags in the `<head>` of all HTML files to import your desired fonts.
    *   Then, update `--font-heading`, `--font-body`, and `--font-monospace` variables in `assets/css/styles.css` to use your new font families.
*   **Spacing, Borders, Shadows:** Adjust the values for `--space-*`, `--border-radius-*`, and `--shadow-*` variables in `assets/css/styles.css` to fine-tune the visual style.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Changelog

*   **2025-10-13:** Initial release.
