import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form.js';

test('submit the form calls onSubmit with amount, category and date', function () {
  render(<Form />);
  screen.debug();
});
