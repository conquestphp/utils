import { it, expect } from 'vitest'
import { when } from '.'

it('should return the result of the first function if the condition is primitive true', () => {
    expect(when(true, () => 'true', () => 'false')).toEqual('true')
})

it('should return the first function if the condition is functionally true', () => {
	expect(when(() => true, () => 'true', () => 'false')).toEqual('true')
})

it('should return the default if false', () => {
	expect(when(false, () => 'true', () => 'false')).toEqual('false')
})

it('should return the fallback value if the condition is not met', () => {
	expect(when(false, () => 'true', undefined, 'other')).toEqual('other')
})

it('accepts and parses a value', () => {
	expect(when((v: number) => v > 1, (v: number) => v * 2, () => 0, 2)).toEqual(4)
	expect(when((v: number) => v > 2, (v: number) => v * 2, () => 0, 2)).toEqual(0)
})