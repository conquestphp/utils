import { expect, it } from 'vitest'
import { reject } from '.'

it('should reject an array', () => {
	expect(reject([1, 2, 3, 4, 5], (x) => x % 2 === 0)).toEqual([1, 3, 5])
})

it('should reject an empty array', () => {
	expect(reject([], (x) => x % 2 === 0)).toEqual([])
})

it('can use the index', () => {
	expect(reject([1, 2, 3, 4, 5], (x, i) => i % 2 === 0)).toEqual([2, 4])
})