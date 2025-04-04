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
import screenshotBattleshipWWII from "../assets/screenshotBattleshipWWII.png";
import screenshotWeathervane from "../assets/screenshotWeathervane.png";
import screenshotTaskKing from "../assets/screenshotTaskKing.png";
import screenshotTheHiddenGarden from "../assets/screenshotTheHiddenGarden.png";
import screenshotTicTacZodiac from "../assets/screenshotTicTacZodiac.png";
import screenshotMyReadList from "../assets/screenshotMyReadList.png";
import screenshotMyDashboard from "../assets/screenshotMyDashboard.png";
import screenshotMULectureEvent from "../assets/screenshotMULectureEvent.png";

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

  const battleshipApp = createCardItems(
    "battleship",
    "Battleship: WWII",
    "https://ariesgitterhub.github.io/odin-battleship/",
    screenshotBattleshipWWII,
    "This is my own variant of the famous electronic board game, Battleship. This code was my first foray into Test Driven Development (TDD)."
  );

  const weatherApp = createCardItems(
    "weather",
    "Weathervane",
    "https://ariesgitterhub.github.io/odin-weather-app/",
    screenshotWeathervane,
    "My first use of an API set up, this weather app utilizes worldwide weather data from the Visual Crossing API."
  );

  const todoApp = createCardItems(
    "todo",
    "Task King",
    "https://ariesgitterhub.github.io/odin-todo-list/",
    screenshotTaskKing,
    "This to-do list app incorporates the uses of class generated objects, localStorage, and the date-fns library."
  );

  const restaurantApp = createCardItems(
    "restaurant",
    "The Hidden Garden",
    "https://ariesgitterhub.github.io/odin-restaurant-page/",
    screenshotTheHiddenGarden,
    "This restaurant page app for a fictional bookstore cafe was my introduction to webpack, npm, and ES6 modules."
  );

  const tictactoeApp = createCardItems(
    "tictactoe",
    "Tic-Tac-Zodiac",
    "https://ariesgitterhub.github.io/odin-tic-tac-toe/",
    screenshotTicTacZodiac,
    "A simple game that served as my intro to factory functions, closures, and new ideas on building code from the inside out."
  );

  const libraryApp = createCardItems(
    "library",
    "MyReadList",
    "https://ariesgitterhub.github.io/odin-book-library/",
    screenshotMyReadList,
    "This library app opened my brain up the world of the object design pattern and the use of the data-attribute."
  );

  const dashboardApp = createCardItems(
    "dashboard",
    "myDashboard",
    "https://ariesgitterhub.github.io/odin-admin-dashboard/",
    screenshotMyDashboard,
    "This project, showing a a mock-up of an admin-dashboard, highlights early lessons on the use of flex and grid layouts."
  );

  const signupApp = createCardItems(
    "signup",
    "Lecture Event",
    "https://ariesgitterhub.github.io/odin-sign-up-form/",
    screenshotMULectureEvent,
    "This mock-up form for a fictional lecture event employs form field basics and controls, as well as front-end form validation."
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
    battleshipApp,
    weatherApp,
    todoApp,
    restaurantApp,
    tictactoeApp,
    libraryApp,
    dashboardApp,
    signupApp,
    // testCase2,
  );
}
