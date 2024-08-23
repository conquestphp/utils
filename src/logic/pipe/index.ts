export const pipe = <T>(v: T, ...cs: Function[]) =>
	cs.reduce((v: T, c) => c(v), v);
