import { expect, it } from 'vitest'
import { implode } from '.'

it('should return a string with the items of the array separated by the separator', () => {
	expect(implode([1, 2, 3])).toBe('1, 2, 3')
})