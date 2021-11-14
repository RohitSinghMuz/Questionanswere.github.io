var btnClicked = document.querySelectorAll(".tab-section");
btnClicked.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("kkghvn");
    element.classList.toggle("active");
  });
});
