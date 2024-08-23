import { it, expect } from "vitest";
import { trim } from '.'

it('can trim whitespace', () => {
    expect(trim('  Conquest  ')).toBe('Conquest');
})