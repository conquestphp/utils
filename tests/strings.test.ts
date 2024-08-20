import { it, expect } from "vitest";
import * as s from '../src/strings'

it('can separate after a string', () => {
    expect(s.after('This is my name', 'This is')).toBe(' my name');
})

it('does not separate after if string does not match', () => {
    expect(s.after('This is my name', 'Miss')).toBe('This is my name');
})

it('can separate after last a string', () => {
    expect(s.afterLast('App/Http/Controllers/Controller', '/')).toBe('Controller');
})

it('does not separate after last if string does not match', () => {
    expect(s.afterLast('App/Http/Controllers/Controller', '\\')).toBe('App/Http/Controllers/Controller');
})

it('can append', () => {
    expect(s.append('Hello', ' World')).toBe('Hello World');
})

it('can separate before a string', () => {
    expect(s.before('This is my name', 'my name')).toBe('This is ');
})

it('does not separate before if string does not match', () => {
    expect(s.before('This is my name', '.')).toBe('This is my name');
})

it('can separate before last a string', () => {
    expect(s.beforeLast('This is my name', 'is')).toBe('This ');
})

it('does not separate before last if string does not match', () => {
    expect(s.beforeLast('This is my name', 'isn\'t')).toBe('This is my name');
})
