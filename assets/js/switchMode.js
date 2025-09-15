import { getFromLocalStorage, saveToLocalStorage } from "./helpers/storage.js";
import { getSystemTheme } from "./helpers/theme.js";

const body = document.body;
const switchModeBtn = document.querySelector(".switch-mode");

if (
  !getFromLocalStorage("theme") &&
  getSystemTheme()
) {
  body.classList.add("dark-mode");
  saveToLocalStorage("theme", "dark");
} else if (
  !getFromLocalStorage("theme")  &&
  !getSystemTheme()
) {
  body.classList.remove("dark-mode");
  saveToLocalStorage("theme", "light");
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

const themeHandler = () => {
  body.classList.toggle("dark-mode");
  body.classList.contains("dark-mode")
    ? saveToLocalStorage("theme", "dark")
    : saveToLocalStorage("theme", "light");
};

switchModeBtn.addEventListener("click", themeHandler);
