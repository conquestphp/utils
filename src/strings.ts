export const after = (source: string, target: string): string => {
	const i = source.indexOf(target);
	return i === -1 ? source : source.slice(i + target.length);
};

export const afterLast = (source: string, target: string): string => {
	const i = source.lastIndexOf(target);
	return i === -1 ? source : source.slice(i + target.length);
};

export const append = (source: string, target: string): string =>
	source + target;

export const before = (source: string, target: string) => {
	const i = source.indexOf(target);
	return i === -1 ? source : source.slice(0, i);
};

export const beforeLast = (source: string, target: string): string => {
	const i = source.lastIndexOf(target);
	return i === -1 ? source : source.slice(0, i);
};

export const between = (source: string, start: string, end: string): string => {
	const startIndex = source.indexOf(start);
	if (startIndex === -1) return source;
	const endIndex = source.indexOf(end, startIndex + start.length);
	if (endIndex === -1) return source;
	return source.substring(startIndex + start.length, endIndex);
};

export const betweenLast = (
	source: string,
	start: string,
	end: string,
): string => {
	const startIndex = source.lastIndexOf(start);
	if (startIndex === -1) return source;
	const endIndex = source.indexOf(end, startIndex + start.length);
	if (endIndex === -1) return source;
	return source.substring(startIndex + start.length, endIndex);
};

export const camel = (source: string): string => {
	return source
		.replace(/[-_](.)/g, (_, c) => c.toUpperCase())
		.replace(/[-_]/g, "");
};

export const charAt = (source: string, index: number): string =>
	source.charAt(index);

export const chopStart = (source: string, target: string | string[]) => {
	const targets = Array.isArray(target) ? target : [target];
	for (const t of targets) {
		if (source.startsWith(t)) {
			return source.slice(t.length);
		}
	}
	return source;
};

export const chopEnd = (source: string, target: string | string[]): string => {
	const i = Array.isArray(target)
		? target.reduce((i, t) => Math.max(i, source.lastIndexOf(t)), -1)
		: source.lastIndexOf(target);
	return i === -1 ? source : source.slice(0, i);
};

export const contains = (
	source: string,
	target: string,
	caseSensitive: boolean = false,
): boolean =>
	caseSensitive
		? source.includes(target)
		: lower(source).includes(target.toLowerCase());

export const containsAll = (
	source: string,
	targets: string[],
	caseSensitive: boolean = false,
): boolean => {
	return targets.every((target) => contains(source, target, caseSensitive));
};

export const endsWith = (source: string, target: string | string[]): boolean =>
	Array.isArray(target)
		? target.some((t) => source.endsWith(t))
		: source.endsWith(target);

export const exactly = (source: string, target: string) => source === target;

export const explode = (source: string, delimiter: string): string[] =>
	source.split(delimiter);

export const finish = (source: string, target: string): string =>
	source.endsWith(target) ? source : source + target;

export const headline = (source: string): string =>
	source
		.replace(/[-_]/g, " ")
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.toLowerCase()
		.replace(/\b\w/g, (c) => c.toUpperCase());

// Accepts wildcards
export const is = (source: string, target: string): boolean =>
	new RegExp(`^${target.replace(/\*/g, ".*")}$`).test(source);

export const isEmpty = (source: string): boolean => source === "";

export const isNotEmpty = (source: string): boolean => source !== "";

export const isJson = (source: string): boolean => {
	try {
		JSON.parse(source);
		return true;
	} catch {
		return false;
	}
};

export const isUrl = (source: string): boolean => {
	try {
		new URL(source);
		return true;
	} catch {
		return false;
	}
};

export const isEmail = (source: string): boolean =>
	/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(source);

export const kebab = (source: string): string =>
	source
		.replace(/([a-z])([A-Z])/g, "$1-$2")
		.replace(/[\s_]+/g, "-")
		.toLowerCase();

export const lcfirst = (source: string): string =>
	source.charAt(0).toLowerCase() + source.slice(1);

export const length = (source: string): number => source.length;

export const limit = (source: string, limit: number): string =>
	source.slice(0, limit);

export const lower = (source: string): string => source.toLowerCase();

export const mask = (
	source: string,
	mask: string = "*",
	show: number = 0,
	end: number = 0,
): string => {
	if (show + end >= source.length) {
		return source;
	}
	const maskedLength = source.length - show - end;
	const maskedPart = mask.repeat(maskedLength);
	return (
		maskedPart +
		source.slice(maskedLength, source.length - end) +
		source.slice(source.length - end)
	);
};

export const pad = (
	source: string,
	length: number,
	pad: string = " ",
): string =>
	source
		.padStart((length - source.length) / 2 + source.length, pad)
		.padEnd(length, pad);

