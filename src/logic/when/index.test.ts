import { it, expect } from 'vitest'
import { when } from '.'

it('can check if a value is null', () => {
	expect(when(true, () => 'true', () => 'false')).toBe('true')
})