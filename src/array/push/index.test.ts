import { expect, it } from 'vitest'
import { push } from '.'

it('should add an item and returns the value', () => {
	expect(push([1, 2, 3, 4, 5], 6)).toEqual(6)
})

it('should modify the original array', () => {
	let arr = [1, 2, 3, 4, 5]
	push(arr, 6)
	expect(arr).toEqual([1, 2, 3, 4, 5, 6])
})