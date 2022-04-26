import { add, substract } from './calculation.js';

let actual, expected;

test('add two number correctly', function () {
  actual = add(3, 5);
  expected = 8;

  expect(actual).toEqual(expected);
});

test('subtract two number correctly', function () {
  actual = substract(5, 2);
  expected = 3;
  expect(actual).toEqual(expected);
});
