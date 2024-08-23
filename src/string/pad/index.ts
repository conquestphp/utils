export const pad = (v: string, l: number, p = " ") =>
	v.padStart((l - v.length) / 2 + v.length, p).padEnd(l, p);