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
    const { imgFullMMM, contentTextTitle, contentText, btnMuffin } = getElements();
    if (btnMuffin.style.display !== "none") {
      flexHideIt([imgFullMMM]);
      flexShowIt([contentTextTitle, contentText]);
    } else if (btnMuffin.style.display === "none") {
      flexHideIt([contentTextTitle, contentText]);
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
  const { imgFullMMM, contentTextTitle, contentText, btnMuffin, btnMug, btnPhone } = getElements();
  if (
    btnMuffin.style.display !== "none" &&
    btnMug.style.display === "none" &&
    btnPhone.style.display !== "none"
  ) {
    addMessage(contentTextTitle, "ABOUT ME");
    addMessage(
      contentText,
      "Hi, I'm a giant muffin-headed abomination who enjoys the challenge of learning to code. The Odin Project has been the best course I've taken thus far. Below you will find many of the projects that I've had the pleasure of creating while on my coding journey. Enjoy!"
    );
  } else if (
    btnMuffin.style.display !== "none" &&
    btnMug.style.display !== "none" &&
    btnPhone.style.display === "none"
  ) {
    addMessage(contentTextTitle, "CONTACT");
    addMessage(contentText, "Forthcoming.");
  } else {
    clearMessage();
  }
}