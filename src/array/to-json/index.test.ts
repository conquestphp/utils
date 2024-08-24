import { expect, it } from 'vitest'
import { toJson } from '.'

it('should convert an array to a JSON string', () => {
	expect(toJson([1, 2, 3])).toEqual('[1,2,3]')
})

it('should convert an array with objects to a JSON string', () => {
	expect(toJson([{ a: 1 }, { b: 2 }, { c: 3 }])).toEqual('[{"a":1},{"b":2},{"c":3}]')
})