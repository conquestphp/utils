import { expect, it } from 'vitest'
import { reduce } from '.'

it('should return the reduced value', () => {
	expect(reduce([1, 2, 3, 4, 5], (acc, curr) => acc + curr, 0)).toBe(15)
})