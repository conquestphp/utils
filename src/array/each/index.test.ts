import { expect, it } from 'vitest'
import { each } from '.'

it('should iterate over an array', () => {
	let result: number[] = []
	const arr = [1, 2, 3, 4, 5]
	each(arr, (x) => result.push(x * 2))
	expect(result).toEqual([2, 4, 6, 8, 10])
})

it('should iterate over an empty array', () => {
	let result: number[] = []
	const arr: number[] = []
	each(arr, (x) => result.push(x * 2))
	expect(result).toEqual([])
})