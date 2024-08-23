import { it, expect } from "vitest";
import { slug } from '.'

it('can convert string to slug', () => {
    expect(slug('Hello World')).toBe('hello-world');
    expect(slug('Hello, World!')).toBe('hello-world');
})