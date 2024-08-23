export const plural = (v: string) => {
	const pluralRules: [RegExp, string][] = [
		[/(?:s|x|z|ch|sh)es$/i, "$&"],
		[/([^aeiou])ies$/i, "$&"],
		[/([aeiou]y)s$/i, "$&"],
		[/(?:([^f])fe|([lr])f)ves$/i, "$&"],
		[/ses$/i, "$&"],
		[/(us)es$/i, "$&"],
		[/(on)a$/i, "$&"],
		[/(um)a$/i, "$&"],
		[/(is)es$/i, "$&"],
		[/([^s])s$/i, "$&"],
	];

	for (const [r] of pluralRules) if (r.test(v)) return v;

	const singularToPluralRules: [RegExp, string][] = [
		[/(?:s|x|z|ch|sh)$/i, "$&es"],
		[/([^aeiou])y$/i, "$1ies"],
		[/([aeiou]y)$/i, "$1s"],
		[/(?:([^f])fe|([lr])f)$/i, "$1$2ves"],
		[/sis$/i, "ses"],
		[/(us)$/i, "$1es"],
		[/(on)$/i, "$1a"],
		[/(um)$/i, "$1a"],
		[/(is)$/i, "es"],
		[/([^s])$/i, "$1s"],
	];

	for (const [r, p] of singularToPluralRules)
		if (r.test(v)) return v.replace(r, p);
	return v;
};
