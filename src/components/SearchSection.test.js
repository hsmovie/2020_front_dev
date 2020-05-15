import SarchSection from './SearchSection';

const $target = document.createElement('div');
const { container } = new SarchSection({ $target });

test('SearchSection mount', () => {
  expect(container.className).toBe('search-section');
});

test('SearchSection children', () => {
  expect(container.children[0].tagName).toBe('BUTTON');
  expect(container.children[0].className).toBe('random-button');

  expect(container.children[1].tagName).toBe('INPUT');
  expect(container.children[1].className).toBe('search-input');

  expect(container.children[2].tagName).toBe('BUTTON');
  expect(container.children[2].className).toBe('theme-button');
});
