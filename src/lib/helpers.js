/* eslint-disable import/prefer-default-export */
export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
