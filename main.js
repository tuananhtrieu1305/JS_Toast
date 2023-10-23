const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
function toast({ title = "", message = "", type = "", duration = 3000 }) {
  const main = $("#toast");
  if (main) {
    const icons = {
      success: "success.svg",
      info: "info.svg",
      warning: "warning.svg",
      error: "error.svg",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    const toast = document.createElement("div");
    const autoRemove = setTimeout(() => {
      main.removeChild(toast);
    }, duration + 1000);
    toast.onclick = (e) => {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemove);
      }
    };
    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideIn ease-in 0.3s, fadeOut linear 1s ${delay}s forwards `;
    toast.innerHTML = `
    <div class="toast__icon">
        <img src="./icons/${icon}" alt="" />
      </div>
      <div class="toast__body">
        <h3 class="toast__title">${title}</h3>
        <p class="toast__message">${message}</p>
      </div>
      <div class="toast__close">
        <img src="./icons/close.svg" alt="" />
      </div>
    `;
    main.appendChild(toast);
  }
}
function showSuccessBtn() {
  toast({
    title: "Success",
    message: "Lorem ipsum dolor sit amet consectetur",
    type: "success",
    duration: 5000,
  });
}
function showInfoBtn() {
  toast({
    title: "Info",
    message: "Lorem ipsum dolor sit amet consectetur",
    type: "info",
    duration: 5000,
  });
}
function showWarningBtn() {
  toast({
    title: "Warning",
    message: "Lorem ipsum dolor sit amet consectetur",
    type: "warning",
    duration: 5000,
  });
}
function showErrorBtn() {
  toast({
    title: "Error",
    message: "Lorem ipsum dolor sit amet consectetur",
    type: "error",
    duration: 5000,
  });
}
