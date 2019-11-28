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
    if (typeof child === 'string') {
      element.appendChild(
        document.createTextNode(child),
      );
    } else {
      element.appendChild(child);
    }
  }

  return element;
}
