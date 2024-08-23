export const before = (v: string, t: string) => {
	const i = v.indexOf(t);
	return i === -1 ? v : v.slice(0, i);
};
