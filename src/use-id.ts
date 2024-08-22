let i = 0;

export const useId = (id?: string) => id || `id-${i++}`;
