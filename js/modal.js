const contactsLink = document.querySelector(".button-contacts");
const contactsPopup = document.querySelector(".appointment");
const modalClose = contactsPopup.querySelector(".close-button");

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-show");
});
