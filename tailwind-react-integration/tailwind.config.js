/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Specify files to scan for class usage
  theme: {
    extend: {}, // Customize your theme here
  },
  plugins: [], // Add Tailwind CSS plugins if needed
};

