export function getElements() {
  return {
    header: document.querySelector("header"),
    main: document.querySelector("main"),
    footer: document.querySelector("footer"),

    // imgFullMMM: document.querySelector("#img-full-MMM"),

    headerContentContainer: document.querySelector("#header-content-container"),

    contentImgBigDiv: document.querySelector("#content-img-big-div"),
    imgBig: document.querySelectorAll(".img-big"),
    imgFullMMM: document.querySelector("#img-full-MMM"),
    imgFullMMMReverse: document.querySelector("#img-full-MMM-reverse"),
    contentTextTitleDiv: document.querySelector("#content-text-title-div"),
    contentTitle: document.querySelector("#content-title"),
    contentTitleImg: document.querySelector("#content-title-img"),

    contentTextDiv: document.querySelector("#content-text-div"),
    contentText: document.querySelector("#content-text"),
    contactInfoDiv: document.querySelector("#contact-info-div"),
    contactEmail: document.querySelector("#contact-email"),
    contactPhone: document.querySelector("#contact-phone"),
    // contactGithub: document.querySelector("#contact-github"),

    btnMuffin: document.querySelector("#btn-muffin"),
    btnMug: document.querySelector("#btn-mug"),
    btnPhone: document.querySelector("#btn-phone"),
  };
}
