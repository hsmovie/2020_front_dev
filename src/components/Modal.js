export default class Modal {
  constructor({ $target }) {
    this.data = null;
    this.container = document.createElement('div');
    this.container.className = 'modal-wrapper hidden';

    $target.appendChild(this.container);

    this.render();
  }

  openModal(data) {
    this.container.classList.remove('hidden');
    this.data = data;
    console.log('opened');
    this.render();
  }

  closeModal() {
    this.container.classList.add('hidden');
    this.data = null;
    while (this.container.firstChild)
      this.container.removeChild(this.container.firstChild);
  }

  render() {
    if (!this.data) return;
    const { url } = this.data;
    const {
      name,
      origin,
      temperament,
      weight: { imperial, metric },
    } = this.data.breeds[0]
      ? this.data.breeds[0]
      : {
          name: '정보없음',
          origin: '정보없음',
          temperament: '정보없음',
          weight: { imperial: '정보없음', metric: '정보없음' },
        };

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const modalContents = document.createElement('section');
    modalContents.className = 'modal-contents';

    const modalHeader = document.createElement('header');
    modalHeader.className = 'modal-header';

    const modalTitle = document.createElement('p');
    modalTitle.className = 'modal-title';
    modalTitle.innerText = name;

    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.innerText = 'X';

    const modalImage = document.createElement('img');
    modalImage.className = 'modal-image';
    modalImage.src = url;

    const modalInfo = document.createElement('article');
    modalInfo.className = 'modal-info';

    const catOrigin = document.createElement('p');
    catOrigin.className = 'cat-origin';
    catOrigin.innerText = origin;

    const catTemperament = document.createElement('p');
    catTemperament.className = 'cat-temperament';
    catTemperament.innerText = temperament;

    const catWeight = document.createElement('p');
    catWeight.className = 'cat-width';
    catWeight.innerText = `${imperial} (imperial) / ${metric} (metric)`;

    closeBtn.addEventListener('click', () => {
      this.closeModal();
    });
    overlay.addEventListener('click', () => {
      this.closeModal();
    });

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeBtn);

    modalInfo.appendChild(catOrigin);
    modalInfo.appendChild(catTemperament);
    modalInfo.appendChild(catWeight);

    modalContents.appendChild(modalHeader);
    modalContents.appendChild(modalImage);
    modalContents.appendChild(modalInfo);

    this.container.appendChild(overlay);
    this.container.appendChild(modalContents);
  }
}
