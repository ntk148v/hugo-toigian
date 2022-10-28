const themeDir = __dirname + "/../../";

module.exports = {
  plugins: {
    "postcss-import": { path: [themeDir] },
    "tailwindcss/nesting": {},
    tailwindcss: { config: themeDir + "assets/css/tailwind.config.js" },
    autoprefixer: { path: [themeDir] },
  },
};
