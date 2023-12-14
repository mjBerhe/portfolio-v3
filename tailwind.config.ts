import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["var(--font-dm-sans)"],
      },
      colors: {
        accent: "#9cdcfc",
      },
    },
  },
  plugins: [],
} satisfies Config;
