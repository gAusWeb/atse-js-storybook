/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./atse-app/src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  ],
};
