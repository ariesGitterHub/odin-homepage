import { getElements } from "./domQueries.js"
import svgMug from "../assets/mugLogo2.svg";
import svgPhone from "../assets/phoneLogo2.svg";
// import svgContactEmail from "";
// import svgContactPhone from "";
// import svgContactGithub from "";

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

// export function flexShowIt(elements) {
//   // Ensure elements is an array or NodeList
//   const elementsArray = Array.isArray(elements)
//     ? elements
//     : Array.from(elements);

//   elementsArray.forEach((element) => {
//     element.style.display = "flex"; // Set to flex (layout)
//     element.classList.remove("hidden"); // Remove the hidden class to start fade-in
//     element.classList.add("visible"); // Add the visible class to show it
//   });
// }

// export function flexHideIt(elements) {
//   // Ensure elements is an array or NodeList
//   const elementsArray = Array.isArray(elements)
//     ? elements
//     : Array.from(elements);

//   elementsArray.forEach((element) => {
//     element.classList.remove("visible"); // Remove the visible class to start fade-out
//     element.classList.add("hidden"); // Add the hidden class to fade out

//     // Once the transition completes, set display to none
//     setTimeout(() => {
//       element.style.display = "none"; // Hide the element after the transition ends
//     }, 500); // Match the transition duration (0.5s)
//   });
// }




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
  const { contentTextTitleDiv, contentTitle, contentTitleImg, contentTextDiv, contentText, contactInfoDiv, contactEmail, contactPhone, contactGithub, btnMuffin, btnMug, btnPhone } = getElements();
  if (
    btnMuffin.style.display !== "none" &&
    btnMug.style.display === "none" &&
    btnPhone.style.display !== "none"
  ) {
    flexHideIt([contactInfoDiv]);
    flexShowIt([contentTextDiv]);
    addMessage(contentTitle, "ABOUT ME");
    contentTitleImg.src = svgMug;
    // contentTitleImg.style.transform = "translateX(.785rem) translateY(.675rem)";
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
        // contentTitleImg.style.transform =
          // "translateX(0rem) translateY(0rem)";
    // contentTitleImg.style.transform =
    //   "translateX(.5rem) translateY(-.125rem) rotate(45deg) ";
    addMessage(contactEmail, "madmuffinmandesign @gmail.com");
    contactEmail.style.textAlign = "center";
    addMessage(contactPhone, "1-555-8MUFFIN");
    // addMessage(
    //   contactGithub,
    //   "github.com/madmuffinmandesign"
    // );

  } else {
    clearMessage();
  }
}