export const replaceArray = (v: string, ts: string[], r: string) =>
	ts.reduce((v, t) => v.replace(t, r), v);