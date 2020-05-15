import Modal from './Modal';

const $target = document.createElement('div');
const modal = new Modal({ $target });
const { container } = modal;

const mockData = {
  url: 'https://cdn2.thecatapi.com/images/1te.gif',
  breeds: [
    {
      name: 'test',
      origin: 'test',
      temperament: 'test',
      weight: { imperial: 'test', metric: 'test' },
    },
  ],
};

test('mount', () => {
  expect(container.className).toBe('modal-wrapper hidden');
});

test('functions', () => {
  modal.openModal(mockData);
  expect(modal.data).toBe(mockData);
  expect(container.className).toBe('modal-wrapper');

  modal.closeModal();
  expect(modal.data).toBeNull();
  expect(container.className).toBe('modal-wrapper hidden');
  expect(container.children.length).toBe(0);
});

// test('setState', () => {
//   const mockData = [
//     {
//       url: 'https://cdn2.thecatapi.com/images/1te.gif',
//       breeds: [{ name: 'test', origin: 'test' }],
//     },
//   ];
//   listSection.setState(mockData);
//   expect(listSection.data).toEqual(mockData);
//   expect(container.children.length).toBe(1);
// });
