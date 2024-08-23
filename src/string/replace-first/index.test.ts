import { it, expect } from "vitest";
import { replaceFirst } from '.'

it('can replace first occurrence of substring', () => {
    expect(replaceFirst('Hello Hello World', 'Hello', 'Hi')).toBe('Hi Hello World');
})