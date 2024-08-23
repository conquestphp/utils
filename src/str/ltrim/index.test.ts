import { it, expect } from "vitest";
import { ltrim } from '.'

it('can trim whitespace from left', () => {
    expect(ltrim('  Conquest  ')).toBe('Conquest  ');
})