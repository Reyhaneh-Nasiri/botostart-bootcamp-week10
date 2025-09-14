const body = document.body;
const switchModeBtn = document.querySelector(".switch-mode");

if (
  !localStorage.getItem("theme") &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
} else if (
  !localStorage.getItem("theme") &&
  !window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

const themeHandler = () => {
  body.classList.toggle("dark-mode");
  body.classList.contains("dark-mode")
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");
};

switchModeBtn.addEventListener("click", themeHandler);