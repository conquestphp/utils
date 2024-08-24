import { expect, it } from 'vitest'
import { select } from '.'

it('should select an array', () => {
	expect(select([{ a: 1 }, { a: 2 }, { a: 3 }], 'a')).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }])
})

it('should select an array with multiple keys', () => {
	expect(select([{ a: 1, b: 2, c: 3 }, { a: 2, b: 3, c: 4 }, { a: 3, b: 4, c: 5 }], 'a', 'b')).toEqual([{ a: 1, b: 2 }, { a: 2, b: 3 }, { a: 3, b: 4 }])
})

it('should select an array with a key that does not exist', () => {
	expect(select([{ a: 1, b: 2, c: 3 }, { a: 2, b: 3, c: 4 }, { a: 3, b: 4, c: 5 }], 'a', 'b', 'd')).toEqual([{ a: 1, b: 2 }, { a: 2, b: 3 }, { a: 3, b: 4 }])
})