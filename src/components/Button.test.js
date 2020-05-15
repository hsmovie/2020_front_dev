import Button from './Button';

test('Button mount', () => {
  const $target = document.createElement('div');
  const { button } = new Button({ $target, className: 'test', text: 'test' });
  expect(button.textContent).toBe('test');
  expect(button.className).toBe('test');
});
