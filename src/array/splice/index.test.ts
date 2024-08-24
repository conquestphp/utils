import { expect, it } from 'vitest'
import { splice } from '.'

it('should splice an array', () => {
	expect(splice([1, 2, 3], 1, 1, 4)).toEqual([1, 4, 3])
})

it('should splice and delete items', () => {
	expect(splice([1, 2, 3], 1, 1)).toEqual([1, 3])
})

it('should splice and add items', () => {
	expect(splice([1, 2, 3], 1, 0, 4)).toEqual([1, 4, 2, 3])
})

