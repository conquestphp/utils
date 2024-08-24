import { expect, it } from 'vitest'
import { prev } from '.'

it('should return the previous element of the array', () => {
	expect(prev([1, 2, 3, 4, 5], 2)).toEqual(2)
})

it('should return undefined if the index is out of bounds', () => {
	expect(prev([1, 2, 3, 4, 5], 6)).toBeUndefined()
})

it('should return undefined if the array is empty', () => {
	expect(prev([], 0)).toBeUndefined()
})