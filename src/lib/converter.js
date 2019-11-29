import { createElement } from './helpers';

export function generateImage(imagePath) {
  if (!imagePath) {
    return document.createElement('div');
  }

  const imageElement = createElement('img');
  imageElement.className = 'card__thumb';
  imageElement.src = `./${imagePath}`;
  return imageElement;
}

export function generateTitle(title, text, slug) {
  const container = document.createElement('div');

  const textContainer = createElement('div');
  textContainer.className = 'card__text';

  const link = document.createElement('a');
  link.href = `./fyrirlestur.html?slug=${slug}`;

  const textElement = document.createElement('p');
  textElement.appendChild(document.createTextNode(text.toUpperCase()));

  const titleElement = document.createElement('h2');
  titleElement.appendChild(document.createTextNode(title));

  const check = document.createElement('div');
  check.className = 'card__finished';
  const checkP = createElement('p');
  var store = window.localStorage.getItem(slug);
  var mark = document.createTextNode('\u2714');
  if (store != null) {
    checkP.appendChild(mark);
  }
  check.appendChild(checkP);

  textContainer.appendChild(textElement);
  textContainer.appendChild(titleElement);
  textContainer.appendChild(link);
  container.appendChild(textContainer);
  container.appendChild(check);


  /* if ( == 'finished') {
    checkP.appendChild(mark);
  } */

  return container;
}

export function generateQuote() {
  //
}

export function generateText() {
  //
}