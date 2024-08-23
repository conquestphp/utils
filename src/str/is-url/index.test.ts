import { it, expect } from "vitest";
import { isUrl } from '.'

it('can check if string is valid URL', () => {
    expect(isUrl('https://example.com')).toBe(true);
    expect(isUrl('not a url')).toBe(false);
})