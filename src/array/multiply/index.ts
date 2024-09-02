export const multiply = <T>(arr: T[], times: number) =>
	Array.from({ length: times }, () => arr).flat();
