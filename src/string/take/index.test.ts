import { it, expect } from "vitest";
import { take } from '.'

it('can take first n characters', () => {
    expect(take('Hello World', 5)).toBe('Hello');
})