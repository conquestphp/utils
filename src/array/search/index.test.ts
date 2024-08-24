import { expect, it } from 'vitest'
import { search } from '.'

it('should search an array', () => {
	expect(search([1, 2, 3, 4, 5], 3)).toEqual(2)
})

it('should return false if the value is not found', () => {
	expect(search([1, 2, 3, 4, 5], 6)).toEqual(false)
})

it('should search an array with a key', () => {
	expect(search([{ a: 1 }, { a: 2 }, { a: 3 }], { a: 2 })).toEqual(1)
})



