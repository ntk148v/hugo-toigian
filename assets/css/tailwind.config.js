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
        xs: "0.75rem",    // 12px
        sm: "0.875rem",   // 14px
        md: "15px",       // 15px
        base: "1rem",     // 16px
        lg: "1.125rem",   // 18px
        xl: "1.25rem",    // 20px
        "2xl": "1.5rem",  // 24px
        "3xl": "1.875rem",// 30px
        "4xl": "2.25rem", // 36px
      },
      spacing: {
        ...defaultTheme.spacing,
        "page-top": "var(--page-top)",
        "page-gutter": "var(--page-gutter)",
        "header-height": "var(--header-height)",
        "footer-height": "var(--footer-height)",
        "sidebar-top": "var(--sidebar-top)",
      },
      borderRadius: {
        none: "0",
        sm: "0.25rem",    // 4px
        DEFAULT: "0.375rem",// 6px
        md: "0.5rem",     // 8px
        lg: "0.75rem",    // 12px
        xl: "1rem",       // 16px
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
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
