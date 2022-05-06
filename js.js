"use strict";

const messengerRolled = document.querySelector(".messenger-rolled");
const messengerFullSize = document.querySelector(".messenger-fullSize");
const closeIcon = document.querySelector(".close-icon");
const messageInput = document.querySelector(".message-input");
const sendIcon = document.querySelector(".send-icon");
const messengerMiddlePart = document.querySelector(
  ".messenger-fullSize__middlePart"
);
const asistantMessageHour = document.querySelector(".hour");
asistantMessageHour.innerHTML = `${new Date().getHours()}:${
  new Date().getMinutes() > 9
    ? new Date().getMinutes()
    : "0" + new Date().getMinutes()
}`;

messengerRolled.addEventListener("click", () => {
  messengerFullSize.classList.toggle("active");
  let sampleMessage = document.querySelector(".sample-message");
  setTimeout(() => (sampleMessage.style.display = "block"), 1500);
});
closeIcon.addEventListener("click", () =>
  messengerFullSize.classList.toggle("active")
);

function deactivateSendButton() {
  sendIcon.classList.remove("active");
  sendIcon.removeEventListener("click", newUserMessage);
}

function newUserMessage() {
  const messageTemplate = document.querySelector(
    "[data-user-message-template]"
  );
  let message = messageTemplate.content.cloneNode(true).children[0];
  let messageText = message.querySelector("[data-user-message-text]");
  let messageHour = message.querySelector("[data-user-message-hour]");

  messageText.innerHTML = messageInput.value;
  messageHour.innerHTML = `${new Date().getHours()}:${
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes()
  }`;

  messengerMiddlePart.append(message);

  messageInput.value = "";
  deactivateSendButton();
}

function isThereAnyMessageHandler() {
  if (messageInput.value == "") {
    deactivateSendButton();
  } else {
    sendIcon.classList.add("active");
    sendIcon.addEventListener("click", newUserMessage);
  }
}

messageInput.addEventListener("input", isThereAnyMessageHandler);

const moreInformationButton = document.querySelector(
  ".more_information_button"
);
const moreInformationContainer = document.querySelector(
  ".more_information_container"
);
moreInformationButton.addEventListener("click", () =>
  moreInformationContainer.classList.toggle("active")
);

messageInput.addEventListener("focus", () => {
  messengerMiddlePart.classList.add("changeBorder");
});
messageInput.addEventListener("blur", () => {
  messengerMiddlePart.classList.remove("changeBorder");
});
