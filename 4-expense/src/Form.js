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
      <label htmlFor="amount">Amount</label>
      <input name="amount" type="number" required={true} />
      <label htmlFor="category">Category</label>
      <select id="category" name="category">
        <option value=""></option>
        <option value="Grocery">Grocery</option>
        <option value="Health">Health</option>
        <option value="Food">Food</option>
        <option value="Vehicle service">Vehicle service</option>
        <option value="Snack">Snack</option>
      </select>
      <label htmlFor="">Date</label>
      <input name="date" type="date" />
      <button type="submit">Save expense</button>
    </form>
  );
}

export default Form;
