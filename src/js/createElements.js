import { createElement, createImg } from "./functionTemplates.js";
import { getElements } from "./domQueries.js";
import svgFullMMM from "../assets/fullMMM.svg";
import svgMuffin from "../assets/muffinLogo.svg";
import svgMug from "../assets/mugLogo.svg";
import svgPhone from "../assets/phoneLogo.svg";
// import svgClear from "../assets/xLogo.svg";
import svgContactEmail from "../assets/contactEmail.svg";
import svgContactPhone from "../assets/contactPhone.svg";
// import svgContactGithub from "../assets/contactGithub.svg";
import { ProjectCard } from "./classProjectCard.js";
import { createCardItems } from "./functions.js";
import screenshotBattleship from "../assets/screenshotBattleship.png";
import screenshotWeathervane from "../assets/screenshotWeathervane.png";

export function createHeader() {
  const { header } = getElements();

  const headerContainer = createElement("div", {
    id: "header-container",
  });

  const headerContentContainer = createElement("div", {
    id: "header-content-container",
  });

  const headerBtnContainer = createElement("div", {
    id: "header-btn-container",
  });

  const titleText = createElement(
    "h1",
    {
      id: "title-text",
      class: "special-text",
    },
    "The Mad Muffin Man"
  );

  const contentImgBigDiv = createElement("div", {
    id: "content-img-big-div",
    // class: "",
  });

  const contentTextTitleDiv = createElement("div", {
    id: "content-text-title-div",
    // class: "",
  });

  const contentTitleDiv = createElement("div", {
    id: "content-title-div",
    // class: "",
  });

  const contentTitle = createElement("h2", {
    id: "content-title",
    class: "special-text",
  });

  const contentTitleImg = createImg({
    id: "content-title-img",
    src: "",
    alt: "",
    // class: "img-small",
  });

  const contentTextDiv = createElement("p", {
    id: "content-text-div",
    // class: "normal-text",
  });

  const contentText = createElement("p", {
    id: "content-text",
    class: "normal-text",
  });

  const contactInfoDiv = createElement("div", {
    id: "contact-info-div",
    // class: "normal-text",
  });

  const imgContactEmail = createImg({
    id: "img-contact-email",
    src: svgContactEmail,
    alt: "Email icon",
    class: "img-contact",
  });

  const contactEmail = createElement("p", {
    id: "contact-email",
    class: "normal-text",
  });

  const imgContactPhone = createImg({
    id: "img-contact-phone",
    src: svgContactPhone,
    alt: "Phone icon",
    class: "img-contact",
  });

  const contactPhone = createElement("p", {
    id: "contact-phone",
    class: "normal-text",
  });

  const btnMuffin = createElement("button", {
    id: "btn-muffin",
    class: "btn",
  });

  const btnMug = createElement("button", {
    id: "btn-mug",
    class: "btn",
  });

  const btnPhone = createElement("button", {
    id: "btn-phone",
    class: "btn",
  });

  const imgFullMMM = createImg({
    id: "img-full-MMM",
    src: svgFullMMM,
    alt: "Cartoonish image of a computer programmer with a giant muffin for head.",
    class: "img-big",
  });

  const imgMuffin = createImg({
    id: "img-muffin",
    src: svgMuffin,
    alt: "Cartoonish image of a deranged looking muffin.",
    class: "img-small",
  });

  const imgMug = createImg({
    id: "img-mug",
    src: svgMug,
    alt: "Cartoonish image of steaming mug of coffee labeled with the letters 'M3'.",
    class: "img-small",
  });

  const imgPhone = createImg({
    id: "img-phone",
    src: svgPhone,
    alt: "Cartoonish image of smart phone.",
    class: "img-small",
  });

  header.append(titleText, headerContainer);
  headerContainer.append(
    headerContentContainer
    // headerBtnContainer
  );

  headerContentContainer.append(
    contentImgBigDiv,
    contentTextTitleDiv,
    headerBtnContainer
  );
  contentImgBigDiv.append(imgFullMMM);
  contentTextTitleDiv.append(contentTitleDiv, contentTextDiv, contactInfoDiv);
  contentTitleDiv.append(contentTitleImg, contentTitle);
  contentTextDiv.append(contentText);
  contactInfoDiv.append(
    imgContactEmail,
    contactEmail,
    imgContactPhone,
    contactPhone
    // imgContactGithub,
    // contactGithub
  );
  headerBtnContainer.append(
    btnMuffin,
    btnMug,
    btnPhone
    // btnClear
  );

  btnMuffin.append(imgMuffin);
  btnMug.append(imgMug);
  btnPhone.append(imgPhone);
  //   btnClear.append(imgClear);
}

export function createMain() {
  const { main } = getElements();

  const mainContainer = createElement("div", {
    id: "main-container",
  });

  const mainContentContainer = createElement("div", {
    id: "main-content-container",
  });

  const battleship = createCardItems(
    "battleship",
    "Battleship",
    "https://ariesgitterhub.github.io/odin-battleship/",
    screenshotBattleship,
    "This is my own variant of the famous electronic board game, Battleship. This code was my first foray into Test Driven Development (TDD)."
  );

  const weathervane = createCardItems(
    "weathervane",
    "Weathervane",
    "https://ariesgitterhub.github.io/odin-weather-app/",
    screenshotWeathervane,
    "My first use of an API set up, this weather utilizes weather data from the Visual Crossing API."
  );

    // const testCase2 = createCardItems(
    //   "test-case2",
    //   "Test Case2",
    //   "https://www.example.com",
    //   "This is just a humble test2."
    // );



  main.append(mainContainer);
  mainContainer.append(mainContentContainer);
  mainContentContainer.append(
    battleship,
    weathervane,
    // testCase2,
  );
}
