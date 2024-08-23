import { it, expect } from "vitest";
import { padRight } from '.'

it('can pad string on right side', () => {
    expect(padRight('Hello', 7)).toBe('Hello  ');
    expect(padRight('Hi', 4, '0')).toBe('Hi00');
})