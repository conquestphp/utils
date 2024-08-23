export const singular = (v: string) => {
	const rs: [RegExp, string][] = [
		[/ies$/i, "y"],
		[/([^aeiou])ies$/i, "$1y"],
		[/(x|ch|ss|sh)es$/i, "$1"],
		[/([^s])s$/i, "$1"],
		[/(^.+)$/i, "$1"],
	];
	return rs.reduce((r, [rx, rp]) => r.replace(rx, rp), v);
};
