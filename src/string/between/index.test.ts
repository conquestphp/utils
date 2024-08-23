import { it, expect } from "vitest";
import { between } from '.'

it('can get text between two strings', () => {
    expect(between('This is my name', 'This', 'name')).toBe(' is my ');
    expect(between('This is my name', 'That', 'name')).toBe('This is my name');
})
