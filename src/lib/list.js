import { empty, el } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
  }

  load() {
    empty(this.container);
    const list = fetch('lectures.json')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(json => {
        // for each lecture, create lecture list item and append to right place.
        
        console.log(json));
      }
    const lectures = list.lectures;
  }

  // create one lecture list item like in the útlit image.
  createLectureListItem(title, category, thumbnail, slug){
  // <div class="card html">
  //   <a href="./fyrirlestur.html?slug=html-sagan"></a>
  //   <img class="card__picture" src="./img/thumb1.jpg" />
  //   <div class="card__content">
  //     <div class="card__text">
  //       <p>HTML</p>
  //       <h2>Sagan</h2>
  //     </div>
  //   </div>
  // </div>

  // búa til öll elements

  // setja rétta klasa og src á mynd

  // return element

  }
}
