import { expect, it } from 'vitest';
import { minBy } from './index';

it('should return the minimum number in an array of numbers', () => {
    expect(minBy([3, 1, 2, 5, 4])).toBe(1);
});

it('should return the minimum string in an array of strings', () => {
    expect(minBy(['a', 'c', 'b', 'e', 'd'])).toBe('a');
});

it('should work with custom comparison function for objects', () => {
    const objects = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 35 },
    ];
    expect(minBy(objects, obj => obj.age)).toEqual({ name: 'Bob', age: 25 });
});

it('should return the only element for single-element arrays', () => {
    expect(minBy([42])).toBe(42);
});

it('should work with negative numbers', () => {
    expect(minBy([-5, -2, -8, -1])).toBe(-8);
});

it('should handle arrays with duplicate minimum values', () => {
    expect(minBy([1, 5, 3, 5, 2])).toBe(1);
});

it('should work with custom comparison function for strings which uses order as tie break', () => {
    const strings = ['apple', 'banana', 'cherry', 'date'];
    expect(minBy(strings, str => str.length)).toBe('date');
});
