export const isJson = (v: string) => {
	try {
		JSON.parse(v);
		return true;
	} catch {
		return false;
	}
};
