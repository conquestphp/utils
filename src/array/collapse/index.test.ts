import { expect, it } from 'vitest'
import { collapse } from '.'

it('should collapse an array', () => {
	expect(collapse([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

it('should collapse a deeply nested array', () => {
	expect(collapse([[1, [2, [3, 4], 5]], [6, [7, [8, 9], 10]]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

it('should collapse an empty array', () => {
	expect(collapse([])).toEqual([])
})