import { getExpenses, parseResponse } from '../../utils/data.js';

const results = {
  nodes: [
    {
      id: '5e611cb9-a6c4-4cc7-9fc2-9207898dfe4f',
      createdAt: '2022-05-03T03:35:17.485Z',
      updatedAt: '2022-05-03T03:35:17.485Z',
      amount: 5500000,
      category: 'Snack',
      date: '2022-05-03T03:35:17.019Z',
    },
  ],
};

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(results),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

test('getExpenses return a list', async function () {
  const response = await getExpenses();
  const { nodes } = await parseResponse(response);
  expect(nodes).toEqual(results.nodes);
});
