import Card from './Card';

const $target = document.createElement('div');
const mockData = {
  url: 'https://cdn2.thecatapi.com/images/1te.gif',
  breeds: [{ name: 'test', origin: 'test' }],
};

const card = new Card({ $target, data: mockData });
const { container } = card;

test('mount', () => {
  expect(container.className).toBe('cat-card');
  expect(container.children.length).toBe(2);
});
