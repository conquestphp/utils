export const after = (v: string, target: string): string => {
    const i = v.indexOf(target)
    return i === -1 ? v : v.slice(i + target.length)
}

export const afterLast = (v: string, target: string): string => {
    const i = v.lastIndexOf(target)
    return i === -1 ? v : v.slice(i + target.length)
}

export const append = (v: string, target: string): string => v + target

export const before = (v: string, target: string) => {
    const i = v.indexOf(target)
    return i === -1 ? v : v.slice(0, i)
}

export const beforeLast = (v: string, target: string): string => {
    const i = v.lastIndexOf(target)
    return i === -1 ? v : v.slice(0, i)
}

export const between = (v: string, start: string, end: string): string => {
    const startIndex = v.indexOf(start);
    if (startIndex === -1) return v;
    const endIndex = v.indexOf(end, startIndex + start.length);
    if (endIndex === -1) return v;
    return v.substring(startIndex + start.length, endIndex);
}

export const betweenLast = (v: string, start: string, end: string): string => {
    const startIndex = v.lastIndexOf(start);
    if (startIndex === -1) return v;
    const endIndex = v.indexOf(end, startIndex + start.length);
    if (endIndex === -1) return v;
    return v.substring(startIndex + start.length, endIndex);
}

export const camel = (v: string): string => {
    return v
        .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
        .replace(/[-_]/g, '')
}

export const charAt = (v: string, index: number): string => v.charAt(index)

export const chopStart = (v: string, target: string|string[]) => {
    const targets = Array.isArray(target) ? target : [target]
    for (const t of targets) {
        if (v.startsWith(t)) {
            return v.slice(t.length)
        }
    }
    return v
}


export const chopEnd = (v: string, target: string|string[]): string => {
    const i = Array.isArray(target)
        ? target.reduce((i, t) => Math.max(i, v.lastIndexOf(t)), -1)
        : v.lastIndexOf(target)
    return i === -1 ? v : v.slice(0, i)
}

export const contains = (v: string, target: string, caseSensitive: boolean = false): boolean => caseSensitive
        ? v.includes(target)
        : lower(v).includes(target.toLowerCase())

export const containsAll = (v: string, targets: string[], caseSensitive: boolean = false): boolean => {
    return targets.every(target => contains(v, target, caseSensitive))
}

export const endsWith = (v: string, target: string|string[]): boolean => Array.isArray(target)
        ? target.some(t => v.endsWith(t))
        : v.endsWith(target)

export const exactly = (v: string, target: string) => v === target

export const explode = (v: string, delimiter: string): string[] => v.split(delimiter)

export const finish = (v: string, target: string): string => v.endsWith(target) ? v : v + target

