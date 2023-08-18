{import('tailwindcss').Config}
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        profile__animate: {
          "0%": { "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { "border-radius": "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
      },
      animation: {
        profile__animate: "profile__animate 8s ease-in-out infinite",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
