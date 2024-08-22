import { it, expect } from 'vitest';
import * as o from '../src/objects';

it('can expand dot notation', () => {
    expect(o.dotNotation('a.b.c')).toEqual(['a', 'b', 'c']);
    expect(o.dotNotation('a.0.b.c')).toEqual(['a', 0, 'b', 'c']);
})

it('can use dot notation to access nested objects', () => {
    const obj = { a: { b: { c: 1 } } };
    expect(o.get('a.b.c', obj)).toEqual(1);

    const arr = [
        { a: { b: { c: 1 } } },
        { a: { b: { c: 2 } } },
        { a: { b: { c: 3 } } },
    ]
    expect(o.get('1.a.b.c', arr)).toEqual(2);

    expect(o.get('a.b.c', arr)).toEqual(null);
})
