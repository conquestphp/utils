import { it, expect } from 'vitest';
import { median } from '.';

it('can calculate the median of an array of numbers', () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
    expect(median([1, 2, 3, 4, 5, 6])).toBe(3.5);
    expect(median([6, 4, 3, 1])).toBe(3.5)
    expect(median([1])).toBe(1);
});