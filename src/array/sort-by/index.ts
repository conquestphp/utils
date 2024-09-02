export const sortBy = <T extends object, K extends keyof T>(arr: T[], key: K) =>
	[...arr].sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
