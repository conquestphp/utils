import { it, expect } from 'vitest';
import { clamp } from '.';

it('should clamp numbers within the given range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
});