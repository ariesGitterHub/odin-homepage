import "./styles/styles.css";
import { createHeader, createMain, createFooter } from "./js/createElements.js";
import { getElements } from "./js/domQueries.js";
import {
  flexShowIt,
  flexHideIt,
  handleBtnClicks,
  handleTextContent,
  mp3Click,
} from "./js/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  createHeader();
  createMain();
  createFooter();
  const { imgBig, imgFullMMM, imgFullMMMReverse, btnMuffin, btnMug, btnPhone } =
    getElements();

  imgBig.forEach((img) => {
    img.addEventListener("click", () => {
      mp3Click();
      if (imgFullMMMReverse.style.display !== "none") {
        flexHideIt([imgFullMMMReverse]);
        flexShowIt([imgFullMMM]);
      } else {
        flexHideIt([imgFullMMM]);
        flexShowIt([imgFullMMMReverse]);
      }
    });
  });

  btnMuffin.addEventListener("click", () => {
    mp3Click();
    flexHideIt([btnMuffin]);
    flexShowIt([btnMug, btnPhone]);
    handleBtnClicks();
  });

  btnMug.addEventListener("click", () => {
    mp3Click();
    flexHideIt([btnMug]);
    flexShowIt([btnMuffin, btnPhone]);
    handleBtnClicks();
    handleTextContent();
  });

  btnPhone.addEventListener("click", () => {
    mp3Click();
    flexHideIt([btnPhone]);
    flexShowIt([btnMuffin, btnMug]);
    handleBtnClicks();
    handleTextContent();
  });
});
