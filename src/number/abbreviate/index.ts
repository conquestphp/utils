export const abbreviate = (number: number) =>
	number.toLocaleString("en-US", {
		notation: "compact",
		maximumFractionDigits: 1,
	});
