import { expect, it } from 'vitest'
import { sortBy } from '.'

it('should sort an array by a key', () => {
	expect(sortBy([{ a: 3 }, { a: 1 }, { a: 2 }], 'a')).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }])
})

it('should not sort if key is not present', () => {
	expect(sortBy([{ a: 3 }, { b: 1 }, { c: 2 }], 'a')).toEqual([{ a: 3 }, { b: 1 }, { c: 2 }])
})

it('should be empty if the array is empty', () => {
	expect(sortBy([], 'a')).toEqual([])
})


