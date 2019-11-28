import { empty, el } from './helpers';


export default class List {
  constructor() {
    this.container = document.querySelector('.list');
  }



  load() {
    empty(this.container);
    const list = fetch ('lectures.json')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
  });
  const lectures = list.lectures;
  }
}
