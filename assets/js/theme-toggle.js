document.addEventListener("DOMContentLoaded", () => {
    // some constants used later
    const PCS_DARK = `(prefers-color-scheme:dark)`;

    // We need to support `media="(prefers-color-scheme: dark)"` (with space)
    // and `media="(prefers-color-scheme:dark)"` (without space)
    const darkCSS = document.querySelectorAll(
        `link[media*=prefers-color-scheme][media*="dark"]`
    );
    const lightCSS = document.querySelectorAll(
        `link[media*=prefers-color-scheme][media*="light"]`
    );

    // Does the browser support native `prefers-color-scheme`?
    const hasNativePrefersColorScheme =
        matchMedia(PCS_DARK).media !== "not all";
    // Listen to `prefers-color-scheme` changes.
    if (hasNativePrefersColorScheme) {
        matchMedia(PCS_DARK).addListener(({ matches }) => {
            currentTheme = matches ? "dark" : "light";
        });
    }

    function findCurrentTheme() {
        let currentTheme = "";
        const rememberedValue = localStorage.getItem("site-theme");
        if (rememberedValue && ["dark", "light"].includes(rememberedValue)) {
            currentTheme = rememberedValue;
        } else if (hasNativePrefersColorScheme) {
            currentTheme = matchMedia(PCS_DARK).matches ? "dark" : "light";
        }
        if (!currentTheme) {
            currentTheme = "light";
        }
        if (!rememberedValue) {
            localStorage.setItem("site-theme", currentTheme);
        }
        return currentTheme;
    }

    function setTheme(currentTheme) {
        if (currentTheme === "light") {
            lightCSS.forEach((link) => {
                link.media = "all";
                link.disabled = false;
            });
            darkCSS.forEach((link) => {
                link.media = "not all";
                link.disabled = true;
            });
        } else {
            darkCSS.forEach((link) => {
                link.media = "all";
                link.disabled = false;
            });
            lightCSS.forEach((link) => {
                link.media = "not all";
                link.disabled = true;
            });
        }
    }

    let currentTheme = findCurrentTheme();
    setTheme(currentTheme);

    document
        .getElementById("header-theme-button")
        .addEventListener("click", () => {
            let currentTheme = findCurrentTheme();
            if (currentTheme === "light") {
                localStorage.setItem("site-theme", "dark");
                setTheme("dark");
            } else {
                localStorage.setItem("site-theme", "light");
                setTheme("light");
            }
        });
});
