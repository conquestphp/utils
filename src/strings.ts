export const after = (source: string, target: string): string => {
    const i = source.indexOf(target)
    return i === -1 ? source : source.slice(i + target.length)
}

export const afterLast = (source: string, target: string): string => {
    const i = source.lastIndexOf(target)
    return i === -1 ? source : source.slice(i + target.length)
}

export const append = (source: string, target: string): string => source + target

export const before = (source: string, target: string) => {
    const i = source.indexOf(target)
    return i === -1 ? source : source.slice(0, i)
}

export const beforeLast = (source: string, target: string): string => {
    const i = source.lastIndexOf(target)
    return i === -1 ? source : source.slice(0, i)
}

export const between = (source: string, start: string, end: string): string => {
    const i = source.indexOf(start)
    if (i === -1) return source
    const j = source.indexOf(end, i + start.length)
    return j === -1 ? source : source.slice(i + start.length, j)
}

export const betweenLast = (source: string, start: string, end: string): string => {
    const i = source.lastIndexOf(start)
    if (i === -1) return source
    const j = source.lastIndexOf(end)
    return j === -1 ? source : source.slice(i + start.length, j)
}

export const camel = (source: string): string => {
    return source
        .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
        .replace(/[-_]/g, '')
}

export const charAt = (source: string, index: number): string => source.charAt(index)

export const chopStart = (source: string, target: string|string[]) => {
    const i = Array.isArray(target)
        ? target.reduce((i, t) => Math.max(i, source.indexOf(t)), -1)
        : source.indexOf(target)
    return i === -1 ? source : source.slice(i + target.length)
}

export const chopEnd = (source: string, target: string|string[]): string => {
    const i = Array.isArray(target)
        ? target.reduce((i, t) => Math.max(i, source.lastIndexOf(t)), -1)
        : source.lastIndexOf(target)
    return i === -1 ? source : source.slice(0, i)
}

export const contains = (source: string, target: string, caseSensitive: boolean = false): boolean => caseSensitive
        ? source.includes(target)
        : lower(source).includes(target.toLowerCase())

export const containsAll = (source: string, targets: string[], caseSensitive: boolean = false): boolean => {
    return targets.every(target => contains(source, target, caseSensitive))
}

export const endsWith = (source: string, target: string|string[]): boolean => Array.isArray(target)
        ? target.some(t => source.endsWith(t))
        : source.endsWith(target)

export const exactly = (source: string, target: string) => source === target

export const explode = (source: string, delimiter: string): string[] => source.split(delimiter)

export const finish = (source: string, target: string): string => source.endsWith(target) ? source : source + target

