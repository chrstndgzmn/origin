# Origin Corporate Cleaning

Lead-generation landing page for **Origin Corporate Cleaning**, a commercial cleaning company in Calgary that serves gyms, corporate offices and medical practices.

**Live:** https://origincorporatecleaning.com

<!-- Add a screenshot of the landing page here -->

## Highlights

- **Quote request form.** Collects business type, square footage, cleaning frequency and contact details, then emails the request straight to the business through EmailJS. No backend needed.
- **Spam protection.** Client-side rate limiting on quote submissions.
- **Industry sections.** Separate pitches for gyms and fitness centers, corporate offices and medical practices.
- **Conversion tracking.** Google Ads conversion tag wired into the page.
- **Responsive.** Tailwind CSS layout that works from phone to desktop.

## Tech stack

React 18 · Vite · Tailwind CSS · EmailJS · Lucide icons · Firebase Hosting

## Running locally

```bash
npm install
npm run dev               # http://localhost:5173
npm run build
npm run deploy:hosting    # build and deploy to Firebase Hosting
```
