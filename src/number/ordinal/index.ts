export const ordinal = (number: number): string => {
	const suffix = ["th", "st", "nd", "rd"];
	const v = number % 100;
	return number + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
};
