/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "body-image":
          "url('/src/assets/Sucre Patisserie Branding Project.jpeg')",
      },
    },
  },
  plugins: [],
};
