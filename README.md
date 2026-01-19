# Infinity Space Group

A modern architecture and design portfolio website built with Next.js 15.

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
infinity-space-group/
├── public/                    # Static files served from root
│   └── assets/
│       └── videos/            # Video files
│
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.jsx         # Root layout
│   │   ├── page.jsx           # Home page
│   │   ├── about/             # About page
│   │   ├── service/           # Service page
│   │   ├── blog/              # Blog page
│   │   ├── contact/           # Contact page
│   │   └── portfolio/        # Portfolio pages
│   │       ├── exterior/
│   │       ├── interior/
│   │       ├── floorplan/
│   │       ├── isometric/
│   │       └── landscape/
│   │
│   ├── components/            # React components
│   │   ├── layout/           # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── sections/         # Page section components
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Service.jsx
│   │   │   ├── Blog.jsx
│   │   │   └── Contact.jsx
│   │   └── portfolio/       # Portfolio gallery components
│   │       ├── ExteriorResidential.jsx
│   │       ├── ExteriorCommercial.jsx
│   │       ├── InteriorResidential.jsx
│   │       ├── InteriorCommercial.jsx
│   │       ├── FloorPlan.jsx
│   │       ├── Isometric.jsx
│   │       └── Landscape.jsx
│   │
│   ├── assets/               # Image assets (imported as modules)
│   │   ├── logo.png
│   │   ├── exterior- commercial/
│   │   ├── exterior- residential/
│   │   ├── Interior-Commercial/
│   │   ├── Interior-Residential/
│   │   ├── floorplan/
│   │   ├── isometric/
│   │   └── ...
│   │
│   └── lib/                  # Utility functions
│       └── utils.js
│
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## ✨ Features

- ✅ Server-side rendering (SSR)
- ✅ Optimized image loading with Next.js Image
- ✅ Responsive design
- ✅ Smooth animations with Framer Motion
- ✅ Portfolio galleries with image galleries
- ✅ Contact forms
- ✅ SEO optimized
- ✅ Fast page navigation

## 📝 Component Organization

### Layout Components (`src/components/layout/`)

Components that appear on every page:

- `Navbar` - Navigation bar
- `Footer` - Footer with CTA
- `ScrollToTop` - Scroll to top on route change

### Section Components (`src/components/sections/`)

Main page content sections:

- `Hero` - Homepage hero section
- `About` - About page content
- `Service` - Services page content
- `Blog` - Blog page content
- `Contact` - Contact page with form

### Portfolio Components (`src/components/portfolio/`)

Gallery components for portfolio pages:

- Exterior (Residential & Commercial)
- Interior (Residential & Commercial)
- Floor Plans
- Isometric Views
- Landscape Designs

## 🎨 Styling

The project uses Tailwind CSS for styling. Global styles are in `src/app/globals.css`.

## 📸 Assets

- **Images**: Stored in `src/assets/` and imported as modules for optimization
- **Videos**: Stored in `public/assets/videos/` and referenced by path

## 🔧 Configuration

- `next.config.js` - Next.js settings including image optimization
- `tailwind.config.js` - Tailwind CSS customization
- `tsconfig.json` - TypeScript/JavaScript configuration

## 📄 License

All rights reserved by Infinity Space Group
