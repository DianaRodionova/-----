const contactsLink = document.querySelector(".button-contacts");
const contactsPopup = document.querySelector(".appointment");
const modalClose = contactsPopup.querySelector(".close-button");
const form = contactsPopup.querySelector(".appointment-form");
const namePopup = contactsPopup.querySelector("[name=name]");
const emailPopup = contactsPopup.querySelector("[name=email]");

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");
  namePopup.focus();
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!namePopup.value || !emailPopup.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("name", namePopup.value);
  }
});
