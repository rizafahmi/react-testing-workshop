function Form({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { amount, category, date } = event.target.elements;
    onSubmit({
      amount: amount.value,
      category: category.value,
      date: date.value || new Date(),
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount-field">Amount</label>
      <input id="amount-field" name="amount" type="number" required={true} />
      <label htmlFor="category-field">Category</label>
      <select id="category-field" name="category">
        <option value=""></option>
        <option value="Grocery">Grocery</option>
        <option value="Health">Health</option>
        <option value="Food">Food</option>
        <option value="Vehicle service">Vehicle service</option>
        <option value="Snack">Snack</option>
      </select>
      <label htmlFor="date-field">Date</label>
      <input id="date-field" name="date" type="date" />
      <button type="submit">Save expense</button>
    </form>
  );
}

export default Form;
