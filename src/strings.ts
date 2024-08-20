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

export const contains = (source: string, target: string): boolean => source.includes(target)

export const lower = (source: string): string => source.toLowerCase()

export const upper = (source: string): string => source.toUpperCase()
