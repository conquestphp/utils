export const chopStart = (v: string, t: string | string[]) => {
	const ts = Array.isArray(t) ? t : [t];
	for (const t of ts) if (v.startsWith(t)) return v.slice(t.length);
	return v;
};