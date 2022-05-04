import '../node_modules/@picocss/pico/css/pico.min.css';
import { useState } from 'react';

import Form from './Form.js';
import List from './List.js';
import { getExpenses, parseResponse } from './utils/data.js';

function App() {
  const [appState, setAppState] = useState('START');
  const [expenseList, setExpenseList] = useState([]);

  async function sendData(data) {
    setAppState('PENDING');

    await fetch(
      `https://prod-qore-app.qorebase.io/vGTlXj3AduUBCg9/allExpense/rows`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    getData();
    setAppState('FINISH');
  }

  async function getData() {
    const response = await getExpenses();
    const { nodes } = await parseResponse(response);
    setExpenseList(nodes);
  }

  function onSubmit(data) {
    sendData(data);
  }
  return (
    <div className="container">
      <h1>Expense</h1>
      {appState === 'PENDING' && (
        <article>
          <a href="#" className="loading" aria-busy="true">
            Submitting form...
          </a>
        </article>
      )}
      {appState !== 'FINISH' ? (
        <Form onSubmit={(data) => onSubmit(data)} />
      ) : (
        <List
          expenseList={expenseList}
          handleNewExpense={() => setAppState('START')}
        />
      )}
    </div>
  );
}

export default App;
