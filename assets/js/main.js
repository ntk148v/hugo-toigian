window.addEventListener("DOMContentLoaded", function () {
    const dark_mode_btn = document.getElementById("dark_mode_btn");
    const light_mode_btn = document.getElementById("light_mode_btn");

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        light_mode_btn.classList.remove('hidden');
    } else {
        dark_mode_btn.classList.remove('hidden');
    }

    dark_mode_btn.addEventListener('click', function () {
        document.documentElement.setAttribute("site-theme", "dark");
        localStorage.theme = 'dark';
        dark_mode_btn.classList.add('hidden');
        light_mode_btn.classList.remove('hidden');
    });

    light_mode_btn.addEventListener('click', function () {
        document.documentElement.setAttribute("site-theme", "light");
        localStorage.theme = 'light';
        light_mode_btn.classList.add('hidden');
        dark_mode_btn.classList.remove('hidden');
    });
});