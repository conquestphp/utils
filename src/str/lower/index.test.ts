import { it, expect } from "vitest";
import { lower } from '.'

it('can convert string to lowercase', () => {
    expect(lower('HELLO')).toBe('hello');
    expect(lower('Hello World')).toBe('hello world');
})