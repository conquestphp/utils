import { it, expect } from "vitest";
import { ucsplit } from '.'

it('can split string on uppercase characters', () => {
    expect(ucsplit('fooBar')).toEqual(['foo', 'Bar']);
    expect(ucsplit('FooBar')).toEqual(['Foo', 'Bar']);
})