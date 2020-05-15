import ListSection from './ListSection';

const $target = document.createElement('div');
const listSection = new ListSection({ $target });
const { container } = listSection;

test('mount', () => {
  expect(container.className).toBe('list-section');
});

test('setState', () => {
  const mockData = [
    {
      url: 'https://cdn2.thecatapi.com/images/1te.gif',
      breeds: [{ name: 'test', origin: 'test' }],
    },
  ];
  listSection.setState(mockData);
  expect(listSection.data).toEqual(mockData);
  expect(container.children.length).toBe(1);
});
