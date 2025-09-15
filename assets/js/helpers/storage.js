export const saveToLocalStorage = (name, color) => {
  localStorage.setItem(name, color);
};

export const getFromLocalStorage = (name) => localStorage.getItem(name);
