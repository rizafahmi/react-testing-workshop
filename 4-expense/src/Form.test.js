import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form.js';

test('submit the form calls onSubmit with amount, category and date', function () {
  let submittedData;

  function handleSubmit(data) {
    submittedData = data;
  }

  render(<Form onSubmit={handleSubmit} />);
  const amountField = screen.getByLabelText(/amount/i);
  const categoryField = screen.getByLabelText(/category/i);
  const dateField = screen.getByLabelText(/date/i);
  const submitButton = screen.getByRole('button', {
    name: /save expense/i,
  });
  const now = Date.now();
  userEvent.type(amountField, '100000');
  userEvent.selectOptions(categoryField, 'Grocery');
  userEvent.type(dateField, now);
  userEvent.click(submitButton);

  expect(submittedData).toEqual({
    amount: '100000',
    category: 'Grocery',
    date: now,
  });

  screen.debug();
});
