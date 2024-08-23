import { expect, it } from 'vitest';
import { max } from '.';

it('should return the maximum number from a list of numbers', () => {
    expect(max(1, 2, 3, 4, 5)).toBe(5);
    expect(max(5, 4, 3, 2, 1)).toBe(5);
    expect(max(-1, -2, -3, -4, -5)).toBe(-1);
});

it('should work with floating point numbers', () => {
    expect(max(1.1, 1.2, 1.3)).toBe(1.3);
    expect(max(0.1, 0.2, 0.3)).toBe(0.3);
});

it('should return the only element if only one is provided', () => {
    expect(max(42)).toBe(42);
});

it('should work with strings (lexicographic comparison)', () => {
    expect(max('a', 'b', 'c')).toBe('c');
    expect(max('apple', 'banana', 'cherry')).toBe('cherry');
});

it('should work with custom objects that implement comparison', () => {
    const obj1 = { value: 1, valueOf: () => 1 };
    const obj2 = { value: 2, valueOf: () => 2 };
    const obj3 = { value: 3, valueOf: () => 3 };
    expect(max(obj1, obj2, obj3)).toBe(obj3);
});