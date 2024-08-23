import { expect, it } from 'vitest'
import { each } from '.'

it('should iterate over an array', () => {
	expect(each([1, 2, 3, 4, 5], (x) => x * 2)).toEqual([2, 4, 6, 8, 10])
})

it('should iterate over an empty array', () => {
	expect(each([], (x) => x * 2)).toEqual([])
})