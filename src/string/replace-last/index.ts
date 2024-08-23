export const replaceLast = (v: string, t: string, r: string) => {
	const i = v.lastIndexOf(t);
	return i === -1 ? v : v.slice(0, i) + r + v.slice(i + t.length);
};
