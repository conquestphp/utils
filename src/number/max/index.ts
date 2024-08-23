export const max = <T>(args: T[], by?: (arg: T) => number | string): T =>
	args.sort((a, b) => {
		const aValue = by ? by(a) : a;
		const bValue = by ? by(b) : b;
		return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
	})[args.length - 1];