export default class Spinner {
  constructor({ $target }) {
    this.container = document.createElement('div');
    this.container.className = 'spinner-wrapper hidden';

    $target.appendChild(this.container);

    this.render();
  }

  toggleSpinner() {
    this.container.classList.toggle('hidden');
  }

  render() {
    const spinnerImage = document.createElement('img');
    spinnerImage.className = 'spinner-image';
    spinnerImage.src = 'src/img/loading.gif';

    this.container.appendChild(spinnerImage);
  }
}
