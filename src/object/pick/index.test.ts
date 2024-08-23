import { expect, it } from 'vitest';
import { pick } from '.';

it('should pick specified keys from object', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    expect(pick(obj, 'b', 'd')).toEqual({ b: 2, d: 4 });
});

it('should return an empty object if no keys are specified', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj)).toEqual({});
});

it('should handle non-existent keys', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, 'c', 'd')).toEqual({});
});

it('should work with empty objects', () => {
    expect(pick({}, 'a', 'b')).toEqual({});
});

it('should handle various value types', () => {
    const obj = { a: 1, b: 'string', c: true, d: null, e: undefined, f: {} };
    expect(pick(obj, 'b', 'd', 'f')).toEqual({ b: 'string', d: null, f: {} });
});

it('should not modify the original object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    pick(obj, 'b');
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
});
