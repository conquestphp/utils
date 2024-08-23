export const max = <T>(...args: T[]): any =>
	args.reduce((m, c) => (c > m ? c : m));
