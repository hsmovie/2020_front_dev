import Button from './Button.js';
import { setSessionItem } from '../utils/sessionStorage.js';

export default class SearchSection {
  constructor({ $target, recentKeywords, handleSearch, handleRandom }) {
    this.recentKeywords = recentKeywords;
    this.handleSearch = handleSearch;
    this.handleRandom = handleRandom;

    this.container = document.createElement('section');
    this.container.className = 'search-section';

    $target.appendChild(this.container);
    this.render();
  }
  handleRecentKeywords(keyword) {
    if (this.recentKeywords.includes(keyword)) return;
    if (this.recentKeywords.length == 5) this.recentKeywords.shift();

    this.recentKeywords.push(keyword);
    setSessionItem('recentKeywords', this.recentKeywords);

    this.render();
  }
  render() {
    while (this.container.firstChild)
      this.container.removeChild(this.container.firstChild);

    const searchWrapper = document.createElement('div');
    searchWrapper.className = 'search-box-wrapper';

    const searchInput = document.createElement('input');
    searchInput.className = 'search-input';
    searchInput.placeholder = '고양이를 검색하세요.';
    searchInput.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        this.handleSearch(searchInput.value);
        this.handleRecentKeywords(searchInput.value);
      }
    });
    searchInput.addEventListener('focus', () => {
      searchInput.value = '';
    });

    const recentKeywords = document.createElement('div');
    recentKeywords.className = 'recent-keywords';
    this.recentKeywords.forEach((keyword) => {
      const link = document.createElement('span');
      link.className = 'keyword';
      link.innerText = keyword;

      link.addEventListener('click', () => {
        this.handleSearch(searchInput.value);
      });

      recentKeywords.appendChild(link);
    });
    searchWrapper.appendChild(searchInput);
    searchWrapper.appendChild(recentKeywords);

    const { button: randomButton } = new Button({
      $target: this.container,
      className: 'random-button',
      text: 'Random',
    });
    randomButton.addEventListener('click', this.handleRandom);

    this.container.appendChild(searchWrapper);
    searchInput.focus();

    const { button: themeButton } = new Button({
      $target: this.container,
      className: 'theme-button',
      text: 'Theme',
    });
    themeButton.addEventListener('click', () => {
      console.log('themeButton');
    });
  }
}
