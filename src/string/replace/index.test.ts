import { it, expect } from "vitest";
import { replace } from '.'

it('can replace substring', () => {
    expect(replace('Hello World', 'World', 'Universe')).toBe('Hello Universe');
})