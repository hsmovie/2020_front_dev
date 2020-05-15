import Card from './Card.js';
import { lazyLoad } from '../utils/lazyLoad.js';
import scrollFetch from '../utils/scrollFetch.js';

export default class ListSection {
  constructor({ $target, data, handleClick, handleScroll }) {
    this.data = data;
    this.handleClick = handleClick;
    this.handleScroll = handleScroll;
    this.container = document.createElement('section');
    this.container.className = 'list-section';
    $target.appendChild(this.container);
    this.render();
    lazyLoad();
    scrollFetch(this.handleScroll);
  }

  setState(data) {
    this.data = data;
    this.render();
    lazyLoad();
  }

  render() {
    if (!this.data) return;

    while (this.container.firstChild)
      this.container.removeChild(this.container.firstChild);

    if (this.data.length > 0) {
      const cardContainer = document.createElement('div');
      cardContainer.className = 'card-container';

      this.data.map((cat) => {
        new Card({
          $target: cardContainer,
          data: cat,
        });
      });

      cardContainer.addEventListener('click', (e) => {
        const path = e.path;
        const card = path.find((comp) => comp.className === 'cat-card');
        if (card) {
          const id = card.dataset.id;
          const catInfo = this.data.find((cat) => cat.id === id);

          this.handleClick(catInfo);
        }
      });
      this.container.appendChild(cardContainer);
    } else {
      const noticeSection = document.createElement('section');
      noticeSection.className = 'notice-section';

      const notice = document.createElement('h2');
      notice.className = 'notice';
      notice.textContent = '검색 결과가 없습니다.';

      const noticeImage = document.createElement('img');
      noticeImage.className = 'notice-image';
      noticeImage.src = 'src/img/emptybox.png';

      noticeSection.appendChild(notice);
      noticeSection.appendChild(noticeImage);
      this.container.appendChild(noticeSection);
    }
  }
}
