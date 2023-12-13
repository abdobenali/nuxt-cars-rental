/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        hint: {
          300: "#90A3BF",
          400: "#596780",
        },
      },
      fontFamily: {
        primary: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
  mode: "jit",
};
