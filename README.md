# Conched - Official Launch Website

The spontaneous social coordination app for college students. Stop planning, start hanging out.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📦 Deploy to Vercel

### Quick Deploy

```bash
npm i -g vercel
vercel login
vercel deploy --prod
```

### Configure Custom Domain

After deploying, go to your Vercel dashboard and add `conched.app` as a custom domain.

## 🎨 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## 📁 Project Structure

```
conch-site/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── ThemeStore.tsx
│   ├── DownloadCTA.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── app_media_assets/      # App images and themes
└── public/                # Static assets
```

## 🌐 Deployment

This site is optimized for Vercel deployment with:
- Automatic SSL certificate
- Global CDN
- Edge functions
- Built-in analytics

## 📝 Content Updates

All content is based on `LAUNCH_WEBSITE_CONTENT.md`. To update:

1. Edit component files in `/components`
2. Update metadata in `/app/layout.tsx`
3. Rebuild and redeploy

## 📧 Contact

- General: hello@conched.app
- Support: support@conched.app
- Press: press@conched.app

## 📄 License

© 2026 Conched. All rights reserved.
