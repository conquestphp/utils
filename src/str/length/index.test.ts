import { it, expect } from "vitest";
import { length } from '.'

it('can get string length', () => {
    expect(length('Hello')).toBe(5);
    expect(length('')).toBe(0);
})