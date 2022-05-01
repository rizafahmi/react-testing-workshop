import { render } from 'react-dom';
import Counter from './Counter';

test('render counter', function () {
  // Arrange
  const div = document.createElement('div');
  document.body.append(div);
  render(<Counter />, div);

  // Act
  const count = div.firstChild.querySelector('div');

  // Assert
  expect(count.textContent).toBe('0');

  // Cleanup
  div.remove();
});

test('increment counter', function () {
  // Arrange
  const div = document.createElement('div');
  document.body.append(div);
  render(<Counter />, div);

  const increment = document.querySelector('button.increment');

  // Act
  increment.click();

  console.log(document.body.innerHTML);
  // Assert
  const count = div.firstChild.querySelector('div');
  expect(count.textContent).toBe('1');

  div.remove();
});
