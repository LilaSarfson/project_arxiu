/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      colors: {
        'rojito_clarito':'#ff5353',
        'verde_oliva':'#81B29A',
        'azul_logo': '#3AC7B4',
        'azul_clarito':'#A8DADC',
        'fondo': '#e1e8ed',
        'dark_bg': '#121212',
        'dark_secction':'#1E1E1E',
        'dark_card':'#22303C',
        'dark_white':'#E1E8ED',
        'footer': '#FFD782'
      },
    },
  },
  plugins: [],
}

