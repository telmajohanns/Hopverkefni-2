import { empty, el } from './helpers';
import * as converter from './converter';
import { loadSavedLectures } from './storage';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.url = './lectures.json';

    this.completedLectures = loadSavedLectures();

    this.htmlButton = document.querySelector('.navbar__HTML');
    this.htmlButton.addEventListener('click', this.catButtonHandler.bind(this));

    this.cssButton = document.querySelector('.navbar__CSS');
    this.cssButton.addEventListener('click', this.catButtonHandler.bind(this));

    this.jsButton = document.querySelector('.navbar__JS');
    this.jsButton.addEventListener('click', this.catButtonHandler.bind(this));
  }

  loadLectures() {
    return fetch(this.url)
    .then((res) => {
      if (!res.ok){
        throw new Error('Gat ekki sótt fyrirlestra');
      }
      return res.json();
    });
      }

    renderData(data, x) {
      if (typeof x !== 'undefined' && x.length > 0){
        for (let i=0; i<x.length; i+= 1){
          for(let item of data.lectures){
            if (x[i] === item.category){
              this.renderItem(item);
            }
          }
        }
      } else {
        for(let item of data.lectures){
          this.renderItem(item);
        }
      }
    }

    renderItem(item){
      const pictureContainer = converter.generatePictureContainer(item.category, item.slug);

      const imageElement = converter.generateCardPicture(item.picture);
      pictureContainer.appendChild(imageElement);
      let titleElement;

      if (this.completedLectures.includes(item.slug)){
        titleElement = converter.generateCardContent(item.title, item.category, 'card__checked');
      }else {
        titleElement = converter.generateCardContent(item.title, item.category);
      }
      pictureContainer.appendChild(titleElement);

      this.container.appendChild(pictureContainer);
      }

      load(x){
        empty(this.container);
        this.loadLectures()
        .then((data) => {
          this.renderData(data,x);
        });
    }

    refreshList(){
      const selected = document.querySelectorAll('.navbar__selected');
      const x = [];
      for (let el of selected){
        x.push(el.firstChild.nodeValue.toLowerCase());
      }
      this.load(x);
    }
  
    xButtonHandler(e){
      const {target } = e;
      target.classList.toggle('navbar__selected');
      this.refreshList();

    }
    }
