import { it, expect } from 'vitest'
import { pipe } from '.'

it('can pipe through multiple functions', () => {
    const upper = (s: string) => s.toUpperCase();
    const reverse = (s: string) => s.split('').reverse().join('');
    expect(pipe('hello', upper, reverse)).toBe('OLLEH');
    const double = (n: number) => n * 2;
    expect(pipe(2, double, double)).toBe(8);
})