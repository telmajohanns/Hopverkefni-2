/* eslint-disable import/prefer-default-export */
export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function el(name, ...children) {
  const element = document.createElement(name);

  // eslint-disable-next-line no-restricted-syntax
  for (const child of children) {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  }

  return element;
}

export function showCards(value) {
  const newValue = value.toLowerCase();

  for (const card of document.querySelectorAll(".card")) {
    if (card.classList.contains(newValue)) {
      card.className = `card ${newValue}`;
    }
  }
}

export function hideCards(value) {
  const newValue = value.toLowerCase();

  for (const card of document.querySelectorAll(".card")) {
    if (!card.classList.contains(newValue)) {
      card.classList.add("card-hidden");
    } else if (card.classList.contains("card-hidden")) {
      card.className = `card ${newValue}`;
    }
  }
}

let buttonCounter = 0;

export function readButton(button) {
  const bTarget = button.target;

  if (bTarget.classList.contains("button-active")) {
    bTarget.className = "buttons__button";
    buttonCounter--;
    if (buttonCounter === 0) {
      showCards("html");
      showCards("css");
      showCards("javascript");
    }
  } else {
    bTarget.classList.add("button-active");
    buttonCounter++;
  }

  for (const buttons of document.querySelectorAll(".button-active")) {
    hideCards(`${buttons.innerHTML}`);
  }

  for (const buttons of document.querySelectorAll(".button-active")) {
    showCards(`${buttons.innerHTML}`);
  }
}
