export function getExpenses() {
  return fetch(
    `https://prod-qore-app.qorebase.io/vGTlXj3AduUBCg9/allExpense/rows?limit=50&offset=0`
  );
}

export function parseResponse(response) {
  return response.json();
}
