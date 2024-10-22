/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-slate-300',
    'bg-slate-500',
    'bg-slate-800',
    'bg-blue-300',
    'bg-blue-500',
    'bg-yellow-300',
    'bg-red-300'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

