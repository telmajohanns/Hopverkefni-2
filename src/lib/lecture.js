import * as converter from './converter';
import { saveLectures, lectureCompleted } from './storage';

export default class Lecture {
  constructor() {
    this.header = new Header();
    this.container = document.querySelector('.lecture');
    this.url = './lectures.json';

    this.completeBtn = this.prepareCompleteBtn();
  }

  getSlug() {
    return (new URLSearchParams(window.location.search)).get('slug');
  }

  checkButton(btn) {
    if (!lectureCompleted(this.getSlug())) {
      const text = document.createTextNode('Klára fyrirlestur');
      btn.replaceChild(text, btn.firstChild);
    } else {
      const text = document.createTextNode('Afmerkja fyrirlestur');
      btn.replaceChild(text, btn.firstChild);
    }
  }

  completeButtonHandler(e) {
    const slug = (this.getSlug());
    saveLectures(slug);
    this.checkButton(e.target);
  }

  prepareCompleteBtn() {
    const btn = document.querySelector('.complete--button');
    btn.addEventListener('click', this.completeButtonHandler.bind(this));
    this.checkButton(btn);
    return btn;
  }

  renderLecture(data) {
    const { content } = data;
    const title = document.querySelector('.page--title');
    title.appendChild(document.createTextNode(data.title));
    for (let i = 0; i < content.length; i += 1) {
      const item = content[i];
      const element = converter.generateLectureElement(item.type, item.data,
        item.attribute, item.caption);
      this.container.appendChild(element);
    }
  }

  loadLecture(slug) {
    return fetch(this.url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Gat ekki sótt fyrirlestra');
        }
        return res.json();
      })
      .then((data) => {
        const found = data.lectures.find(i => i.slug === slug);
        if (!found) {
          throw new Error('Fyrirlestur fannst ekki');
        }
        const { title, category, image } = found;
        this.header.renderHeader(title, category, image);
        this.renderLecture(found);
      });
  }

  load() {
    const slug = this.getSlug();

    this.loadLecture(slug);
  }
}
