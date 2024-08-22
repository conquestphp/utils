export const snake = (v: string) =>
	v
		.replace(/\s+/g, "_")
		.replace(/([a-z])([A-Z])/g, "$1_$2")
		.replace(/[-_]+/g, "_")
		.toLowerCase();