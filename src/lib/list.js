/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
import { el, empty } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
  }

  loadLectures() {
    return fetch(this.url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Gat ekki sótt fyrirlestra');
        }
        return res.json();
      });
  }
  
  load() {
    empty(this.container);
    const list = fetch('lectures.json');
  }
{
  createLectureListItem(title, category, thumbnail, slug){
    const category = el('div', data.category)
    category.classList.add('listItem__category')
  }
}
}

// export default class List {
// constructor() {
// this.container = document.querySelector('.list');
// }

// load() {
// empty(this.container);
// const list = fetch('lectures.json')
// }

// create one lecture list item like in the útlit image.
// createLectureListItem(title, category, thumbnail, slug){
// const category = el('div', data.category);
// category.classList.add('listItem__category');

// const title = el('h1', data.title);
// title.classList.add('listItem__title');

// }
// }

// búa til öll elements

// setja rétta klasa og src á mynd

// return element
