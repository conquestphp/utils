export const when = <T>(
	c: boolean | ((v: T) => boolean),
	f: (v: T) => T,
	d?: (v: T) => T,
	v?: T,
) =>
	(typeof c === "function" ? c(v as T) : c) ? f(v as T) : d ? d(v as T) : v;