export const headline = (source: string): string => source
        .replace(/[-_]/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')

// Accepts wildcards
export const is = (source: string, target: string): boolean => (new RegExp(`^${target.replace(/\*/g, '.*')}$`)).test(source)

export const isEmpty = (source: string): boolean => source === ''

export const isNotEmpty = (source: string): boolean => source !== ''

export const isJson = (source: string): boolean => {
    try {
        JSON.parse(source)
        return true
    } catch {
        return false
    }
}

export const isUrl = (source: string): boolean => {
    try {
        new URL(source)
        return true
    } catch {
        return false
    }
}

export const isEmail = (source: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(source)

export const kebab = (source: string): string => source.replace(/[-_]/g, '-')

export const lcfirst = (source: string): string => source.charAt(0).toLowerCase() + source.slice(1)

export const length = (source: string): number => source.length

export const limit = (source: string, limit: number): string => source.slice(0, limit)

export const lower = (source: string): string => source.toLowerCase()

export const mask = (source: string, mask: string, show: number = 100, end: number = 0): string => source.slice(0, show).replace(/./g, mask) + source.slice(show, end)

export const pad = (source: string, length: number, pad: string = ' '): string => source.padStart((length - source.length) / 2 + source.length, pad).padEnd(length, pad)

export const padLeft = (source: string, length: number, pad: string = ' '): string => source.padStart(length, pad)

export const padRight = (source: string, length: number, pad: string = ' '): string => source.padEnd(length, pad)

export const pipe = (source: string, ...callbacks: Function[]): string => callbacks.reduce((source, callback) => callback(source), source)

export const plural = (source: string) => {
    if (source.endsWith('y')) {
        return source.slice(0, -1) + 'ies'
    }
    if (source.endsWith('s')) {
        return source + 'es'
    }
    return source + 's'
}

export const prepend = (source: string, target: string): string => target + source

export const remove = (source: string, target: string): string => source.replace(target, '')

export const repeat = (source: string, times: number): string => source.repeat(times)

export const replace = (source: string, target: string, replacement: string): string => source.replace(target, replacement)

export const replaceArray = (source: string, targets: string[], replacement: string): string => targets.reduce((source, target) => source.replace(target, replacement), source)

export const replaceEnd = (source: string, target: string, replacement: string): string => source.endsWith(target) ? source.replace(target, replacement) : source

export const replaceFirst = (source: string, target: string, replacement: string): string => source.replace(target, replacement)

export const replaceLast = (source: string, target: string, replacement: string): string => source.replace(new RegExp(target + '$'), replacement)

export const replaceStart = (source: string, target: string, replacement: string): string => source.startsWith(target) ? source.replace(target, replacement) : source

export const singular = (source: string) => {
    if (source.endsWith('ies')) {
        return source.slice(0, -3) + 'y'
    }
    if (source.endsWith('es')) {
        return source.slice(0, -2)
    }
    return source.slice(0, -1)
}

export const slug = (source: string): string => source
        .replace(/[^a-z0-9]+/gi, '-')
        .replace(/^-|-$/g, '')
        .toLowerCase()

export const snake = (source: string): string => source.replace(/[-_]/g, '_')

export const squish = (source: string): string => source.replace(/\s+/g, ' ')

export const start = (source: string, target: string): string => source.startsWith(target) ? source : target + source

export const startsWith = (source: string, target: string|string[]): boolean => Array.isArray(target)
        ? target.some(t => source.startsWith(t))
        : source.startsWith(target)

export const studly = (source: string): string => source
        .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
        .replace(/[-_]/g, '')
        .replace(/^(.)/, (_, c) => c.toUpperCase())

export const substr = (source: string, start: number, length: number = 0): string => source.substring(start, length)

export const take = (source: string, length: number): string => source.slice(0, length)

export const test = (source: string, pattern: string): boolean => (new RegExp(pattern)).test(source)

export const title = (source: string): string => source
        .replace(/[-_]/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/^(.)/, (_, c) => c.toUpperCase())

export const trim = (source: string): string => source.trim()

export const ltrim = (source: string): string => source.trimStart()

export const rtrim = (source: string): string => source.trimEnd()

export const ucfirst = (source: string): string => source.charAt(0).toUpperCase() + source.slice(1)

export const ucsplit = (source: string): string[] => source
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .split(/[-_ ]/)

export const unwrap = (source: string, prefix: string, suffix: string): string => source.startsWith(prefix) && source.endsWith(suffix)
        ? source.slice(prefix.length, -suffix.length)
        : source

export const upper = (source: string): string => source.toUpperCase()

export const wordCount = (source: string): number => source.split(/\s+/).length

export const words = (source: string, words: number, replacement: string = '...'): string => source.split(/\s+/)
    .slice(0, words)
    .join(' ') + replacement

/**
 * Class
 */
class Stringable extends Object.prototype {
    constructor(private value: string) {
        super()
    }

    after(target: string): Stringable {
        this.value = after(this.value, target)
        return this
    }

    afterLast(target: string): Stringable {
        this.value = afterLast(this.value, target)
        return this
    }

    append(target: string): Stringable {
        this.value = append(this.value, target)
        return this
    }

    before(target: string): Stringable {
        this.value = before(this.value, target)
        return this
    }

    beforeLast(target: string): Stringable {
        this.value = beforeLast(this.value, target)
        return this
    }

    between(start: string, end: string): Stringable {
        this.value = between(this.value, start, end)
        return this
    }

    betweenLast(start: string, end: string): Stringable {
        this.value = betweenLast(this.value, start, end)
        return this
    }

    camel(): Stringable {
        this.value = camel(this.value)
        return this
    }

    charAt(index: number): Stringable {
        this.value = charAt(this.value, index)
        return this
    }

    chopStart(target: string|string[]): Stringable {
        this.value = chopStart(this.value, target)
        return this
    }

    chopEnd(target: string|string[]): Stringable {
        this.value = chopEnd(this.value, target)
        return this
    }

    contains(target: string, caseSensitive: boolean = false): boolean {
        return contains(this.value, target, caseSensitive)
    }

    containsAll(targets: string[], caseSensitive: boolean = false): boolean {
        return containsAll(this.value, targets, caseSensitive)
    }

    endsWith(target: string|string[]): boolean {
        return endsWith(this.value, target)
    }

    exactly(target: string): boolean {
        return exactly(this.value, target)
    }

    explode(delimiter: string): string[] {
        return explode(this.value, delimiter)
    }

    finish(target: string): Stringable {
        this.value = finish(this.value, target)
        return this
    }

    headline(): Stringable {
        this.value = headline(this.value)
        return this
    }

    is(target: string): boolean {
        return is(this.value, target)
    }

    isEmpty(): boolean {
        return isEmpty(this.value)
    }

    isNotEmpty(): boolean {
        return isNotEmpty(this.value)
    }

    isJson(): boolean {
        return isJson(this.value)
    }

    isUrl(): boolean {
        return isUrl(this.value)
    }

    isEmail(): boolean {
        return isEmail(this.value)
    }

    kebab(): Stringable {
        this.value = kebab(this.value)
        return this
    }

    lcfirst(): Stringable {
        this.value = lcfirst(this.value)
        return this
    }

    length(): number {
        return length(this.value)
    }

    limit(limit: number): Stringable {
        this.value = limit(this.value, limit)
        return this
    }

    lower(): Stringable {
        this.value = lower(this.value)
        return this
    }

    mask(mask: string, show: number = 100, end: number = 0): Stringable {
        this.value = mask(this.value, mask, show, end)
        return this
    }

    pad(length: number, pad: string = ' '): Stringable {
        this.value = pad(this.value, length, pad)
        return this
    }

    padLeft(length: number, pad: string = ' '): Stringable {
        this.value = padLeft(this.value, length, pad)
        return this
    }

    padRight(length: number, pad: string = ' '): Stringable {
        this.value = padRight(this.value, length, pad)
        return this
    }

    pipe(...callbacks: Function[]): Stringable {
        this.value = pipe(this.value, ...callbacks)
        return this
    }

    plural(): Stringable {
        this.value = plural(this.value)
        return this
    }

    prepend(target: string): Stringable {
        this.value = prepend(this.value, target)
        return this
    }

    remove(target: string): Stringable {
        this.value = remove(this.value, target)
        return this
    }

    repeat(times: number): Stringable {
        this.value = repeat(this.value, times)
        return this
    }

    replace(target: string, replacement: string): Stringable {
        this.value = replace(this.value, target, replacement)
        return this
    }

    replaceArray(targets: string[], replacement: string): Stringable {
        this.value = replaceArray(this.value, targets, replacement)
        return this
    }

    replaceEnd(target: string, replacement: string): Stringable {
        this.value = replaceEnd(this.value, target, replacement)
        return this
    }

    replaceFirst(target: string, replacement: string): Stringable {
        this.value = replaceFirst(this.value, target, replacement)
        return this
    }

    replaceLast(target: string, replacement: string): Stringable {
        this.value = replaceLast(this.value, target, replacement)
        return this
    }

    replaceStart(target: string, replacement: string): Stringable {
        this.value = replaceStart(this.value, target, replacement)
        return this
    }

    singular(): Stringable {
        this.value = singular(this.value)
        return this
    }

    slug(): Stringable {
        this.value = slug(this.value)
        return this
    }

    snake(): Stringable {
        this.value = snake(this.value)
        return this
    }

    squish(): Stringable {
        this.value = squish(this.value)
        return this
    }

    start(target: string): Stringable {
        this.value = start(this.value, target)
        return this
    }

    startsWith(target: string|string[]): boolean {
        return startsWith(this.value, target)
    }

    studly(): Stringable {
        this.value = studly(this.value)
        return this
    }

    substr(start: number, length: number = 0): Stringable {
        this.value = substr(this.value, start, length)
        return this
    }

    take(length: number): Stringable {
        this.value = take(this.value, length)
        return this
    }

    test(pattern: string): boolean {
        return test(this.value, pattern)
    }

    title(): Stringable {
        this.value = title(this.value)
        return this
    }

    trim(): Stringable {
        this.value = trim(this.value)
        return this
    }

    ltrim(): Stringable {
        this.value = ltrim(this.value)
        return this
    }

    rtrim(): Stringable {
        this.value = rtrim(this.value)
        return this
    }

    ucfirst(): Stringable {
        this.value = ucfirst(this.value)
        return this
    }

    ucsplit(): string[] {
        return ucsplit(this.value)
    }

    unwrap(prefix: string, suffix: string): Stringable {
        this.value = unwrap(this.value, prefix, suffix)
        return this
    }

    upper(): Stringable {
        this.value = upper(this.value)
        return this
    }

    wordCount(): number {
        return wordCount(this.value)
    }

    words(words: number, replacement: string = '...'): Stringable {
        this.value = words(this.value, words, replacement)
        return this
    }

    toString(): string {
        return this.value;
    }

    value(): string {
        return this.value;
    }

    // Implement Symbol.toPrimitive to handle different contexts
    [Symbol.toPrimitive](hint: string) {
        if (hint === "string" || hint === "default") {
            return this.toString();
        }
        return this.value();
    }  
}