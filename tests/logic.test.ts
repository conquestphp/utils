import { it, expect } from 'vitest';
import * as l from '../src/logic';

it('can check if a value is a string', () => {
    expect(l.isString('1')).toBe(true)
    expect(l.isString(1)).toBe(false)
})

it('can check if a value is a number', () => {
    expect(l.isNumber(1)).toBe(true)
    expect(l.isNumber('1')).toBe(true)
    expect(l.isNumber(null)).toBe(false)
    expect(l.isNumber(undefined)).toBe(false)
    expect(l.isNumber({})).toBe(false)
})

it('can check if a value is null', () => {
    expect(l.isNull(null)).toBe(true)
    expect(l.isNull(undefined)).toBe(true)
    expect(l.isNull(0)).toBe(false)
    expect(l.isNull('')).toBe(false)
    expect(l.isNull({})).toBe(false)
})

it('can check if a value is blank', () => {
    expect(l.isEmpty(null)).toBe(true)
    expect(l.isEmpty(undefined)).toBe(true)
    expect(l.isEmpty('')).toBe(true)
    expect(l.isEmpty({})).toBe(true)
    expect(l.isEmpty([])).toBe(true)
    expect(l.isEmpty(0)).toBe(false)
})

it('can pipe through multiple functions', () => {
    const upper = (s: string) => s.toUpperCase();
    const reverse = (s: string) => s.split('').reverse().join('');
    expect(l.pipe('hello', upper, reverse)).toBe('OLLEH');
})