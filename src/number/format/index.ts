export const format = (
	number: number,
	precision: number = 2,
	locale: string = "en-US",
) =>
	number.toLocaleString(locale, {
		maximumFractionDigits: precision,
	});