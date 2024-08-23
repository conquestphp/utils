import { it, expect } from "vitest";
import { charAt } from '.'

it('can get character at index', () => {
    expect(charAt('Hello', 1)).toBe('e');
})