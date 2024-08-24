import { expect, it } from 'vitest'
import { reverse } from '.'

it('should reverse an array', () => {
	expect(reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
})

it('should reverse an empty array', () => {
	expect(reverse([])).toEqual([])
})