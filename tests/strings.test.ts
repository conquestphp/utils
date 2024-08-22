import { it, expect } from "vitest";
import * as s from '../src/strings'

it('can separate after a string', () => {
    expect(s.after('This is my name', 'This is')).toBe(' my name');
    expect(s.after('This is my name', 'Miss')).toBe('This is my name');
})

it('can separate after last instance of a string', () => {
    expect(s.afterLast('App/Http/Controllers/Controller', '/')).toBe('Controller');
    expect(s.afterLast('App/Http/Controllers/Controller', '\\')).toBe('App/Http/Controllers/Controller');
})

it('can append', () => {
    expect(s.append('Hello', ' World')).toBe('Hello World');
})

it('can separate before a string', () => {
    expect(s.before('This is my name', 'my name')).toBe('This is ');
    expect(s.before('This is my name', '.')).toBe('This is my name');
})

it('can separate before last instance of a string', () => {
    expect(s.beforeLast('This is my name', 'is')).toBe('This ');
    expect(s.beforeLast('This is my name', 'isn\'t')).toBe('This is my name');
})

it('can get text between two strings', () => {
    expect(s.between('This is my name', 'This', 'name')).toBe(' is my ');
    expect(s.between('This is my name', 'That', 'name')).toBe('This is my name');
})


it('can convert string to camelCase', () => {
    expect(s.camel('foo-bar')).toBe('fooBar');
    expect(s.camel('foo_bar')).toBe('fooBar');
})

it('can get character at index', () => {
    expect(s.charAt('Hello', 1)).toBe('e');
})

it('can chop string from start', () => {
    expect(s.chopStart('https://laravel.com', 'https://')).toBe('laravel.com');
    expect(s.chopStart('https://laravel.com', ['https://', 'http://'])).toBe('laravel.com');
    expect(s.chopStart('https://laravel.com', ['.com'])).toBe('https://laravel.com');
})

it('can chop string from end', () => {
    expect(s.chopEnd('Hello World', ' World')).toBe('Hello');
    expect(s.chopEnd('Hello World', [' Earth', ' World'])).toBe('Hello');
})

it('can check if string contains substring', () => {
    expect(s.contains('Hello World', 'World')).toBe(true);
    expect(s.contains('Hello World', 'world', true)).toBe(false);
})

it('can check if string contains all substrings', () => {
    expect(s.containsAll('Hello World', ['Hello', 'World'])).toBe(true);
    expect(s.containsAll('Hello World', ['hello', 'world'], true)).toBe(false);
})

it('can check if string ends with substring', () => {
    expect(s.endsWith('Hello World', 'World')).toBe(true);
    expect(s.endsWith('Hello World', ['Earth', 'World'])).toBe(true);
})

it('can check if strings are exactly the same', () => {
    expect(s.exactly('Hello', 'Hello')).toBe(true);
    expect(s.exactly('Hello', 'hello')).toBe(false);
})

it('can explode string into array', () => {
    expect(s.explode('Hello World', ' ')).toEqual(['Hello', 'World']);
})

it('can finish string with a given substring', () => {
    expect(s.finish('Hello', '!')).toBe('Hello!');
    expect(s.finish('Hello!', '!')).toBe('Hello!');
})

it('can convert string to headline case', () => {
    expect(s.headline('steve_jobs')).toBe('Steve Jobs');
    expect(s.headline('EmailNotificationSent')).toBe('Email Notification Sent');
})

it('can match string against pattern with wildcards', () => {
    expect(s.is('foo/bar/baz', 'foo/*')).toBe(true);
    expect(s.is('foo/bar/baz', 'baz/*')).toBe(false);
})

it('can check if string is empty', () => {
    expect(s.isEmpty('')).toBe(true);
    expect(s.isEmpty('Hello')).toBe(false);
})

it('can check if string is not empty', () => {
    expect(s.isNotEmpty('Hello')).toBe(true);
    expect(s.isNotEmpty('')).toBe(false);
})

