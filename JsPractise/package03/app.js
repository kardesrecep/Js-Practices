let image = document.querySelector(".picture");

document.querySelector(".on").addEventListener("click", () => {
  image.src = "/package03/img/lamba_on.gif";
});

document.querySelector(".off").addEventListener("click", () => {
  image.src = "/package03/img/lamba_off.gif";
});

image.addEventListener("mouseover", () => {
  image.src = "/package03/img/lamba_on.gif";
});

image.addEventListener("mouseleave", () => {
  image.src = "/package03/img/lamba_off.gif";
});
