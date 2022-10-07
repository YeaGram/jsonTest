/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      dropShadow: {
        myDropOne: "0px 3px 5px rgba(0,0,0,0.2)",
        myDropTwo: "0px 20px 10px rgba(0,0,0,0.3)",
      },
      fontFamily: {
        tilti: "'Titillium Web'",
      },
    },
  },
  plugins: [],
};
