import { it, expect } from "vitest";
import { contains } from '.'

it('can check if string contains substring', () => {
    expect(contains('Hello World', 'World')).toBe(true);
    expect(contains('Hello World', 'world', true)).toBe(false);
})