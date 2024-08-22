let idx = 0;

export const useId = (id?: string) => {
	if (id) return id;
	return `id-${idx++}`;
};