it('can check if string is valid JSON', () => {
    expect(s.isJson('{"name": "John"}')).toBe(true);
    expect(s.isJson('Invalid JSON')).toBe(false);
})

it('can check if string is valid URL', () => {
    expect(s.isUrl('https://example.com')).toBe(true);
    expect(s.isUrl('not a url')).toBe(false);
})

it('can check if string is valid email', () => {
    expect(s.isEmail('user@example.com')).toBe(true);
    expect(s.isEmail('invalid-email')).toBe(false);
})

it('can convert string to kebab-case', () => {
    expect(s.kebab('fooBar')).toBe('foo-bar');
    expect(s.kebab('foo_bar')).toBe('foo-bar');
})

it('can convert first character to lowercase', () => {
    expect(s.lcfirst('Hello')).toBe('hello');
    expect(s.lcfirst('WORLD')).toBe('wORLD');
})

it('can get string length', () => {
    expect(s.length('Hello')).toBe(5);
    expect(s.length('')).toBe(0);
})

it('can limit string length', () => {
    expect(s.limit('Hello World', 5)).toBe('Hello');
    expect(s.limit('Hi', 5)).toBe('Hi');
})

it('can convert string to lowercase', () => {
    expect(s.lower('HELLO')).toBe('hello');
    expect(s.lower('Hello World')).toBe('hello world');
})

it('can mask part of a string', () => {
    expect(s.mask('1234567890', '*', 4)).toBe('****567890');
    expect(s.mask('1234567890', '*', 4, 2)).toBe('****56****');
})

it('can pad string on both sides', () => {
    expect(s.pad('Hello', 9)).toBe('  Hello  ');
    expect(s.pad('Hi', 5, '-')).toBe('-Hi--');
})

it('can pad string on left side', () => {
    expect(s.padLeft('Hello', 7)).toBe('  Hello');
    expect(s.padLeft('Hi', 4, '0')).toBe('00Hi');
})

it('can pad string on right side', () => {
    expect(s.padRight('Hello', 7)).toBe('Hello  ');
    expect(s.padRight('Hi', 4, '0')).toBe('Hi00');
})

it('can pipe string through multiple functions', () => {
    const upper = (s: string) => s.toUpperCase();
    const reverse = (s: string) => s.split('').reverse().join('');
    expect(s.pipe('hello', upper, reverse)).toBe('OLLEH');
})

it('can convert string to plural form', () => {
    expect(s.plural('car')).toBe('cars');
    expect(s.plural('baby')).toBe('babies');
    expect(s.plural('analyse')).toBe('analyses');
    expect(s.plural('babies')).toBe('babies');
})

it('can prepend string', () => {
    expect(s.prepend('World', 'Hello ')).toBe('Hello World');
})

it('can remove substring', () => {
    expect(s.remove('Hello World', 'llo')).toBe('He World');
})

it('can repeat string', () => {
    expect(s.repeat('Hi', 3)).toBe('HiHiHi');
})

it('can replace substring', () => {
    expect(s.replace('Hello World', 'World', 'Universe')).toBe('Hello Universe');
})

it('can replace multiple substrings', () => {
    expect(s.replaceArray('The quick brown fox', ['quick', 'brown'], 'lazy')).toBe('The lazy lazy fox');
})

it('can replace substring at the end', () => {
    expect(s.replaceEnd('Hello World', 'World', 'Universe')).toBe('Hello Universe');
    expect(s.replaceEnd('Hello World', 'Hello', 'Hi')).toBe('Hello World');
})

it('can replace first occurrence of substring', () => {
    expect(s.replaceFirst('Hello Hello World', 'Hello', 'Hi')).toBe('Hi Hello World');
})

it('can replace last occurrence of substring', () => {
    expect(s.replaceLast('Hello Hello World', 'Hello', 'Hi')).toBe('Hello Hi World');
})

