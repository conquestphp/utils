export const camel = (v: string) =>
	v.replace(/[-_](.)/g, (_, c) => c.toUpperCase()).replace(/[-_]/g, "");
