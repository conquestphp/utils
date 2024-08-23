export const headline = (v: string) =>
	v
		.replace(/[-_]/g, " ")
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.toLowerCase()
		.replace(/\b\w/g, (c) => c.toUpperCase());