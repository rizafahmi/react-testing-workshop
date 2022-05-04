function List({ expenseList, handleNewExpense }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenseList &&
            expenseList.map(function (expense) {
              return (
                <tr key={expense.id}>
                  <td>
                    {expense.amount.toLocaleString('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                    })}
                  </td>
                  <td>{expense.category}</td>
                  <td>{expense.date}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button onClick={handleNewExpense}>New Expense</button>
    </>
  );
}

export default List;
