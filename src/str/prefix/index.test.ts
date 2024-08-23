import { it, expect } from "vitest";
import { prefix } from '.'

it('can prefix string', () => {
    expect(prefix('World', 'Hello ')).toBe('Hello World');
})