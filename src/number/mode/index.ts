export const mode = (...args: number[]): number | undefined => {
	const counts: Record<number, number> = {}
	let maxCount = 0
	let maxNumber: number | undefined

	for (let i = 0; i < args.length; i++) {
		const num = args[i]
		counts[num] = (counts[num] || 0) + 1
		if (counts[num] > maxCount) {
			maxCount = counts[num]
			maxNumber = num
		}
	}

	return maxNumber
}