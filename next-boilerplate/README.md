This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

The project has the following structure:

- `.husky/`: Contains Husky hooks for Git.
- `.vscode/`: Contains VS Code settings.
- `src/`: Contains the source code of the project.
  - `app/`: Contains the main application files.
  - `components/`: Contains reusable React components.
  - `utils/`: Contains utility functions and services.
- `public/`: Contains static assets.
- `package.json`: Contains the project dependencies and scripts.
- `tsconfig.json`: Contains TypeScript configuration.
- `next.config.ts`: Contains Next.js configuration.
- `tailwind.config.ts`: Contains Tailwind CSS configuration.
- `.prettierrc.json`: Contains Prettier configuration.
- `.eslint.config.mjs`: Contains ESLint configuration.

## Features

- **React Query**: For data fetching and caching.
- **Axios**: For making HTTP requests.
- **Tailwind CSS**: For utility-first CSS styling.
- **Husky**: For Git hooks.
- **Lint-staged**: For running linters on staged Git files.
- **Commitlint**: For enforcing commit message conventions.
- **Prettier**: For code formatting.
- **ESLint**: For linting JavaScript and TypeScript code.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.