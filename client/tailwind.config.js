/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#f5f5f5",
        darkbrown: "#E2F4A6",
        pink: "#EEA0FF",
        green: "#E2F4A6",
        blue: "#5A4EFF",
      },
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgb(17,24,39)",
        myShadow2: "-4.1px -5px 0 0 rgb(17,24,39)",
      },
    },
  },
  plugins: [],
};
