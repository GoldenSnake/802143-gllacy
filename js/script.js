var link = document.querySelector(".btn-modal");

var mask = document.querySelector(".modal-mask");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var name = popup.querySelector("[name=feedback-name]");
var form = popup.querySelector(".modal-form");
var email = popup.querySelector("[name=feedback-email]");
var text = popup.querySelector("[name=feedback-text]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  mask.classList.add("modal-show");
  popup.classList.add("modal-animation");
});

 close.addEventListener("click", function (evt) {
   evt.preventDefault();
   mask.classList.remove("modal-show");
   popup.classList.remove("modal-error");
  });

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

 window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
     if (mask.classList.contains("modal-show")) {
       mask.classList.remove("modal-show");
       popup.classList.remove("modal-error");
     }
   }
 });