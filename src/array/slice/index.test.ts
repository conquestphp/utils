import { expect, it } from 'vitest'
import { slice } from '.'

it('should slice an array', () => {
	expect(slice([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5])
})

it('should be empty if n is greater than the length of the array', () => {
	expect(slice([1, 2, 3, 4, 5], 10)).toEqual([])
})