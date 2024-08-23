import { it, expect } from 'vitest';
import { chunk } from '.';

it('should split an array into chunks of the specified size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
});

it('should return an empty array when given an empty array', () => {
    expect(chunk([], 2)).toEqual([]);
});

it('should handle chunk sizes larger than the array length', () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
});

it('should handle chunk size of 1', () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
});

it('should handle arrays with different data types', () => {
    expect(chunk(['a', 'b', 1, 2, true, false], 2)).toEqual([['a', 'b'], [1, 2], [true, false]]);
});

it('should not modify the original array', () => {
    const original = [1, 2, 3, 4, 5];
    chunk(original, 2);
    expect(original).toEqual([1, 2, 3, 4, 5]);
});

it('should handle large arrays', () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    const chunked = chunk(largeArray, 100);
    expect(chunked.length).toBe(10);
    expect(chunked[0].length).toBe(100);
    expect(chunked[9].length).toBe(100);
});

it('should throw an error for no chunk size', () => {
    expect(() => chunk([1, 2, 3], 0)).toThrowError();
});

it('should handle chunk sizes that don\'t evenly divide the array length', () => {
    expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
});
