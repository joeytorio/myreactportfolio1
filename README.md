# REACT PORTFOLIO

Welcome to my portfolio repository!

## Dependencies
I used:

- NPM
- Vite
- React
- Tailwind CSS

## Vite Installation

- `npm create vite@latest`
- `cd my-project`
- `npm install`
- `npm run dev`

## Tailwind CSS Installation

Since I'm using Vite, I used the ff:
- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`

Configure the following to your `tailwind.config.js`

```/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 
```

Add these to your index.css:

- `@tailwind base;`
- `@tailwind components;`
- `@tailwind utilities;`

You need to restart your server for the Tailwind to apply in your page.


# DOCUMENTATION LINKS
- https://vitejs.dev/guide/
- https://tailwindcss.com/docs/guides/vite