export const headline = (v: string): string => v
        .replace(/[-_]/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .toLowerCase()
        .replace(/\b\w/g, c => c.toUpperCase())

// Accepts wildcards
export const is = (v: string, target: string): boolean => (new RegExp(`^${target.replace(/\*/g, '.*')}$`)).test(v)

export const isEmpty = (v: string): boolean => v === ''

export const isNotEmpty = (v: string): boolean => v !== ''

export const isJson = (v: string): boolean => {
    try {
        JSON.parse(v)
        return true
    } catch {
        return false
    }
}

export const isUrl = (v: string): boolean => {
    try {
        new URL(v)
        return true
    } catch {
        return false
    }
}

export const isEmail = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export const kebab = (v: string): string => v
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()

export const lcfirst = (v: string): string => v.charAt(0).toLowerCase() + v.slice(1)

export const length = (v: string): number => v.length

export const limit = (v: string, limit: number): string => v.slice(0, limit)

export const lower = (v: string): string => v.toLowerCase()

export const mask = (v: string, mask: string = '*', show: number = 0, end: number = 0): string => {
    if (show + end >= v.length) {
        return v;
    }
    const maskedLength = v.length - show - end;
    const maskedPart = mask.repeat(maskedLength);
    return maskedPart + v.slice(maskedLength, v.length - end) + v.slice(v.length - end);
}

export const pad = (v: string, length: number, pad: string = ' '): string => v.padStart((length - v.length) / 2 + v.length, pad).padEnd(length, pad)

export const padLeft = (v: string, length: number, pad: string = ' '): string => v.padStart(length, pad)

export const padRight = (v: string, length: number, pad: string = ' '): string => v.padEnd(length, pad)

export const pipe = (v: string, ...callbacks: Function[]): string => callbacks.reduce((v, callback) => callback(v), v)

export const plural = (v: string): string => {
    const rules: [RegExp, string][] = [
        [/(?:s|x|z|ch|sh)$/i, '$&es'],
        [/([^aeiou])y$/i, '$1ies'],
        [/([aeiou]y)$/i, '$1s'],
        [/(?:([^f])fe|([lr])f)$/i, '$1$2ves'],
        [/sis$/i, 'ses'],
        [/(us)$/i, '$1es'],
        [/(on)$/i, '$1a'],
        [/(um)$/i, '$1a'],
        [/(is)$/i, 'es'],
        [/([^s])$/i, '$1s']
    ];

    for (const [regex, replacement] of rules) {
        if (regex.test(v)) {
            return v.replace(regex, replacement);
        }
    }

    return v;
}

export const prepend = (v: string, target: string): string => target + v

export const remove = (v: string, target: string): string => v.replace(target, '')

export const repeat = (v: string, times: number): string => v.repeat(times)

export const replace = (v: string, target: string, replacement: string): string => v.replace(target, replacement)

export const replaceArray = (v: string, targets: string[], replacement: string): string => targets.reduce((v, target) => v.replace(target, replacement), v)

export const replaceEnd = (v: string, target: string, replacement: string): string => v.endsWith(target) ? v.replace(target, replacement) : v

export const replaceFirst = (v: string, target: string, replacement: string): string => v.replace(target, replacement)

export const replaceLast = (v: string, target: string, replacement: string): string => {
    const index = v.lastIndexOf(target);
    if (index === -1) return v;
    return v.slice(0, index) + replacement + v.slice(index + target.length);
}

export const replaceStart = (v: string, target: string, replacement: string): string => v.startsWith(target) ? v.replace(target, replacement) : v

export const singular = (v: string): string => {
    const rules: [RegExp, string][] = [
        [/ies$/i, 'y'],
        [/([^aeiou])ies$/i, '$1y'],
        [/(x|ch|ss|sh)es$/i, '$1'],
        [/([^s])s$/i, '$1'],
        [/^(.+)$/i, '$1']
    ];
    return rules.reduce((result, [regex, replacement]) => 
        result.replace(regex, replacement), v);
}

export const slug = (v: string): string => v
        .replace(/[^a-z0-9]+/gi, '-')
        .replace(/^-|-$/g, '')
        .toLowerCase()

export const snake = (v: string): string => v
    .replace(/\s+/g, '_')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[-_]+/g, '_')
    .toLowerCase()

export const squish = (v: string): string => v.trim().replace(/\s+/g, ' ')

export const start = (v: string, target: string): string => v.startsWith(target) ? v : target + v

export const startsWith = (v: string, target: string|string[]): boolean => Array.isArray(target)
        ? target.some(t => v.startsWith(t))
        : v.startsWith(target)

export const studly = (v: string): string => v
        .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
        .replace(/[-_]/g, '')
        .replace(/^(.)/, (_, c) => c.toUpperCase())

export const substr = (v: string, start: number, length: number = 0): string => length === 0 ? v.substring(start) : v.substring(start, start + length)

export const take = (v: string, length: number): string => v.slice(0, length)

export const test = (v: string, pattern: string): boolean => (new RegExp(pattern)).test(v)

export const title = (v: string): string => v
        .replace(/[-_]/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

export const trim = (v: string): string => v.trim()

export const ltrim = (v: string): string => v.trimStart()

export const rtrim = (v: string): string => v.trimEnd()

export const ucfirst = (v: string): string => v.charAt(0).toUpperCase() + v.slice(1)

export const ucsplit = (v: string): string[] => v
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .split(/[-_ ]/)

export const unwrap = (v: string, prefix: string, suffix: string): string => v.startsWith(prefix) && v.endsWith(suffix)
        ? v.slice(prefix.length, -suffix.length)
        : v

export const upper = (v: string): string => v.toUpperCase()

export const wordCount = (v: string): number => v.split(/\s+/).length

export const words = (v: string, words: number, replacement: string = '...'): string => {
    const wordArray = v.split(/\s+/);
    return (wordArray.length <= words) ? v : wordArray.slice(0, words).join(' ') + replacement;
}