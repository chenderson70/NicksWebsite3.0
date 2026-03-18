# Nick Parks Website

Marketing site for Nick Parks built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Prisma.

## Stack

- Next.js 14 App Router
- React 18
- Tailwind CSS 3
- Prisma ORM for optional lead storage
- SMTP or Resend for booking-form email delivery
- Git LFS for large video assets

## Local Development

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Configure environment

Create `.env` from `.env.example` and fill in the values your local setup needs.

For the booking form to send real emails, set these values:

- `EMAIL_FROM`
- `BOOKING_EMAIL_TO`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASSWORD`

Optional fallback:

- `RESEND_API_KEY`

A database is optional. If `DATABASE_URL` is missing or left as a placeholder, the contact form still sends email and simply skips lead persistence.

### Run the app

```bash
npm run dev
```

By default the app runs on `http://localhost:3000`, or the next available port if 3000 is already in use.

### Build the app

```bash
npm run build
```

This produces the standard Next.js production build used by Vercel.

## Project Structure

```text
app/                  App Router pages and API routes
components/           Shared site and UI components
lib/                  Constants, utilities, blog helpers, and Prisma setup
prisma/               Prisma schema and seed script
public/images/        Site images and video assets
```

## Deployment

### Recommended: Vercel Hobby + Your Mail Provider SMTP

This repo is now configured so Vercel can run the site as a full Next.js app with the booking form handled by `app/api/contact/route.ts`.

Required Vercel environment variables:

- `APP_URL=https://nickswebsite3-0.vercel.app`
- `EMAIL_FROM`
- `BOOKING_EMAIL_TO=nicholasparks14@gmail.com`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASSWORD`

Optional Vercel environment variable:

- `RESEND_API_KEY`

- `DATABASE_URL`

If `DATABASE_URL` is omitted, form submissions still email Nick but will not be stored in Postgres.

## Media Assets

Large video files are tracked with Git LFS. Clone with Git LFS installed so production media assets are fetched correctly.

## Repository

- Repo: https://github.com/chenderson70/NicksWebsite3.0
- Production URL: https://nickswebsite3-0.vercel.app/

## License

All rights reserved.
