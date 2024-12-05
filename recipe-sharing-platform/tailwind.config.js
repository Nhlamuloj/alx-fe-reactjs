 module.exports = {
  content: [
    "./public/index.html", // Ensure Tailwind processes the index.html file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React component files in src
  ],
  darkMode: false, // You can set it to 'media' or 'class' if needed
  theme: {
    extend: {},
  },
  plugins: [],
};