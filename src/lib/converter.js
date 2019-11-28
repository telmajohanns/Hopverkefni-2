import { createElement } from './helpers';

export function generateThumbContainer(x, slug) {
  const link = createElement('a');
  link.href = `./fyrirlestur.html?slug=${slug}`;
  link.classList.add('thumbnail', 'grid__col-4', `${x}`);
  return link;
}

export function generateThumbImage(imagePath) {
  if (!imagePath) {
    const div = createElement('div');
    div.classList.add('thumbnail__empty');
    return div;
  }

  const imageElement = createElement('img');
  imageElement.src = `./${imagePath}`;
  imageElement.classList.add('thumbnail__img');
  return imageElement;
}

function generateThumbCheck(checked) {
  const mark = createElement('div', '✔');
  mark.classList.add('thumbnail__checkmark');
  if (checked) {
    mark.classList.add('thumbnail__checked');
  }
  return mark;
}

function generateThumbTitle(title, x) {
  const div = createElement('div');
  div.classList.add('thumbnail__text');

  const catElement = createElement('h4', x);
  catElement.classList.add('thumbnail__x');

  const titleElement = createElement('h1', title);

  div.appendChild(xElement);
  div.appendChild(titleElement);
  return div;
}

export function generateThumbBottom(title, x, completed) {
  const bottom = createElement('div');
  bottom.classList.add('thumbnail__bottom');

  const textArea = generateThumbTitle(title, x);
  const checkMark = generateThumbCheck(completed);

  bottom.appendChild(textArea);
  bottom.appendChild(checkMark);
  return bottom;
}

function splitString(data) {
  const string = data.split('\n');
  return string;
}

function generateLectureHeading(data) {
  const heading = createElement('h1', data);
  heading.classList.add('lecture__heading');
  return heading;
}

function generateLectureImg(url, caption) {
  const img = createElement('img');
  img.setAttribute('src', url);
  img.setAttribute('alt', caption);
  img.classList.add('lecture__image');
  return img;
}

function generateUOList(items) {
  const ul = createElement('ul');
  for (let i = 0; i < items.length; i += 1) {
    const li = createElement('li', items[i]);
    li.classList.add('lecture__listitem');
    ul.appendChild(li);
  }
  ul.classList.add('lecture__list');
  return ul;
}

function generateCode(data) {
  const code = createElement('div', data);
  code.classList.add('lecture__code');
  return code;
}

function generateQuote(data, attribute) {
  const quote = createElement('blockquote', `${data}`);
  quote.appendChild(createElement('br'));
  quote.classList.add('lecture__quote');
  const cite = createElement('cite', attribute);
  cite.classList.add('lecture__attribute');

  quote.appendChild(cite);
  return quote;
}

function generateText(data) {
  const div = createElement('div');
  const par = splitString(data);

  for (let j = 0; j < par.length; j += 1) {
    const p = createElement('p', par[j]);
    p.classList.add('lecture__par');
    div.appendChild(p);
  }
  div.classList.add('lecture__text');
  return div;
}

function generateVid(url) {
  const iframe = createElement('iframe');
  iframe.setAttribute('src', url);
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowfullscreen', '0');
  iframe.classList.add('lecture__video');
  return iframe;
}

export function generateLectureElement(type, data, attribute, caption) {
  switch (type) {
    default:
      throw new Error('Bad data');
    case 'text':
      return generateText(data);
    case 'quote':
      return generateQuote(data, attribute);
    case 'code':
      return generateCode(data);
    case 'youtube':
      return generateVid(data);
    case 'image':
      return generateLectureImg(data, caption);
    case 'heading':
      return generateLectureHeading(data);
    case 'list':
      return generateUOList(data);
  }
}

export function generateHeaderText(title, x) {
  const category = createElement('h4', x);
  category.classList.add('header__category');
  const titleEl = createElement('h1', title);
  titleEl.classList.add('header__title');
  const textArea = createElement('div');
  textArea.appendChild(category);
  textArea.appendChild(titleEl);
  textArea.classList.add('header__textarea');

  return textArea;
}

export function generateProtection() {
  const protection = createElement('div');
  protection.classList.add('img--protection');
  return protection;
}

export function generateBannerContainer(img) {
  const bannerContainer = createElement('div');
  bannerContainer.classList.add('header__img', 'grid__row');

  bannerContainer.style.background = `url(${img}) no-repeat`;
  bannerContainer.style.backgroundPosition = '50% 50%';
  bannerContainer.style.backgroundSize = 'cover';
  return bannerContainer;
}
