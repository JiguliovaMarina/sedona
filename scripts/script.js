const searchLink = document.querySelector(".search-link");
const modal = document.querySelector(".modal");
const buttonClose = document.querySelector(".modal-button-close")

searchLink.addEventListener("click", function(evt) {
  evt.preventDefault()
  modal.classList.remove("modal-close");
});

buttonClose.addEventListener("click", function(evt) {
  evt.preventDefault()
  modal.classList.add("modal-close");
});
