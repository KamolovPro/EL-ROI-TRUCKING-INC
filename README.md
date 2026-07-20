# EL ROI TRUCKING INC — Company Website

Official website for EL ROI TRUCKING INC — professional trucking and logistics services across the United States.

- **Address**: 8450 G Ave Spc 19, Hesperia, CA 92345
- **Phone**: (760) 623-9032
- **Email**: dispatch@elroitrucking.com
- **USDOT**: 4282525 · **MC**: 1664987

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Development

Requires Node.js & npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
# Install dependencies
npm i

# Start the dev server with auto-reloading
npm run dev

# Production build
npm run build

# Run tests
npm test
```

## Editing company info

All company data (name, contacts, licenses, colors, services, FAQ) lives in one file:

```
src/config/siteConfig.ts
```

Edit it to update information across the entire website. The color scheme (light and dark mode) is also configured there in HSL format.

## Deployment

The project is ready to deploy on Vercel (see `vercel.json` for SPA rewrites). Any static hosting that serves the `dist/` folder after `npm run build` will work.
