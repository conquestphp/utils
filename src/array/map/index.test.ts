import { expect, it } from 'vitest'
import { map } from '.'

it('should map the items of the array', () => {
	expect(map([1, 2, 3], (x) => x * 2)).toEqual([2, 4, 6])
})

it('should return an empty array if the input array is empty', () => {
	expect(map([], (x) => x * 2)).toEqual([])
})

it('should not modify the original array', () => {
	const original = [1, 2, 3]
	const mapped = map(original, (x) => x * 2)
	expect(original).toEqual([1, 2, 3])
	expect(mapped).toEqual([2, 4, 6])
})