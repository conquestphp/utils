export const when = <T>(
    c: boolean | ((v: T) => boolean),
    f: (v: T) => T,
    d?: (v: T) => T
) => (v: T): T => (typeof c === 'function' ? c(v) : c) ? f(v) : d ? d(v) : v;