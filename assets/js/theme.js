(function () {
  const root = document.documentElement;
  const key = "theme";
  const saved = localStorage.getItem(key);

  if (saved === "dark") root.setAttribute("data-theme", "dark");
  if (saved === "light") root.removeAttribute("data-theme");

  window.toggleTheme = function () {
    const isDark = root.getAttribute("data-theme") === "dark";
    if (isDark) {
      root.removeAttribute("data-theme");
      localStorage.setItem(key, "light");
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem(key, "dark");
    }
  };
})();
