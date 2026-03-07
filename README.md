# Nick Parks Website

Marketing site for Nick Parks built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Prisma.

## Stack

- Next.js 14 static export
- React 18
- Tailwind CSS 3
- Prisma ORM
- GitHub Actions for deployment
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

### Run the app

```bash
npm run dev
```

By default the app runs on `http://localhost:3000`, or the next available port if 3000 is already in use.

### Build the static export

```bash
npm run build
```

The production export is generated in `out/`.

## Project Structure

```text
app/                  App Router pages
components/           Shared site and UI components
lib/                  Constants, utilities, blog helpers, and Prisma setup
prisma/               Prisma schema and seed script
public/images/        Site images and video assets
```

## Deployment

The repository is configured to deploy to GitHub Pages through GitHub Actions.

- Pushes to `main` trigger a production build.
- The Pages workflow exports the site from Next.js and publishes the `out/` directory.
- Production builds use the `/NicksWebsite3.0` base path required by GitHub Pages project sites.

## Media Assets

Large video files are tracked with Git LFS. Clone with Git LFS installed so production media assets are fetched correctly.

## Repository

- Repo: https://github.com/chenderson70/NicksWebsite3.0
- Planned Pages URL: https://chenderson70.github.io/NicksWebsite3.0/

## License

All rights reserved.
