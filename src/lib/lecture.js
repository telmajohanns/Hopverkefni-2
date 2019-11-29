import { empty, createElement } from './helpers';
import { contentCreator } from './creator';

export default class Lecture {
  constructor() {
    this.container = document.querySelector('.lecture-page');
    this.url = './lectures.json';
  }

  loadLecture(slug) {
    return fetch(this.url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Gat ekki sótt fyrirlestra');
        }
        return res.json();
      })
      .then(data => {
        const found = data.lectures.find(i => i.slug === slug);
        if (!found) {
          throw new Error('Fyrirlestur fannst ekki');
        }
        return found;
      });
  }

  renderData(data) {
    this.renderItem(data);
  }

  renderItem(item) {
    const page = document.querySelector('.page');
    const pageContainer = createElement('div');
    pageContainer.className = 'page__content';
    const counter = item.content.length;

    const store = window.localStorage.getItem(item.slug);

    const button = document.querySelector('.footer__button');
    const finButton = document.querySelector('.footer__button--finished');

    const header = document.querySelector('.header');
    if (item.image != undefined) {
      header.style.backgroundImage = `url('./${item.image}')`;
    }

    const headerContent = document.querySelector('.header__text');
    const headerText = createElement('p', item.category);
    headerText.className = 'header__paragraph';
    const headerTitle = createElement('h1', item.title);
    headerTitle.className = 'header__title';

    headerContent.appendChild(headerText);
    headerContent.appendChild(headerTitle);


    for (let i = 0; i < counter; i++) {
      const type = item.content[i];
      const content = contentCreator(type);
      pageContainer.appendChild(content);
    }

    page.appendChild(pageContainer);

    if (store === 'finished') {
      finButton.classList.remove('hidden');
    } else {
      button.classList.remove('hidden');
    }

    button.addEventListener('click', () => {
      window.localStorage.setItem(item.slug, 'finished');
      button.classList.add('hidden');
      finButton.classList.remove('hidden');
    });
    finButton.addEventListener('click', () => {
      window.localStorage.removeItem(item.slug);
      button.classList.remove('hidden');
      finButton.classList.add('hidden');
    });
  }

  load() {
    const qs = new URLSearchParams(window.location.search);
    const slug = qs.get('slug');

    this.loadLecture(slug).then(data => this.renderData(data));
  }
}
