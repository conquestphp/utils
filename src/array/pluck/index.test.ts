import { expect, it } from 'vitest'
import { pluck } from '.'

it('should return an array of values from the given key', () => {
	expect(pluck([{ a: 1 }, { a: 2 }, { a: 3 }], 'a')).toEqual([1, 2, 3])
})

it('should return an empty array if the array is empty', () => {
	expect(pluck([], 'a')).toEqual([])
})

it('should return an empty array if the key does not exist', () => {
	expect(pluck([{ a: 1 }, { a: 2 }, { a: 3 }], 'b')).toEqual([])
})

it('should return an array of values from the given keys', () => {
	expect(pluck([{ a: 1, b: 2, c: 3 }, { a: 2, b: 3, c: 4 }, { a: 3, b: 4, c: 5 }], 'a', 'b')).toEqual([{a: 1, b: 2}, {a: 2, b: 3}, {a: 3, b: 4}])
})