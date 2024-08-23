export const after = (v: string, t: string) => {
	const i = v.indexOf(t);
	return i < 0 ? v : v.slice(i + t.length);
};
