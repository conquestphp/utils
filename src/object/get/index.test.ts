import { it, expect } from 'vitest';
import { get } from '.'

it('can use dot notation to access nested objects', () => {
    const obj = { a: { b: { c: 1 } } };
    expect(get('a.b.c', obj)).toEqual(1);
    expect(get('a.b.c.d', obj)).toEqual(undefined);

    const arr = [
        { a: { b: { c: 1 } } },
        { a: { b: { c: 2 } } },
        { a: { b: { c: 3 } } },
    ]
    expect(get('1.a.b.c', arr)).toEqual(2);

    expect(get('a.b.c', arr)).toEqual(undefined);
    expect(get('3.b.c', arr)).toEqual(undefined);
})

// it('can check if a key exists in an object', () => {
//     const obj = { a: { b: { c: 1 } } };
//     expect(o.isset('a.b.c', obj)).toBe(true);
//     expect(o.isset('a.b.c.d', obj)).toBe(false);
//     expect(o.isset('a', obj)).toBe(true);
// })