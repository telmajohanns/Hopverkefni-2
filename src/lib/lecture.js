import { el } from './helpers';

export default class Lecture {
  constructor() {
    this.container = document.querySelector('.lecture');
    this.url = 'lectures.json';
  }

  async loadLecture(slug) {
    const res = await fetch(this.url);
    if (!res.ok) {
      throw new Error('Gat ekki sótt fyrirlestra');
    }
    const data = await res.json();
    const found = data.lectures.find(i => i.slug === slug);
    if (!found) {
      throw new Error('Fyrirlestur fannst ekki');
    }
    return found;
  }
}

function createHeader(data) {
  const category = ('div', data.category);
  category.classList.add('lecture__header--category');
  const headingElement = ('h1', data.title);
  headingElement.classList.add('lecture__header--title');

  if (data.image) {
    headingWrapper.style.backgroundImage = `url(${data.image})`;
  }

  return headingWrapper;
}