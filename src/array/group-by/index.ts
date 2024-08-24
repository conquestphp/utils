export const groupBy = <T, K extends keyof T>(arr: T[], k: K) =>
	arr.reduce((acc, item) => {
		const key = item[k] as unknown as string;
        (acc[key] ||= []).push(item)
		return acc
	}, {} as Record<string, T[]>)