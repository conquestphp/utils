import { it, expect } from "vitest";
import { words } from '.'

it('can limit words in string', () => {
    expect(words('Perfectly balanced, as all things should be.', 3, '>>>')).toBe('Perfectly balanced, as>>>');
    expect(words('Conquest', 3)).toBe('Conquest');
})