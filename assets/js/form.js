import { getFromLocalStorage, saveToLocalStorage } from "./helpers/storage.js";

  const form = document.querySelector(".form");
  const progress = form.querySelector(".progress");
  const stepsContainer = form.querySelector(".steps-container");
  const steps = form.querySelectorAll(".step");
  const stepIndicators = form.querySelectorAll(".progress-container li");
  const prevButton = form.querySelector(".prev-btn");
  const nextButton = form.querySelector(".next-btn");
  const submitButton = form.querySelector(".submit-btn");

  let currentStep = +getFromLocalStorage("step") || 0;

  stepIndicators.forEach((stepIndicator) => {
    stepIndicator.addEventListener("click", (e) => {
      currentStep = +e.target.innerText - 1;
      updateProgress();
    });
  });

  const updateProgress = () => {
    let width = currentStep / (steps.length - 1);
    progress.style.transform = `scaleX(${width})`;
    stepsContainer.style.height = steps[currentStep].offsetHeight + "px";
    stepIndicators.forEach((indicator, index) => {
      indicator.classList.toggle("current", currentStep === index);
      indicator.classList.toggle("done", currentStep > index);
    });
    steps.forEach((step, index) => {
      step.style.transform = `translateX(-${currentStep * 100}%)`;
      step.classList.toggle("current", currentStep === index);
    });
    saveToLocalStorage("step", currentStep);
    updateButtons();
  };

  const updateButtons = () => {
    prevButton.hidden = currentStep === 0;
    nextButton.hidden = currentStep >= steps.length - 1;
    submitButton.hidden = !nextButton.hidden;
  };

  const inputs = form.querySelectorAll("input, textarea");
  inputs.forEach((input) =>
    input.addEventListener("focus", (e) => {
      const focusedElement = e.target;
      const focusedStep = [...steps].findIndex((step) =>
        step.contains(focusedElement)
      );
      if (focusedStep !== -1 && focusedStep !== currentStep) {
        currentStep = focusedStep;
        updateProgress();
      }
      stepsContainer.scrollTop = 0;
      stepsContainer.scrollLeft = 0;
    })
  );

  prevButton.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateProgress();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateProgress();
    }
  });

  submitButton.addEventListener("click", () =>{
    currentStep = 0;
    updateProgress();
  })

  updateProgress();
