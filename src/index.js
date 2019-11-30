/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import List from './lib/list';
import Lecture from './lib/lecture';
import { readButton } from './lib/helpers';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
    const lecture = new Lecture();
    lecture.load();
  } else {
    const list = new List();
    list.load();
    const buttons = document.querySelectorAll('.buttons__button');
    for (const button of document.querySelectorAll('.buttons__button')) {
      button.addEventListener('click', readButton);
    }
  }
});
