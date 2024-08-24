export const join = <T>(arr: T[], separator: string = ', ', finalSeparator: string = separator) =>
	arr.length === 0 ? '' :
	arr.length === 1 ? `${arr[0]}` :
	`${arr.slice(0, -1).join(separator)}${finalSeparator}${arr.at(-1)}`
    