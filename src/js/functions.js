import { getElements } from "./domQueries.js";
import { createElement, createImg } from "./functionTemplates.js";
import svgMug from "../assets/mugLogo2.svg";
import svgPhone from "../assets/phoneLogo2.svg";

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
  const { headerContentContainer, contentImgBigDiv, contentTextTitleDiv, btnMuffin } = getElements();
  if (btnMuffin.style.display !== "none") {
    flexHideIt([contentImgBigDiv]);
    flexShowIt([contentTextTitleDiv]);
    headerContentContainer.style.background = "var(--background-main)";
  } else if (btnMuffin.style.display === "none") {
    flexHideIt([contentTextTitleDiv]);
    flexShowIt([contentImgBigDiv]);
    headerContentContainer.style.background = "var(--standard-black)";
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
    contentTextDiv,
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
    flexShowIt([contentTextDiv]);
    addMessage(contentTitle, "ABOUT ME");
    contentTitleImg.src = svgMug;
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
    addMessage(contactEmail, "madmuffinmandesign @gmail.com");
    contactEmail.style.textAlign = "center";
    addMessage(contactPhone, "1-555-8MUFFIN");
  } else {
    clearMessage();
  }
}


export function createCardItems(cardId, cardTitle, cardLink, cardImgSrc, cardBlurb) {
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
    },
    cardTitle
  );

  // const iframe = createElement(
  //   "iframe",
  //   {
  //     id: `iframe-${cardId}`,
  //     class: "card-link",
  //     src: cardLink,
  //   });

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

  // return {
  //   card,
  //   title,
  //   iframe,
  //   blurb
  // }

  function createCards(card, title, screenshot, blurb) {
    card.append(title, screenshot, blurb);
    return card;
  }

  return createCards(card, title, screenshot, blurb);
}

