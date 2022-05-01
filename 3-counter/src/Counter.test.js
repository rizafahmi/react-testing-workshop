import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

test('render counter', function () {
  // Arrange
  render(<Counter />);

  // Act
  const count = screen.getByTestId('count');

  // Assert
  expect(count.textContent).toBe('0');
});

test('increment counter', function () {
  // Arrange
  render(<Counter />);

  const increment = screen.getByText('+');

  // Act
  fireEvent.click(increment);

  // Assert
  const count = screen.getByTestId('count');
  expect(count.textContent).toBe('1');
});
