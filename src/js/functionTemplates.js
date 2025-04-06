/**
 * Creates an HTML element with specified attributes and optional text content.
 *
 * @param {string} tagName - The type of element to create (e.g., 'div', 'span', 'p').
 * @param {Object} [attributes={}] - An object containing attributes to apply to the element. Keys should be attribute names (e.g., 'class', 'id', 'data-*').
 * @param {string} [text=''] - Optional text content to set as the inner text of the element.
 *
 * @returns {HTMLElement} The created HTML element.
 */

export function createElement(tagName, attributes = {}, text = "") {
  const element = document.createElement(tagName);
  for (const [key, value] of Object.entries(attributes)) {
    if (key === "class") {
      element.className = value;
    } else if (key.startsWith("data-")) {
      // For 'data-*' attributes
      element.setAttribute(key, value);
    } else {
      element.setAttribute(key, value);
    }
  }

  if (text) {
    element.innerText = text;
  }
  return element;
}

/**
 * Creates an HTML <img> element with specified attributes.
 * 
 * @param {Object} [attributes={}] - An object containing attributes to apply to the <img> element. Supported attributes include:
 *                                    - 'id': The id of the image.
 *                                    - 'src': The source URL of the image.
 *                                    - 'alt': The alt text for the image.
 *                                    - 'data-*': Custom data attributes (e.g., data-selected).
 *                                    - Other standard attributes for an <img> element.
 * 
 * @returns {HTMLImageElement} The created <img> element.
 */

export function createImg(attributes = {}) {
  const img = document.createElement("img");

  for (const [key, value] of Object.entries(attributes)) {
    // Handle 'id', 'src', and 'alt' attributes specifically
    if (key === "id") {
      img.id = value;
    } else if (key === "src") {
      img.src = value;
    } else if (key === "alt") {
      img.alt = value;
    } else if (key.startsWith("data-")) {
      // Special case for data-* attributes (e.g., data-selected)
      img.setAttribute(key, value);
    } else {
      img.setAttribute(key, value);
    }
  }
  return img;
}
