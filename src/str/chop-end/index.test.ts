import { it, expect } from "vitest";
import { chopEnd } from '.'

it('can chop string from end', () => {
    expect(chopEnd('Hello World', ' World')).toBe('Hello');
    expect(chopEnd('Hello World', [' Earth', ' World'])).toBe('Hello');
})
