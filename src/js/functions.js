import { getElements } from "./domQueries.js";
import { createElement, createImg } from "./functionTemplates.js";
import svgMug from "../assets/mugLogo2.svg";
import svgPhone from "../assets/phoneLogo2.svg";
import btnClick from "../assets/soundClick.mp3";

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

// Below, better alternative to above; BUT, I like the two above even though they aren't completely D.R.Y. per se, you can load up a bunch of queries into them at the same time and its super clean and easy to read; Keep this note for future reference.
//
// export function setDisplay(elements, displayStyle) {
//   const elementsArray = Array.isArray(elements)
//     ? elements
//     : Array.from(elements);
//   elementsArray.forEach((element) => {
//     element.style.display = displayStyle;
//   });
// }
//
// E.g., usage:
// setDisplay([contentImgBigDiv], "none");  // To hide
// setDisplay([contentTextTitleDiv], "flex");  // To show

export function handleBtnClicks() {
  const { contentImgBigDiv, contentTextTitleDiv, btnMuffin } = getElements();
  if (btnMuffin.style.display !== "none") {
    flexHideIt([contentImgBigDiv]);
    flexShowIt([contentTextTitleDiv]);
  } else if (btnMuffin.style.display === "none") {
    flexHideIt([contentTextTitleDiv]);
    flexShowIt([contentImgBigDiv]);
  }
}

function addMessage(element, msg) {
  element.innerText = msg;
}

function clearMessage() {
  const { contentTextTitle, contentText } = getElements();
  contentTextTitle.innerText = "";
  contentText.innerText = "";
}

export function handleTextContent() {
  const {
    contentTitle,
    contentTitleImg,
    contentText,
    contactInfoDiv,
    contactEmail,
    contactPhone,
    btnMuffin,
    btnMug,
    btnPhone,
  } = getElements();
  if (
    btnMuffin.style.display !== "none" &&
    btnMug.style.display === "none" &&
    btnPhone.style.display !== "none"
  ) {
    flexHideIt([contactInfoDiv]);
    flexShowIt([contentText]);
    addMessage(contentTitle, "ABOUT ME");
    contentTitleImg.src = svgMug;
    addMessage(
      contentText,
      "Hi, I'm a giant muffin-headed abomination who loves the challenge of learning to code. Below, you will find many of the projects that I've had the pleasure of creating while on my coding journey. Enjoy!"
    );
    contentText.style.textAlign = "left";
  } else if (
    btnMuffin.style.display !== "none" &&
    btnMug.style.display !== "none" &&
    btnPhone.style.display === "none"
  ) {
    flexHideIt([contentText]);
    flexShowIt([contactInfoDiv]);
    addMessage(contentTitle, "CONTACT");
    contentTitleImg.src = svgPhone;
    addMessage(contactEmail, "madmuffinmandesign@gmail.com");
    addMessage(contactPhone, "1-555-8MUFFIN");
  } else {
    clearMessage();
  }
}

export function createCardItems(
  cardId,
  cardTitle,
  cardLink,
  cardImgSrc,
  cardBlurb
) {
  const card = createElement("div", {
    id: `card-${cardId}`,
    class: "card",
  });

  const title = createElement(
    "a",
    {
      id: `title-${cardId}`,
      class: "card-title",
      href: cardLink,
      ariaLabel: `Visit ${cardTitle} project page.`,
      target: "_blank",
    },
    cardTitle
  );

  const screenshot = createImg({
    id: `img-screenshot-${cardId}`,
    src: cardImgSrc,
    alt: `Screenshot for ${cardTitle} webpage.`,
    class: "card-screenshot",
  });

  const blurb = createElement(
    "p",
    {
      id: `blurb-${cardId}`,
      class: "card-blurb",
    },
    cardBlurb
  );

  // function createCards(card, title, screenshot, blurb) {
  //   card.append(title, screenshot, blurb);
  //   return card;
  // }
  //
  // return createCards(card, title, screenshot, blurb);

  card.append(title, screenshot, blurb); // Directly append elements; reminder, no need for commented out code above
  return card;
}

// Old code, keep for reference, use code below instead
// function createAudioElement(src) {
//   const audio = new Audio(src);
//   audio.preload = "auto";
//   return audio;
// }

// function playAudio(audio) {
//   audio.currentTime = 0;
//   audio.play().catch((error) => {
//     console.error("Audio playback failed:", error);
//   });
// }

function createAudioElement(src) {
  const audio = new Audio(src);
  audio.preload = "auto";
  audio.addEventListener("error", (error) => {
    console.error("Error loading audio file:", error);
  });
  return audio;
}

function playAudio(audio) {
  audio.currentTime = 0;
  audio.pause(); // !!! Ensure audio starts from the beginning
  audio.play().catch((error) => {
    console.error("Audio playback failed:", error);
  });
}

const click = createAudioElement(btnClick);

export function mp3Click() {
  playAudio(click);
}
