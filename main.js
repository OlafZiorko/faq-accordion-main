let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let parentEl = e.currentTarget.parentElement.parentElement;
    let currEl = e.target;
    parentEl.classList.toggle("hide");
    !parentEl.classList.contains("hide")
      ? currEl.setAttribute("src", "./assets/images/icon-minus.svg")
      : currEl.setAttribute("src", "./assets/images/icon-plus.svg");
  });
});
