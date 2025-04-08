import { createElement, createImg } from "./functionTemplates.js";
import { getElements } from "./domQueries.js";
import svgMuffinFavIcon from "../assets/muffinFavIcon.svg";
import svgFullMMM from "../assets/fullMMM.svg";
import svgFullMMMReverse from "../assets/fullMMMReverse.svg";
import svgMuffin from "../assets/muffinLogo.svg";
import svgMug from "../assets/mugLogo.svg";
import svgPhone from "../assets/phoneLogo.svg";
import svgContactEmail from "../assets/contactEmail.svg";
import svgContactPhone from "../assets/contactPhone.svg";
import { createCardItems } from "./functions.js";
import screenshotBattleshipWWII from "../assets/screenshotBattleshipWWII.jpg";
import screenshotWeathervane from "../assets/screenshotWeathervane.jpg";
import screenshotTaskKing from "../assets/screenshotTaskKing.jpg";
import screenshotTheHiddenGarden from "../assets/screenshotTheHiddenGarden.jpg";
import screenshotTicTacZodiac from "../assets/screenshotTicTacZodiac.jpg";
import screenshotMyReadList from "../assets/screenshotMyReadList.jpg";
import screenshotMyDashboard from "../assets/screenshotMyDashboard.jpg";
import screenshotMULectureEvent from "../assets/screenshotMULectureEvent.jpg";
import screenshotCalculator from "../assets/screenshotCalculator.jpg";
import screenshotEtchADungeon from "../assets/screenshotEtchADungeon.jpg";
import screenshotWuXingRoshambo from "../assets/screenshotWuXingRoshambo.jpg";
import screenshotStupidSoundMachine from "../assets/screenshotStupidSoundMachine.jpg";
import screenshotStarSignQuoteGenerator from "../assets/screenshotStarSignQuoteGenerator.jpg";

