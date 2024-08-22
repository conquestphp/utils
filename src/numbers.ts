export const abbreviate = (number: number) =>
	number.toLocaleString("en-US", {
		notation: "compact",
		maximumFractionDigits: 1,
	});

export const clamp = (number: number, min: number, max: number) =>
	Math.min(Math.max(number, min), max);

export const fileSize = (bytes: number) => {
	const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
	if (bytes === 0) return "0 Bytes";
	const i = Math.floor(Math.log(bytes) / Math.log(1024));
	return Math.round(bytes / Math.pow(1024, i)) + " " + sizes[i];
};

export const format = (
	number: number,
	precision: number = 2,
	locale: string = "en-US",
) =>
	number.toLocaleString(locale, {
		maximumFractionDigits: precision,
	});

export const ordinal = (number: number): string => {
	const suffix = ["th", "st", "nd", "rd"];
	const v = number % 100;
	return number + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
};
