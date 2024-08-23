import { it, expect } from "vitest";
import { after } from '.'

it('can separate after a string', () => {
    expect(after('This is my name', 'This is')).toBe(' my name');
    expect(after('This is my name', 'Miss')).toBe('This is my name');
})