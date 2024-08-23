import { it, expect } from "vitest";
import { replaceStart } from '.'

it('can replace substring at the start', () => {
    expect(replaceStart('Hello World', 'Hello', 'Hi')).toBe('Hi World');
    expect(replaceStart('Hello World', 'World', 'Universe')).toBe('Hello World');
})