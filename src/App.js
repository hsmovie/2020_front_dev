import SearchSection from './components/SearchSection.js';
import ListSection from './components/ListSection.js';
import { searchCats, fetchRandomCats } from './api/catApi.js';
import Spinner from './components/Spinner.js';
import Modal from './components/Modal.js';
import { getSessionItem, setSessionItem } from './utils/sessionStorage.js';

export default class App {
  constructor($target) {
    this.recentKeywords = getSessionItem('recentKeywords');
    const data = getSessionItem('data');

    this.spinner = new Spinner({ $target });
    this.searchSection = new SearchSection({
      $target,
      handleSearch: this.handleSearch,
      handleRandom: this.handleRandom,
      recentKeywords: this.recentKeywords,
    });

    this.listSection = new ListSection({
      $target,
      handleClick: this.handleCardClick,
      handleScroll: this.handleScroll,
      data,
    });
    this.modal = new Modal({ $target });
  }

  handleSearch = async (keyword) => {
    this.spinner.toggleSpinner();
    const { data, ok } = await searchCats(keyword);
    if (ok) {
      setSessionItem('data', data);
      this.listSection.setState(data);
    } else {
    }
    this.spinner.toggleSpinner();
  };

  handleRandom = async () => {
    this.spinner.toggleSpinner();
    const { data, ok } = await fetchRandomCats();
    if (ok) {
      setSessionItem('data', data);
      this.listSection.setState(data);
    } else {
    }
    this.spinner.toggleSpinner();
  };

  handleCardClick = (data) => {
    this.modal.openModal(data);
  };

  handleScroll = async () => {
    this.spinner.toggleSpinner();
    const { data, ok } = await fetchRandomCats();
    if (ok) {
      const beforeData = getSessionItem('data');
      const nextData = beforeData.concat(data);

      setSessionItem('data', nextData);
      this.listSection.setState(nextData);
      this.spinner.toggleSpinner();
    } else {
    }
  };
}
