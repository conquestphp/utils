import { it, expect } from "vitest";
import { exactly } from '.'

it('can check if strings are exactly the same', () => {
    expect(exactly('Hello', 'Hello')).toBe(true);
    expect(exactly('Hello', 'hello')).toBe(false);
})
