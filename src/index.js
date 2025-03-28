import "./styles/styles.css";
import { createHeader } from "./js/createElements.js";
import { getElements } from "./js/domQueries.js";
import {
  flexShowIt,
  flexHideIt,
  handleBtnClicks,
  handleTextContent,
} from "./js/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  createHeader();
// handleTextContent();
  const { btnMuffin, btnMug, btnPhone } = getElements();

  btnMuffin.addEventListener("click", () => {
    flexHideIt([btnMuffin]);
    flexShowIt([btnMug, btnPhone]);
    handleBtnClicks();
  });

  btnMug.addEventListener("click", () => {
    flexHideIt([btnMug]);
    flexShowIt([btnMuffin, btnPhone]);
    handleBtnClicks();
    handleTextContent();
  });

  btnPhone.addEventListener("click", () => {
    flexHideIt([btnPhone]);
    flexShowIt([btnMuffin, btnMug]);
    handleBtnClicks();
    handleTextContent();
  });
});
