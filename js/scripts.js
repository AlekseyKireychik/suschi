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

let btnAdd = document.querySelectorAll(".product__btn__add");
let btnRemoveActive = document.querySelector(".product__btn__less");

btnAdd.forEach(item => {
  item.addEventListener("click", addOrderTwo);
});

function addOrderTwo() {

  event.preventDefault();
  let infoOrder = document.querySelector(".info__order");
  infoOrder.classList.add("is-active");
  btnRemoveActive.classList.add("is-active");

}


let myNav = function() {
  let burgerBtn = document.querySelectorAll(".burger__menu__button");
  burgerBtn.forEach(item => {
    item.addEventListener("click", activeBtnToggle);
  });
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
// window.addEventListener('scroll', function() {
//   let header_top = document.querySelector(".header__top");
//   let height_header = header_top.clientHeight;
//   let scroll_height = document.documentElement.scrollHeight;
//   console.log(height_header);
//   console.log(scroll_height);
//   header_top.classList.toggle("scrolled", height_header);
// });
// $(window).on("scroll", function() {
//   $(".header__top").toggleClass(
//     "scrolled",
//     $(this).scrollTop() > $(".header__top").height()
//   );
// });
