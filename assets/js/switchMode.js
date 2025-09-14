const body = document.body;
const switchModeBtn = document.querySelector(".switch-mode");

if(localStorage.getItem("theme") === "dark"){
  body.classList.add("dark-mode");
}

const themeHandler = () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

switchModeBtn.addEventListener("click", themeHandler);
