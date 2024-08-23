import { it, expect } from 'vitest';
import { median } from '.';

it('can calculate the median of an array of numbers', () => {
  expect(median([1, 2, 3, 4, 5])).toBe(3);
  expect(median([1, 2, 3, 4, 5, 6])).toBe(3.5);
  expect(median([6, 4, 3, 1])).toBe(3.5);
  expect(median([1])).toBe(1);
  
  // Additional test cases
  expect(median([])).toBe(NaN);
  expect(median([1, 1, 1, 1])).toBe(1);
  expect(median([1, 2])).toBe(1.5);
  expect(median([3, 1, 2])).toBe(2);
  expect(median([-1, 0, 1])).toBe(0);
  expect(median([100, 0, -100])).toBe(0);
  expect(median([1, 2, 3, 4, 5, 6, 7])).toBe(4);
});