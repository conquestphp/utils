export const between = (v: string, s: string, e: string) => {
	const si = v.indexOf(s),
		ei = v.indexOf(e, si + s.length);
	return si === -1 || ei === -1 ? v : v.slice(si + s.length, ei);
};