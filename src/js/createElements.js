import { createElement, createImg } from "./functionTemplates.js";
import { getElements } from "./domQueries.js";
import svgFullMMM from "../assets/fullMMM.svg";
import svgMuffin from "../assets/muffinLogo.svg";
import svgMug from "../assets/mugLogo.svg";
import svgPhone from "../assets/phoneLogo.svg";
import svgClear from "../assets/xLogo.svg";

export function createHeader() {
  const { header } = getElements();

  const headerItemContainer = createElement("div", {
    id: "header-item-container",
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

  const contentTextDiv = createElement(
    "div",
    {
      id: "content-text-div",
    //   class: "",
    });

    const contentTextTitle = createElement(
      "h2",
      {
        id: "content-text-title",
        class: "special-text",
      });

        const contentText = createElement(
          "p",
          {
            id: "content-text",
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

  //   const btnClear = createElement(
  //     "button",
  //     {
  //       id: "btn-clear",
  //       class: "btn",
  //     });

  //     const imgClear = createImg({
  //     id: "img-clear",
  //     src: svgClear,
  //     alt: "Large X",
  //     class: "img-small",
  //     });

  header.append(headerItemContainer);
  headerItemContainer.append(
    titleText,
    headerContentContainer,
    headerBtnContainer
  );

  headerContentContainer.append(imgFullMMM, contentTextDiv);

  contentTextDiv.append(contentTextTitle, contentText);
  
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
