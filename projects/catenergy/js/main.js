var burgerBtn = document.querySelector(".nav__burger");
var cross = document.querySelector(".nav__burger-middle");
var menu = document.querySelector(".nav__menu");

function addBtn () {
  if(burgerBtn) {
    burgerBtn.classList.remove("nav__burger--open");
    cross.classList.remove("nav__burger-middle--noscript");
    menu.classList.add("nav__menu--close");

    burgerBtn.addEventListener("click", function() {
      burgerBtn.classList.toggle("nav__burger--open");
      menu.classList.toggle("nav__menu--close");
    });
  }
}

addBtn();
