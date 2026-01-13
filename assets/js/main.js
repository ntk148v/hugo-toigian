window.addEventListener("DOMContentLoaded", function () {
  const dark_mode_btn = document.getElementById("dark_mode_btn");
  const light_mode_btn = document.getElementById("light_mode_btn");

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    light_mode_btn.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    dark_mode_btn.classList.remove("hidden");
  }

  const header_theme_btn = document.getElementById("header-theme-button");

  header_theme_btn.addEventListener("click", function () {
    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      light_mode_btn.classList.add("hidden");
      dark_mode_btn.classList.remove("hidden");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      dark_mode_btn.classList.add("hidden");
      light_mode_btn.classList.remove("hidden");
    }
  });
});