export const padLeft = (
	source: string,
	length: number,
	pad: string = " ",
): string => source.padStart(length, pad);

export const padRight = (
	source: string,
	length: number,
	pad: string = " ",
): string => source.padEnd(length, pad);

export const pipe = (source: string, ...callbacks: Function[]): string =>
	callbacks.reduce((source, callback) => callback(source), source);

export const plural = (source: string): string => {
	const rules: [RegExp, string][] = [
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

	for (const [regex, replacement] of rules) {
		if (regex.test(source)) {
			return source.replace(regex, replacement);
		}
	}

	return source;
};

export const prepend = (source: string, target: string): string =>
	target + source;

export const remove = (source: string, target: string): string =>
	source.replace(target, "");

export const repeat = (source: string, times: number): string =>
	source.repeat(times);

export const replace = (
	source: string,
	target: string,
	replacement: string,
): string => source.replace(target, replacement);

export const replaceArray = (
	source: string,
	targets: string[],
	replacement: string,
): string =>
	targets.reduce(
		(source, target) => source.replace(target, replacement),
		source,
	);

export const replaceEnd = (
	source: string,
	target: string,
	replacement: string,
): string =>
	source.endsWith(target) ? source.replace(target, replacement) : source;

export const replaceFirst = (
	source: string,
	target: string,
	replacement: string,
): string => source.replace(target, replacement);

export const replaceLast = (
	source: string,
	target: string,
	replacement: string,
): string => {
	const index = source.lastIndexOf(target);
	if (index === -1) return source;
	return (
		source.slice(0, index) + replacement + source.slice(index + target.length)
	);
};

export const replaceStart = (
	source: string,
	target: string,
	replacement: string,
): string =>
	source.startsWith(target) ? source.replace(target, replacement) : source;

export const singular = (source: string): string => {
	const rules: [RegExp, string][] = [
		[/ies$/i, "y"],
		[/([^aeiou])ies$/i, "$1y"],
		[/(x|ch|ss|sh)es$/i, "$1"],
		[/([^s])s$/i, "$1"],
		[/^(.+)$/i, "$1"],
	];
	return rules.reduce(
		(result, [regex, replacement]) => result.replace(regex, replacement),
		source,
	);
};

export const slug = (source: string): string =>
	source
		.replace(/[^a-z0-9]+/gi, "-")
		.replace(/^-|-$/g, "")
		.toLowerCase();

export const snake = (source: string): string =>
	source
		.replace(/\s+/g, "_")
		.replace(/([a-z])([A-Z])/g, "$1_$2")
		.replace(/[-_]+/g, "_")
		.toLowerCase();

export const squish = (source: string): string =>
	source.trim().replace(/\s+/g, " ");

export const start = (source: string, target: string): string =>
	source.startsWith(target) ? source : target + source;

export const startsWith = (
	source: string,
	target: string | string[],
): boolean =>
	Array.isArray(target)
		? target.some((t) => source.startsWith(t))
		: source.startsWith(target);

export const studly = (source: string): string =>
	source
		.replace(/[-_](.)/g, (_, c) => c.toUpperCase())
		.replace(/[-_]/g, "")
		.replace(/^(.)/, (_, c) => c.toUpperCase());

export const substr = (
	source: string,
	start: number,
	length: number = 0,
): string =>
	length === 0
		? source.substring(start)
		: source.substring(start, start + length);

export const take = (source: string, length: number): string =>
	source.slice(0, length);

export const test = (source: string, pattern: string): boolean =>
	new RegExp(pattern).test(source);

export const title = (source: string): string =>
	source
		.replace(/[-_]/g, " ")
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

export const trim = (source: string): string => source.trim();

export const ltrim = (source: string): string => source.trimStart();

export const rtrim = (source: string): string => source.trimEnd();

export const ucfirst = (source: string): string =>
	source.charAt(0).toUpperCase() + source.slice(1);

export const ucsplit = (source: string): string[] =>
	source.replace(/([a-z])([A-Z])/g, "$1 $2").split(/[-_ ]/);

export const unwrap = (
	source: string,
	prefix: string,
	suffix: string,
): string =>
	source.startsWith(prefix) && source.endsWith(suffix)
		? source.slice(prefix.length, -suffix.length)
		: source;

export const upper = (source: string): string => source.toUpperCase();

export const wordCount = (source: string): number => source.split(/\s+/).length;

export const words = (
	source: string,
	words: number,
	replacement: string = "...",
): string => {
	const wordArray = source.split(/\s+/);
	return wordArray.length <= words
		? source
		: wordArray.slice(0, words).join(" ") + replacement;
};
