import { it, expect } from 'vitest';
import { isString, isNumber, isNull, blank } from '../src';

it('can check if a value is a string', () => {
    expect(isString('1')).toBe(true)
    expect(isString(1)).toBe(false)
})

it('can check if a value is a number', () => {
    expect(isNumber(1)).toBe(true)
    expect(isNumber('1')).toBe(true)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber({})).toBe(false)
})

it('can check if a value is null', () => {
    expect(isNull(null)).toBe(true)
    expect(isNull(undefined)).toBe(true)
    expect(isNull(0)).toBe(false)
    expect(isNull('')).toBe(false)
    expect(isNull({})).toBe(false)
})

it('can check if a value is blank', () => {
    expect(blank(null)).toBe(true)
    expect(blank(undefined)).toBe(true)
    expect(blank('')).toBe(true)
    expect(blank({})).toBe(true)
    expect(blank([])).toBe(true)
    expect(blank(0)).toBe(false)
})