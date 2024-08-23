export const min = <T>(...args: T[]): any =>
	args.reduce((m, c) => (c < m ? c : m));