export function createHeader() {
  const { header } = getElements();

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
  });

  const contentTextTitleDiv = createElement("div", {
    id: "content-text-title-div",
  });

  const contentTitleDiv = createElement("div", {
    id: "content-title-div",
  });

  const contentTitle = createElement("h2", {
    id: "content-title",
    class: "special-text",
  });

  const contentTitleImg = createImg({
    id: "content-title-img",
    src: "",
    alt: "",
  });

  const contentText = createElement("p", {
    id: "content-text",
    class: "normal-text",
  });

  const contactInfoDiv = createElement("div", {
    id: "contact-info-div",
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
    ariaLabel:
      "Button with an image of a deranged looking muffin: this reverts the header section back to a cartoon image of the Mad Muffin Man at his computer desk.",
  });

  const btnMug = createElement("button", {
    id: "btn-mug",
    class: "btn",
    ariaLabel:
      "Button with an image of a mug: this changes the main header section from a cartoon image to brief information about me, the infamous Mad Muffin Man.",
  });

  const btnPhone = createElement("button", {
    id: "btn-phone",
    class: "btn",
    ariaLabel:
      "Button with an image of a smart phone: this changes the main header section from a cartoon image to contact information for the Mad Muffin Man.",
  });

  const imgFullMMMReverse = createImg({
    id: "img-full-MMM-reverse",
    src: svgFullMMMReverse,
    alt: "The Mad Muffin Man is busy at work at his computer desk in a dimly lit office late at night.",
    class: "img-big",
  });

  const imgFullMMM = createImg({
    id: "img-full-MMM",
    src: svgFullMMM,
    alt: "Cartoonish image of a computer programmer with a giant, weird looking muffin for a head.",
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
    alt: "Cartoonish image of a coffee mug labeled with the letters 'M3'.",
    class: "img-small",
  });

  const imgPhone = createImg({
    id: "img-phone",
    src: svgPhone,
    alt: "Cartoonish image of smart phone that appears to be calling the Mad Muffin Man.",
    class: "img-small",
  });

  header.append(titleText, headerContentContainer);

  headerContentContainer.append(
    contentImgBigDiv,
    contentTextTitleDiv,
    headerBtnContainer
  );
  contentImgBigDiv.append(imgFullMMMReverse, imgFullMMM);
  contentTextTitleDiv.append(contentTitleDiv, contentText, contactInfoDiv);
  contentTitleDiv.append(contentTitleImg, contentTitle);
  contactInfoDiv.append(
    imgContactEmail,
    contactEmail,
    imgContactPhone,
    contactPhone
  );
  headerBtnContainer.append(btnMuffin, btnMug, btnPhone);

  btnMuffin.append(imgMuffin);
  btnMug.append(imgMug);
  btnPhone.append(imgPhone);
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
    "My first use of an API call set up, this weather app utilizes worldwide weather data from the Visual Crossing API. It is also an app that I use daily."
  );

  const todoApp = createCardItems(
    "todo",
    "Task King",
    "https://ariesgitterhub.github.io/odin-todo-list/",
    screenshotTaskKing,
    "This to-do list application incorporates the use of class generated objects, localStorage, and the date-fns library."
  );

  const restaurantApp = createCardItems(
    "restaurant",
    "The Hidden Garden",
    "https://ariesgitterhub.github.io/odin-restaurant-page/",
    screenshotTheHiddenGarden,
    "This restaurant site is for a fictional bookstore cafe; it was my introduction to webpack, npm, and ES6 modules."
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
    "This library app opened my brain up the world of the object design pattern, as well as the use of a cool technique: the data-attribute."
  );

  const dashboardApp = createCardItems(
    "dashboard",
    "myDashboard",
    "https://ariesgitterhub.github.io/odin-admin-dashboard/",
    screenshotMyDashboard,
    "This project, showing a mock-up of an admin-dashboard, highlights early lessons on the CSS essentials of flex and grid."
  );

  const signupApp = createCardItems(
    "signup",
    "Lecture Event",
    "https://ariesgitterhub.github.io/odin-sign-up-form/",
    screenshotMULectureEvent,
    "This mock-up form for a fictional lecture event employs form field basics and controls, as well as front-end input validation."
  );

  const calculatorApp = createCardItems(
    "calculator",
    "Calculator",
    "https://ariesgitterhub.github.io/odin-calculator/",
    screenshotCalculator,
    "A not-so-basic calculator that has buttons for getting Roman Numerals, factorials, percents in decimals, and one button for answering 'the meaning of life.'"
  );

  const easApp = createCardItems(
    "eas",
    "Etch-a-Dungeon",
    "https://ariesgitterhub.github.io/odin-etch-a-sketch/",
    screenshotEtchADungeon,
    "An early project that was meant to be a simple Etch-A-Sketch demo; it morphed into a working dungeon-building app. Best viewed on desktop or laptop with a mouse."
  );

  const rpsApp = createCardItems(
    "rps",
    "Wu-Xing Roshambo",
    "https://ariesgitterhub.github.io/odin-rock-paper-scissors/",
    screenshotWuXingRoshambo,
    "This is my take on the game 'Rock, Paper, Scissors.' This was my first time coding something that required game logic to determine outcomes. Not mobile ready."
  );

  const ssmApp = createCardItems(
    "ssm",
    "Stupid Sound Machine",
    "https://scintillating-muffin-134894.netlify.app/",
    screenshotStupidSoundMachine,
    "An early app that I created for fun, which also has a lot of humorous 'local pub conversation utility.' Fear the screaming goat!"
  );

  const ssqgApp = createCardItems(
    "ssqg",
    "Quote Generator",
    "https://whimsical-banoffee-187bf5.netlify.app/",
    screenshotStarSignQuoteGenerator,
    "This is the first real app that I deployed. This was very early days in learning to code and I was in the deep end of the pool, treading water."
  );

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
    calculatorApp,
    easApp,
    rpsApp,
    ssmApp,
    ssqgApp
  );
}

export function createFooter() {
  const { footer } = getElements();

  const footerContentContainer = createElement("div", {
    id: "footer-content-container",
  });

  const imgFooterIcon = createImg({
    id: "img-footer-icon",
    src: svgMuffinFavIcon,
    alt: "Mad Muffin Man logo.",
  });

  const footerText = createElement(
    "p",
    {
      id: "footer-text",
    },
    "A Mad Muffin Man Design, © 2025"
  );

  footer.append(footerContentContainer);
  footerContentContainer.append(imgFooterIcon, footerText);
}
