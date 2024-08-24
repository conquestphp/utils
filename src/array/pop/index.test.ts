import { expect, it } from 'vitest'
import { pop } from '.'

it('should return the last element of the array', () => {
	expect(pop([1, 2, 3, 4, 5])).toEqual(5)
})

it('should return undefined if the array is empty', () => {
	expect(pop([])).toBeUndefined()
})

it('should modify the original array', () => {
	let arr = [1, 2, 3, 4, 5]
	pop(arr)
	expect(arr).toEqual([1, 2, 3, 4])
})

