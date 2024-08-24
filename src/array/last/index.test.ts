import { expect, it } from 'vitest'
import { last } from '.'

it('should return the last item of the array', () => {
	expect(last([1, 2, 3])).toBe(3)
})

it('should return undefined for an empty array', () => {
	expect(last([])).toBeUndefined()
})