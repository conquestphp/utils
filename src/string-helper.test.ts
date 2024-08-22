import { str } from './string-helper';
import { it, expect } from 'vitest'

    it('should chain methods and return correct result', () => {
    const result = str(' Hello, World ')
        .trim()
        .lower()
        .replace('world', 'TypeScript')
        .append('!')
        .title()
        .value();

    expect(result).toBe('Hello, TypeScript!');
});

it('should handle type coercion', () => {
    const stringable = str('42');
    expect(stringable + '').toBe('42');
    expect(`${stringable}`).toBe('42');
    expect(stringable.toString()).toBe('42');
    expect(stringable.value()).toBe('42');
});

it('should work with various methods', () => {
    expect(str('hello').upper().value()).toBe('HELLO');
    expect(str('Hello').contains('ell')).toBe(true);
    expect(str('hello world').words(1).value()).toBe('hello...');
    expect(str('snake_case').camel().value()).toBe('snakeCase');
});
