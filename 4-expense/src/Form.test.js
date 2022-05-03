import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form.js';

test('submit the form calls onSubmit with amount, category and date', function () {
  const handleSubmit = jest.fn();

  render(<Form onSubmit={handleSubmit} />);
  const amountField = screen.getByLabelText(/amount/i);
  const categoryField = screen.getByLabelText(/category/i);
  const dateField = screen.getByLabelText(/date/i);
  const submitButton = screen.getByRole('button', {
    name: /save expense/i,
  });

  userEvent.type(amountField, '100000');
  userEvent.selectOptions(categoryField, 'Grocery');
  userEvent.type(dateField, '03/05/2022');
  userEvent.click(submitButton);
  screen.debug();

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    amount: '100000',
    category: 'Grocery',
    date: new Date('03/05/2022'),
  });
});
