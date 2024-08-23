export const title = (v: string) =>
	v
		.replace(/[-_]/g, " ")
		.split(" ")
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(" ");