it('can replace substring at the start', () => {
    expect(s.replaceStart('Hello World', 'Hello', 'Hi')).toBe('Hi World');
    expect(s.replaceStart('Hello World', 'World', 'Universe')).toBe('Hello World');
})

it('can convert string to singular form', () => {
    expect(s.singular('cars')).toBe('car');
    expect(s.singular('babies')).toBe('baby');
    expect(s.singular('analyses')).toBe('analyse');
})

it('can convert string to slug', () => {
    expect(s.slug('Hello World')).toBe('hello-world');
    expect(s.slug('Hello, World!')).toBe('hello-world');
})

it('can convert string to snake_case', () => {
    expect(s.snake('helloWorld')).toBe('hello_world');
    expect(s.snake('hello-world')).toBe('hello_world');
})

it('can remove extra whitespace', () => {
    expect(s.squish('  Hello   World  ')).toBe('Hello World');
})

it('can ensure string starts with given substring', () => {
    expect(s.start('World', 'Hello ')).toBe('Hello World');
    expect(s.start('Hello World', 'Hello ')).toBe('Hello World');
})

it('can check if string starts with substring', () => {
    expect(s.startsWith('Hello World', 'Hello')).toBe(true);
    expect(s.startsWith('Hello World', ['Hi', 'Hello'])).toBe(true);
})

it('can convert string to StudlyCase', () => {
    expect(s.studly('hello_world')).toBe('HelloWorld');
    expect(s.studly('hello-world')).toBe('HelloWorld');
})

it('can get substring', () => {
    expect(s.substr('Hello World', 6)).toBe('World');
    expect(s.substr('Hello World', 0, 5)).toBe('Hello');
})

it('can take first n characters', () => {
    expect(s.take('Hello World', 5)).toBe('Hello');
})

it('can test string against regex pattern', () => {
    expect(s.test('Hello123', '^[A-Za-z]+\\d+$')).toBe(true);
    expect(s.test('Hello', '^\\d+$')).toBe(false);
})

it('can convert string to title case', () => {
    expect(s.title('hello_world')).toBe('Hello World');
    expect(s.title('TypeScript')).toBe('TypeScript');
    expect(s.title('a nice title uses the correct case')).toBe('A Nice Title Uses The Correct Case');
})

it('can trim whitespace', () => {
    expect(s.trim('  Conquest  ')).toBe('Conquest');
})

it('can trim whitespace from left', () => {
    expect(s.ltrim('  Conquest  ')).toBe('Conquest  ');
})

it('can trim whitespace from right', () => {
    expect(s.rtrim('  Conquest  ')).toBe('  Conquest');
})

it('can convert first character to uppercase', () => {
    expect(s.ucfirst('foo bar')).toBe('Foo bar');
    expect(s.ucfirst('FOO BAR')).toBe('FOO BAR');
})

it('can split string on uppercase characters', () => {
    expect(s.ucsplit('fooBar')).toEqual(['foo', 'Bar']);
    expect(s.ucsplit('FooBar')).toEqual(['Foo', 'Bar']);
})

it('can unwrap string', () => {
    expect(s.unwrap('{Conquest}', '{', '}')).toBe('Conquest');
    expect(s.unwrap('Conquest', '{', '}')).toBe('Conquest');
})

it('can convert string to uppercase', () => {
    expect(s.upper('conquest')).toBe('CONQUEST');
    expect(s.upper('Conquest')).toBe('CONQUEST');
})

it('can count words in string', () => {
    expect(s.wordCount('Hello, World')).toBe(2);
    expect(s.wordCount('This is a test')).toBe(4);
})

it('can limit words in string', () => {
    expect(s.words('Perfectly balanced, as all things should be.', 3, '>>>')).toBe('Perfectly balanced, as>>>');
    expect(s.words('Conquest', 3)).toBe('Conquest');
})