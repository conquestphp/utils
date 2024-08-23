import { it, expect } from "vitest";
import { containsAll } from '.'

it('can check if string contains all substrings', () => {
    expect(containsAll('Hello World', ['Hello', 'World'])).toBe(true);
    expect(containsAll('Hello World', ['hello', 'world'], true)).toBe(false);
})