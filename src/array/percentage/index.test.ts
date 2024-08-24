import { expect, it } from 'vitest'
import { percentage } from '.'

it('should return the percentage of items that match the predicate', () => {
	expect(percentage([1, 2, 3, 4, 5], (item) => item % 2 === 0)).toEqual(40)
})

it('should return 0 if the array is empty', () => {
	expect(percentage([], (item) => item % 2 === 0)).toEqual(0)
})

it('should return 100 if all items match the predicate', () => {
	expect(percentage([1, 2, 3, 4, 5], (item) => true)).toEqual(100)
})