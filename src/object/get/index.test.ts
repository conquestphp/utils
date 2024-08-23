import { it, expect } from 'vitest';
import { get } from '.'

it('returns the value at the specified path in an object', () => {
    const obj = { a: { b: { c: 1 } } };
    expect(get('a.b.c', obj)).toEqual(1);
    expect(get('a.b.c.d', obj)).toEqual(undefined);
})

it('should handle arrays of objects', () => {
    const arr = [
        { a: { b: { c: 1 } } },
        { a: { b: { c: 2 } } },
        { a: { b: { c: 3 } } },
    ]
    expect(get('1.a.b.c', arr)).toEqual(2);
    expect(get('3.a.b.c', arr)).toEqual(undefined);
})
it('should be undefined for keys that do not exist', () => {
    const obj = { a: { b: { c: 1 } } };
    expect(get('a.b.c.d', obj)).toEqual(undefined);
    expect(get('a.d.c', [])).toEqual(undefined);
})

it('should be undefined when trying to index into a primitive', () => {
    const obj = 1;
    expect(get('a.b.c', obj)).toEqual(undefined);
})

it('should be undefined when trying to index into a nested primitive', () => {
    const obj = { a: 1 };
    expect(get('a.c', obj)).toEqual(undefined);
})

