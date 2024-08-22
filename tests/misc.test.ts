import { it, expect } from 'vitest';
import * as m from '../src/misc';

it('can check if a value is a string', () => {
    expect(m.isString('1')).toBe(true)
    expect(m.isString(1)).toBe(false)
})

it('can check if a value is a number', () => {
    expect(m.isNumber(1)).toBe(true)
    expect(m.isNumber('1')).toBe(true)
    expect(m.isNumber(null)).toBe(false)
    expect(m.isNumber(undefined)).toBe(false)
    expect(m.isNumber({})).toBe(false)
})

it('can check if a value is null', () => {
    expect(m.isNull(null)).toBe(true)
    expect(m.isNull(undefined)).toBe(true)
    expect(m.isNull(0)).toBe(false)
    expect(m.isNull('')).toBe(false)
    expect(m.isNull({})).toBe(false)
})

it('can check if a value is blank', () => {
    expect(m.blank(null)).toBe(true)
    expect(m.blank(undefined)).toBe(true)
    expect(m.blank('')).toBe(true)
    expect(m.blank({})).toBe(true)
    expect(m.blank([])).toBe(true)
    expect(m.blank(0)).toBe(false)
})