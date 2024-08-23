export const words = (v: string, w: number, r = "...") => {
	const wa = v.split(/\s+/);
	return wa.length <= w ? v : wa.slice(0, w).join(" ") + r;
};
