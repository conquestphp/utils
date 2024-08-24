import { expect, it } from 'vitest'
import { mode } from '.'

it('should return the mode of the numbers', () => {
	expect(mode(1, 2, 3, 4, 1)).toBe(1)
})

it('should return undefined if no numbers are provided', () => {
	expect(mode()).toBeUndefined()
})

it('should return the first value if all numbers occur evenly', () => {
	expect(mode(1, 2, 3, 4, 5)).toBe(1)
})