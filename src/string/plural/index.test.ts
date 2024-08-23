import { it, expect } from "vitest";
import { plural } from '.'

it('can convert string to plural form', () => {
    expect(plural('car')).toBe('cars');
    expect(plural('baby')).toBe('babies');
    expect(plural('analyse')).toBe('analyses');
    expect(plural('babies')).toBe('babies');
})