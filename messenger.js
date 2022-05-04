"use strict";

const messengerRolled = document.querySelector(".messenger-rolled");
const messengerFullSize = document.querySelector(".messenger-fullSize");
const closeIcon = document.querySelector(".close-icon");
const messageInput = document.querySelector(".message-input");
const sendIcon = document.querySelector(".send-icon");
messengerRolled.addEventListener("click", () =>
  messengerFullSize.classList.toggle("active")
);
closeIcon.addEventListener("click", () =>
  messengerFullSize.classList.toggle("active")
);

messageInput.addEventListener("input", function () {
  if (messageInput.value == "") {
    sendIcon.classList.remove("active");
  } else {
    sendIcon.classList.add("active");
  }
});
