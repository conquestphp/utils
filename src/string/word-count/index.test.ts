import { it, expect } from "vitest";
import { wordCount } from '.'

it('can count words in string', () => {
    expect(wordCount('Hello, World')).toBe(2);
    expect(wordCount('This is a test')).toBe(4);
})