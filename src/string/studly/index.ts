export const studly = (v: string) =>
	v
		.replace(/[-_](.)/g, (_, c) => c.toUpperCase())
		.replace(/[-_]/g, "")
		.replace(/^(.)/, (_, c) => c.toUpperCase());
