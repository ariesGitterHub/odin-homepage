import { getElements } from "./domQueries.js"
import svgMug from "../assets/mugLogo.svg";
import svgPhone from "../assets/phoneLogo.svg";
// import svgContactEmail from "";
// import svgContactPhone from "";
// import svgContactGithub from "";

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
    const { imgFullMMM, contentTextTitleDiv, btnMuffin } = getElements();
    if (btnMuffin.style.display !== "none") {
      flexHideIt([imgFullMMM]);
      flexShowIt([contentTextTitleDiv]);
    } else if (btnMuffin.style.display === "none") {
      flexHideIt([contentTextTitleDiv]);
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
  const { contentTextTitleDiv, contentTitle, contentTitleImg, contentTextDiv, contentText, contactInfoDiv, contactEmail, contactPhone, contactGithub, btnMuffin, btnMug, btnPhone } = getElements();
  if (
    btnMuffin.style.display !== "none" &&
    btnMug.style.display === "none" &&
    btnPhone.style.display !== "none"
  ) {
    flexHideIt([contactInfoDiv]);
    flexShowIt([contentTextDiv]);
    addMessage(contentTitle, "ABOUT ME");
    contentTitleImg.src = svgMug;
    contentTitleImg.style.transform = "translateX(.25rem)";
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
    flexHideIt([contentTextDiv]);
    flexShowIt([contactInfoDiv]);
    addMessage(contentTitle, "CONTACT");
    contentTitleImg.src = svgPhone;
    // contentTitleImg.style.transform =
    //   "translateX(.5rem) translateY(-.125rem) rotate(45deg) ";
    addMessage(contactEmail, "madmuffinmandesign @gmail.com");
    contactEmail.style.textAlign = "center";
    addMessage(contactPhone, "1-555-8MUFFIN");
    addMessage(
      contactGithub,
      "github.com/madmuffinmandesign"
    );

  } else {
    clearMessage();
  }
}