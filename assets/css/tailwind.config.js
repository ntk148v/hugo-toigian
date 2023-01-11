/** @type {import('tailwindcss').Config} */
const themeDir = __dirname + "/../../";
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    themeDir + "layouts/**/*.html",
    themeDir + "content/**/*.html",
    "layouts/**/*.html",
    "content/**/*.html",
    "exampleSite/layouts/**/*.html",
    "exampleSite/content/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      spacing: {
        "page-top": "var(--page-top)",
        "page-gutter": "var(--page-gutter)",
        "header-height": "var(--header-height)",
        "footer-height": "var(--footer-height)",
        "sidebar-top": "var(--sidebar-top)",
      },
      maxWidth: {
        content: "var(--content-width)",
      },
      minHeight: {
        content: "var(--content-height)",
      },
      fontSize: {
        md: "15px",
      },
      colors: {
        base: "var(--base)",
        surface: "var(--surface)",
        overlay: "var(--overlay)",
        muted: "var(--muted)",
        subtle: "var(--subtle)",
        text: "var(--text)",
        "highlight-low": "var(--hightlight-low)",
        "highlight-med": "var(--hightlight-med)",
        "highlight-high": "var(--hightlight-high)",
        love: "var(--love)",
        gold: "var(--gold)",
        rose: "var(--rose)",
        pine: "var(--pine)",
        foam: "var(--foam)",
        iris: "var(--iris)",
      },
      borderColor: (theme) => ({
        DEFAULT: theme("colors.overlay", "currentColor"),
      }),
    },
  },
  plugins: [],
};
