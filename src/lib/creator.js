import { createElement } from './helpers.js';

function youtubeCreator(item) {
  const div = createElement('div');
  div.className = 'content__youtube';
  const link = createElement('iframe');
  link.setAttribute('src', item.data);
  link.setAttribute('frameborder', 0);
  link.setAttribute('allowfullscreen', 0);

  div.appendChild(link);
  return div;
}

function textCreator(item) {
  const div = createElement('div');
  div.className = 'content__text';
  const strings = item.data.split('\n');

  for (let i = 0; i < strings.length; i++) {
    const text = createElement('p', strings[i]);
    div.appendChild(text);
  }

  return div;
}

function quoteCreator(item) {
  const div = createElement('div');
  div.className = 'content__quote';

  const quote = createElement('p', item.data);
  const citation = createElement('cite', item.attribute);

  div.appendChild(quote);
  div.appendChild(citation);

  return div;
}

function imageCreator(item) {
  const div = createElement('div');
  const figure = createElement('figure');
  div.className = 'content__image';
  const image = createElement('img');
  figure.appendChild(image);
  image.setAttribute('src', `./${item.data}`);
  image.setAttribute('alt', item.caption);
  const caption = createElement('figcaption', item.caption);
  figure.appendChild(caption);
  div.appendChild(figure);


  return div;
}

function headingCreator(item) {
  const div = createElement('div');
  div.className = 'content__heading';
  div.appendChild(createElement('h2', item.data));

  return div;
}

function listCreator(item) {
  const div = createElement('div');
  div.className = 'content__list';

  const ul = createElement('ul');

  for (let i = 0; i < item.data.length; i++) {
    ul.appendChild(createElement('li', item.data[i]));
  }
  div.appendChild(ul);

  return div;
}

function codeCreator(item) {
  const div = createElement('div');
  const p = createElement('xmp', `${item.data}`);
  div.className = 'content__code';
  div.appendChild(p);

  return div;
}

export function contentCreator(item) {
  if (item.type == 'youtube') {
    var div = youtubeCreator(item);
  } else if (item.type == 'text') {
    var div = textCreator(item);
  } else if (item.type == 'quote') {
    var div = quoteCreator(item);
  } else if (item.type == 'image') {
    var div = imageCreator(item);
  } else if (item.type == 'heading') {
    var div = headingCreator(item);
  } else if (item.type == 'list') {
    var div = listCreator(item);
  } else if (item.type == 'code') {
    var div = codeCreator(item);
  }
  return div;
}
