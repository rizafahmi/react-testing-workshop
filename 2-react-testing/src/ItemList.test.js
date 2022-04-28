import ReactDOM from 'react-dom';

import ItemList from './ItemList.js';

test('Render empty ItemList', function () {
  // Arrange
  const container = document.createElement('div');
  // Act
  ReactDOM.render(<ItemList items={[]} />, container);

  // Assert
  expect(container.textContent).toEqual('no items, yet');
});

test('Render item given', function () {
  const container = document.createElement('div');
  ReactDOM.render(<ItemList items={['Apel', 'Anggur', 'Arbei']} />, container);
  expect(container.textContent).toMatch('Apel');
  expect(container.textContent).toMatch('Anggur');
  expect(container.textContent).toMatch('Arbei');
});
