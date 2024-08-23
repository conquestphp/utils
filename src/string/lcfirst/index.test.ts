import { it, expect } from "vitest";
import { lcfirst } from '.'

it('can convert first character to lowercase', () => {
    expect(lcfirst('Hello')).toBe('hello');
    expect(lcfirst('WORLD')).toBe('wORLD');
})