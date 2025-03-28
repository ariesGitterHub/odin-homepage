import { getElements } from "./domQueries.js"

export function flexShowIt(elements) {
  // Ensure elements is an array or NodeList
  const elementsArray = Array.isArray(elements)
    ? elements
    : Array.from(elements);
  elementsArray.forEach((element) => {
    element.style.display = "flex";
  });
}

export function flexHideIt(elements) {
  // Ensure elements is an array or NodeList
  const elementsArray = Array.isArray(elements)
    ? elements
    : Array.from(elements);
  elementsArray.forEach((element) => {
    element.style.display = "none";
  });
}

export function handleBtnClicks() {
    const { imgFullMMM, contentTextDiv, btnMuffin } = getElements();
    if (btnMuffin.style.display !== "none") {
      flexHideIt([imgFullMMM]);
      flexShowIt([contentTextDiv]);
    } else if (btnMuffin.style.display === "none") {
      flexHideIt([contentTextDiv]);
      flexShowIt([imgFullMMM]);
    }
}

function addMessage(element, msg) {
    element.innerText = msg;
}

function clearMessage() {
  const { contentTextTitle, contentText } = getMessageElements();
      contentTextTitle.innerText = "";
      contentText.innerText = "";
}

export function handleTextContent() {
  const { contentTextTitle, contentText, btnMuffin, btnMug, btnPhone } = getElements();
  if (
    btnMuffin.style.display !== "none" &&
    btnMug.style.display === "none" &&
    btnPhone.style.display !== "none"
  ) {
    addMessage(contentTextTitle, "ABOUT ME");
    addMessage(
      contentText,
      "Hi, I'm a giant muffin-headed abomination who enjoys the challenge of learning to code. Below you will find many of the projects that I've had the pleasure of creating while on my coding journey. Enjoy!"
    );
    contentText.style.textAlign = "left";
  } else if (
    btnMuffin.style.display !== "none" &&
    btnMug.style.display !== "none" &&
    btnPhone.style.display === "none"
  ) {
    addMessage(contentTextTitle, "CONTACT");
    addMessage(contentText, "madmuffinmandesign @gmail.com");
    contentText.style.textAlign = "center";
  } else {
    clearMessage();
  }
}