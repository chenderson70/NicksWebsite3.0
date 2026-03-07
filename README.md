# Nick Parks Website

## 🐺 Full-Stack Next.js Website for Nick Parks

Motivational speaker, coach, entrepreneur, and author. This is the complete production website built with Next.js 14+, Tailwind CSS, Prisma, Stripe, and Auth.js.

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database (Neon free tier recommended)
- Stripe account (for payments)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env` and fill in your values:
```bash
cp .env.example .env
```

### 3. Set Up Database
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Default Admin Login
- **Email:** admin@nickparks.com
- **Password:** ChangeMe123!

## Tech Stack
- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS 3.4 + custom brand tokens
- **Database:** PostgreSQL + Prisma ORM
- **Auth:** Auth.js (NextAuth) v5 beta
- **Payments:** Stripe Checkout
- **Deployment:** Azure Static Web Apps (Free tier)
- **CI/CD:** GitHub Actions

## Project Structure
```
app/                    # Next.js App Router pages
  api/                  # API routes
  admin/                # Admin dashboard
  account/              # User account pages
  shop/                 # E-commerce pages
  blog/                 # Blog pages
components/
  home/                 # Homepage sections
  layout/               # Navbar, Footer, CartDrawer
  ui/                   # Reusable UI primitives
lib/                    # Utilities, auth, db, stripe, constants
prisma/                 # Schema and seed data
public/images/          # Static assets
```

## Brand Design
- **Colors:** Primary #1e6450 (dark green), Background #080808, Text #ffffff
- **Fonts:** Oswald (headings), Montserrat (body)
- **Style:** Dark, moody, athletic, high-contrast with heavy vignettes

## Deployment
Push to `main` branch triggers automatic deployment via GitHub Actions to Azure Static Web Apps.

## License
All rights reserved. © Nick Parks.
