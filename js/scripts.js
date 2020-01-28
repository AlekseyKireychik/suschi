let productBtn = document.querySelectorAll(".catalog__btn");
productBtn.forEach(item => {
  item.addEventListener("click", addOrder);
});
function addOrder() {
  event.preventDefault();
  let infoOrder = document.querySelector(".info__order");
  let busketValue = document.querySelector(".busket__value");
  infoOrder.classList.add("is-active");
  busketValue.classList.add("is-active");
  this.classList.toggle("is-active");
}

let btnAdd = document.querySelector(".btn");
let btnRemoveActive = document.querySelector(".product__btn__less");

btnAdd.addEventListener("click", addOrderTwo);

function addOrderTwo() {
  event.preventDefault();
  let infoOrder = document.querySelector(".info__order");
  infoOrder.classList.add("is-active");
  btnRemoveActive.classList.add("is-active");
}

let myNav = function() {
  let burgerBtn = document.querySelector(".burger__menu__button");
  burgerBtn.addEventListener("click", activeBtnToggle);
  function activeBtnToggle() {
    let burgerMenuBtn = document.querySelector(".burger__menu");
    let leftMenu = document.querySelector(".header__nav");
    burgerMenuBtn.classList.toggle("is-active");
    leftMenu.classList.toggle("is-active");
  }
};
myNav();

let personalAreaBtn = document.querySelectorAll(".history__list button");
personalAreaBtn.forEach(item => {
  item.addEventListener("click", showOrders);
});
function showOrders() {
  this.classList.add("is-active");
  this.innerHTML = "Оставить отзыв"; 
}
