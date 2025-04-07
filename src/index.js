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
  const { btnMuffin, btnMug, btnPhone } = getElements();

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
