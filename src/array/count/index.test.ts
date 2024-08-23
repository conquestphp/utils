import { expect, it } from 'vitest'
import { count } from '.'

it('should count the number of elements in an array', () => {
	expect(count([1, 2, 3, 4, 5])).toEqual(5)
})

it('should count the number of elements in an empty array', () => {
	expect(count([])).toEqual(0)
})

it('should count the number of elements in an array with nested arrays', () => {
	expect(count([1, [2, [3, 4], 5]])).toEqual(2)
})