# JP FIN TAX SERVICES LLP — Web Platform & Monorepo

> **"Your Trusted Partner for Tax, Accounts & Compliance"**  
> Tax | Accounting | Compliance Solutions

A modern, elegant, and professional web platform designed for an Indian Chartered Accountant / Tax Consultancy firm, built as a PNPM monorepo with React, TypeScript, Vite, Tailwind CSS, and a scaffolded Express.js backend.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Monorepo Architecture](#monorepo-architecture)
4. [Brand Identity & Information](#brand-identity--information)
5. [Prerequisites & Installation](#prerequisites--installation)
6. [Development Commands](#development-commands)
7. [Building the Applications](#building-the-applications)
8. [Environment Variables](#environment-variables)
9. [How to Add a New Service](#how-to-add-a-new-service)
10. [Connecting the Express API Later](#connecting-the-express-api-later)
11. [SEO & Accessibility](#seo--accessibility)

---

## 1. Project Overview

JP FIN TAX SERVICES LLP provides dependable taxation, accounting, and statutory compliance solutions for individuals, LLPs, and corporate entities. The website presents a refined, institutional aesthetic utilizing deep forest green (`#0F4D3A`), dark charcoal (`#17201D`), warm off-white surfaces (`#F7F8F6`), and classical serif typography (*Playfair Display*) paired with *Plus Jakarta Sans*.

Key features implemented:
- **Sticky Blur Navbar**: Brand logo, navigation, and consultation trigger that compacts on scroll.
- **Hero & Trust Strip**: Value propositions without fabricated statistics or claims.
- **8 Core Services Hub**: Centralized data configuration driving both catalog and dynamic detail pages.
- **Service Detail Dynamic Routing**: Direct slug routes (`/services/:slug`) with breadcrumbs, benefits, document requirements, and process timeline.
- **Contact & Consultation Module**: Client-side validation for Indian phone numbers and emails, simulated submission state, and direct click-to-call/WhatsApp actions.
- **Mobile Floating Action Bar**: Dedicated quick actions (Call, WhatsApp, Email) on mobile viewports.
- **Scaffolded Express API**: Decoupled Express.js server ready for database and mailer integration.

---

## 2. Tech Stack

- **Frontend Core**: React 18, TypeScript, Vite
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer, Google Fonts (*Playfair Display*, *Plus Jakarta Sans*)
- **Icons**: Lucide React
- **Backend (Scaffolded)**: Node.js, Express.js, CORS, Dotenv, TSX
- **Monorepo Management**: PNPM Workspaces

---

## 3. Monorepo Architecture

```text
/
├── apps/
│   ├── web/                    # React + Vite frontend application
│   │   ├── src/
│   │   │   ├── assets/         # SVG Logo and graphics
│   │   │   ├── components/     # UI primitives (Navbar, Footer, Button, Breadcrumbs, etc.)
│   │   │   ├── sections/       # Modular page sections (Hero, TrustStrip, About, etc.)
│   │   │   ├── pages/          # Route pages (Home, About, Services, ServiceDetail, Contact, NotFound)
│   │   │   ├── layouts/        # RootLayout with sticky navbar, mobile action bar, and footer
│   │   │   ├── data/           # Centralized services data (services.ts)
│   │   │   ├── hooks/          # useScrollPosition, useSEO
│   │   │   ├── lib/api/        # apiClient.ts, contactService.ts (API abstraction layer)
│   │   │   ├── App.tsx         # Route tree and Suspense boundaries
│   │   │   ├── main.tsx        # React DOM entrypoint
│   │   │   └── index.css       # Tailwind directives & design tokens
│   │   ├── public/             # logo.svg, static assets
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   └── tailwind.config.ts
│   │
│   └── api/                    # Scaffolded Express API (independent)
│       ├── src/
│       │   ├── config/         # Server configuration
│       │   ├── controllers/    # Contact and Services controllers
│       │   ├── routes/         # Express routers
│       │   ├── services/       # Business logic handlers
│       │   ├── middleware/     # Error handler, CORS
│       │   ├── validators/     # Request payload validators
│       │   └── app.ts          # Express app entrypoint
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   ├── ui/                     # Shared brand constants, colors, and tokens
│   ├── types/                  # Shared TypeScript interfaces (ServiceItem, ContactFormData, etc.)
│   ├── config/                 # Shared base tsconfig
│   └── eslint-config/          # Shared ESLint configuration
│
├── package.json                # Root package scripts
├── pnpm-workspace.yaml         # Workspace definition
├── tsconfig.json               # Root TypeScript configuration
├── .env.example                # Sample environment variables
└── README.md
```

---

## 4. Brand Identity & Information

- **Firm Name**: JP FIN TAX SERVICES LLP
- **Tagline**: *"Your Trusted Partner for Tax, Accounts & Compliance"*
- **Categories**: Tax | Accounting | Compliance Solutions
- **Primary Phone**: `9717246385` (+91 97172 46385)
- **Primary Email**: `jpfin.taxservicesllp@gmail.com`
- **Address**:  
  A-40, B.D. Enclave,  
  Near B.D. International School,  
  Brahma Mandir Road,  
  Yusufpur Chaksaberi,  
  G. N. West, U.P.
- **WhatsApp**: `https://wa.me/919717246385`

---

## 5. Prerequisites & Installation

Ensure **Node.js (v18+)** and **pnpm (v9+)** are installed.

```bash
# Clone or open the workspace directory
cd /path/to/jpfintax

# Install all monorepo dependencies
pnpm install
```

---

## 6. Development Commands

Run the frontend only (default):
```bash
pnpm dev
# Or:
pnpm --filter web dev
```
The React development server runs at `http://localhost:3000`.

Run the backend API only (optional):
```bash
pnpm dev:api
# Or:
pnpm --filter api dev
```
The Express API runs at `http://localhost:4000`.

Run both frontend and API concurrently:
```bash
pnpm dev:all
```

---

## 7. Building the Applications

Build the React frontend production bundle:
```bash
pnpm build
# Or:
pnpm --filter web build
```

Preview the production build locally:
```bash
pnpm preview
# Or:
pnpm --filter web preview
```

Build all packages and applications:
```bash
pnpm build:all
```

---

## 8. Environment Variables

Create `.env` in `apps/web/` or at the root:

```bash
cp .env.example .env
```

Default variables:
```env
# URL for Express API backend (optional for frontend run)
VITE_API_BASE_URL=http://localhost:4000/api

# Express API Port
PORT=4000
```

> **Note**: The frontend works 100% standalone out of the box even when `VITE_API_BASE_URL` is omitted or the Express backend is offline. The `contactService.ts` layer automatically falls back to simulated submissions.

---

## 9. How to Add a New Service

All services are configuration-driven. To add a new practice area:

1. Open `apps/web/src/data/services.ts`.
2. Add a new object conforming to the `ServiceItem` interface:
   ```ts
   {
     id: 'new-service-id',
     slug: 'new-service-slug',
     title: 'Service Title',
     shortTitle: 'Short Title',
     category: 'tax', // 'tax' | 'accounting' | 'compliance'
     categoryLabel: 'Taxation Services',
     iconName: 'FileText', // Any Lucide icon supported in ServiceIcon.tsx
     shortDescription: '1-2 sentence overview for cards.',
     fullOverview: 'Comprehensive description for the detail page.',
     keyHighlights: ['Highlight 1', 'Highlight 2'],
     whatWeHelpWith: ['Scope item 1', 'Scope item 2'],
     keyBenefits: ['Benefit 1', 'Benefit 2'],
     processSteps: [
       { step: '01', title: 'Step Name', description: 'Step details' },
     ],
     requiredDocuments: ['Document 1', 'Document 2'],
     faqs: [{ question: 'Question?', answer: 'Answer.' }]
   }
   ```
3. The new service will automatically appear in:
   - The Homepage Services Preview
   - The `/services` catalog with category filtering
   - The `/services/:slug` detail page
   - The Footer service links

---

## 10. Connecting the Express API Later

The frontend is abstracted using a service layer in `apps/web/src/lib/api/contactService.ts`:

```
ContactForm (UI)
      ↓
contactService.submitContactForm()
      ↓
apiClient.ts (Fetch wrapper)
      ↓
POST /api/contact (Express Server)
```

When you are ready to enable real database persistence or Nodemailer email alerts:
1. Implement the database or SMTP driver inside `apps/api/src/services/contact.service.ts`.
2. Start the Express server: `pnpm --filter api dev`.
3. The frontend `contactService.ts` will automatically route calls to `http://localhost:4000/api/contact`.

---

## 11. SEO & Accessibility

- **Semantic Markup**: Standard HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`, `<article>`).
- **Dynamic SEO**: Integrated `useSEO` hook updating `<title>`, `<meta name="description">`, and resetting scroll position.
- **Accessibility**: High-contrast ratios compliant with WCAG 2.1 AA, keyboard navigability, clear focus rings, and screen-reader labels.
