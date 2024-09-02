export const nth = <T>(arr: T[], n: number, o: number = 0) =>
	arr.filter((_, i) => i % n === o);
