export default class Card {
  constructor({ $target, data }) {
    this.data = data;
    this.container = document.createElement('li');
    this.container.className = 'cat-card';
    this.container.dataset.id = data.id;

    $target.appendChild(this.container);

    this.render();
  }

  render() {
    const { url } = this.data;
    const { name, origin } =
      this.data.breeds.length > 0
        ? this.data.breeds[0]
        : { name: '정보없음', origin: '정보없음' };

    const cardImage = document.createElement('img');
    cardImage.className = 'card-image lazy';
    cardImage.dataset.src = url;

    const cardInfo = document.createElement('article');
    cardInfo.className = 'card-info';

    const catName = document.createElement('p');
    catName.className = 'cat-name';
    catName.innerText = name;

    const catOrigin = document.createElement('p');
    catOrigin.className = 'cat-origin';
    catOrigin.textContent = origin;

    cardInfo.appendChild(catName);
    cardInfo.appendChild(catOrigin);
    this.container.appendChild(cardImage);
    this.container.appendChild(cardInfo);
  }
}
