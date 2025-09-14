const body = document.body;
const switchModeBtn = document.querySelector(".switch-mode");

const themeHandler = () => {
  body.classList.toggle("dark-mode");
};

switchModeBtn.addEventListener("click", themeHandler);
