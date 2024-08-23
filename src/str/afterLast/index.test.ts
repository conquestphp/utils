import { it, expect } from "vitest";
import { afterLast } from '.'

it('can separate after last instance of a string', () => {
    expect(afterLast('App/Http/Controllers/Controller', '/')).toBe('Controller');
    expect(afterLast('App/Http/Controllers/Controller', '\\')).toBe('App/Http/Controllers/Controller');
})