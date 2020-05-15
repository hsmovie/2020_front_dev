import Spinner from './Spinner';

const $target = document.createElement('div');
const spinner = new Spinner({ $target });

test('Spinner mount', () => {
  expect(spinner.container.className).toBe('spinner-wrapper hidden');
});

test('functions', () => {
  expect(spinner.container.children[0].tagName).toBe('IMG');

  spinner.toggleSpinner();
  expect(spinner.container.className).toBe('spinner-wrapper');
  spinner.toggleSpinner();
  expect(spinner.container.className).toBe('spinner-wrapper hidden');
});
