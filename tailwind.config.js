/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#fafaf9',   // Canvas background
          200: '#e7e5e4',  // Clean, thin structural borders
          600: '#57534e',  // Highly readable body copy
          900: '#1c1917',  // Sharp, confident headers
        },
        accent: {
          DEFAULT: '#1e293b', // Deep artisanal amber
          hover: '#0f172a',   // Darker tone for interaction states
        }
      },
    },
  },
  plugins: [],
}