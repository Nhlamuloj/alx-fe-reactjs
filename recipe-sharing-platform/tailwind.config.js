 module.exports = {
  content: [
    "./public/index.html", // Ensure Tailwind processes the index.html file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React component files in src
  ],
  darkMode: false, 
  theme: {
    extend: {},
  },
  plugins: [],
};