export const is = (v: string, t: string) =>
	new RegExp(`^${t.replace(/\*/g, ".*")}$`).test(v);