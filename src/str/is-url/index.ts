export const isUrl = (v: string) => {
	try {
		new URL(v);
		return true;
	} catch {
		return false;
	}
};