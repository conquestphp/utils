export const after = (v: string, t: string) => {
	const i = v.indexOf(t);
	return i === -1 ? v : v.slice(i + t.length);
};

export const afterLast = (v: string, t: string) =>
	v.slice(v.lastIndexOf(t) + t.length);

export const append = (v: string, t: string) => v + t;

export const before = (v: string, t: string) => {
	const i = v.indexOf(t);
	return i === -1 ? v : v.slice(0, i);
};

export const beforeLast = (v: string, t: string) => {
	const i = v.lastIndexOf(t);
	return i === -1 ? v : v.slice(0, i);
};

export const between = (v: string, s: string, e: string) => {
	const si = v.indexOf(s),
		ei = v.indexOf(e, si + s.length);
	return si === -1 || ei === -1 ? v : v.slice(si + s.length, ei);
};

export const camel = (v: string) =>
	v.replace(/[-_](.)/g, (_, c) => c.toUpperCase()).replace(/[-_]/g, "");

export const charAt = (v: string, i: number) => v.charAt(i);

export const chopStart = (v: string, t: string | string[]) => {
	const ts = Array.isArray(t) ? t : [t];
	for (const t of ts) if (v.startsWith(t)) return v.slice(t.length);
	return v;
};

export const chopEnd = (v: string, t: string | string[]) => {
	const i = Array.isArray(t)
		? t.reduce((i, t) => Math.max(i, v.lastIndexOf(t)), -1)
		: v.lastIndexOf(t);
	return i === -1 ? v : v.slice(0, i);
};

export const contains = (v: string, t: string, c = false) =>
	c ? v.includes(t) : v.toLowerCase().includes(t.toLowerCase());

export const containsAll = (v: string, ts: string[], c = false) =>
	ts.every((t) => contains(v, t, c));

export const endsWith = (v: string, t: string | string[]) =>
	Array.isArray(t) ? t.some((t) => v.endsWith(t)) : v.endsWith(t);

export const exactly = (v: string, t: string) => v === t;

export const explode = (v: string, d: string) => v.split(d);

export const finish = (v: string, t: string) => (v.endsWith(t) ? v : v + t);

export const headline = (v: string) =>
	v
		.replace(/[-_]/g, " ")
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.toLowerCase()
		.replace(/\b\w/g, (c) => c.toUpperCase());

export const is = (v: string, t: string) =>
	new RegExp(`^${t.replace(/\*/g, ".*")}$`).test(v);

export const isEmpty = (v: string) => v === "";

export const isNotEmpty = (v: string) => v !== "";

export const isJson = (v: string) => {
	try {
		JSON.parse(v);
		return true;
	} catch {
		return false;
	}
};

export const isUrl = (v: string) => {
	try {
		new URL(v);
		return true;
	} catch {
		return false;
	}
};

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export const kebab = (v: string) =>
	v
		.replace(/([a-z])([A-Z])/g, "$1-$2")
		.replace(/[\s_]+/g, "-")
		.toLowerCase();
export const lcfirst = (v: string) => v.charAt(0).toLowerCase() + v.slice(1);

export const length = (v: string) => v.length;

export const limit = (v: string, l: number) => v.slice(0, l);

export const lower = (v: string) => v.toLowerCase();

export const mask = (v: string, m = "*", s = 0, l?: number) => {
	const e = l === undefined ? v.length : s + l;
	return m.repeat(s) + v.slice(s, e) + m.repeat(v.length - e);
};

export const pad = (v: string, l: number, p = " ") =>
	v.padStart((l - v.length) / 2 + v.length, p).padEnd(l, p);

export const padLeft = (v: string, l: number, p = " ") => v.padStart(l, p);

export const padRight = (v: string, l: number, p = " ") => v.padEnd(l, p);

export const pipe = (v: string, ...cs: Function[]) =>
	cs.reduce((v, c) => c(v), v);

export const plural = (v: string) => {
	const rs: [RegExp, string][] = [
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
	for (const [r, p] of rs) if (r.test(v)) return v.replace(r, p);
	return v;
};

export const prepend = (v: string, t: string) => t + v;

export const remove = (v: string, t: string) => v.replace(t, "");

export const repeat = (v: string, t: number) => v.repeat(t);

export const replace = (v: string, t: string, r: string) => v.replace(t, r);

export const replaceArray = (v: string, ts: string[], r: string) =>
	ts.reduce((v, t) => v.replace(t, r), v);

export const replaceEnd = (v: string, t: string, r: string) =>
	v.endsWith(t) ? v.slice(0, -t.length) + r : v;

export const replaceFirst = (v: string, t: string, r: string) =>
	v.replace(t, r);

export const replaceLast = (v: string, t: string, r: string) => {
	const i = v.lastIndexOf(t);
	return i === -1 ? v : v.slice(0, i) + r + v.slice(i + t.length);
};

export const replaceStart = (v: string, t: string, r: string) =>
	v.startsWith(t) ? r + v.slice(t.length) : v;

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

export const slug = (v: string) =>
	v
		.replace(/[^a-z0-9]+/gi, "-")
		.replace(/^-|-$/g, "")
		.toLowerCase();

export const snake = (v: string) =>
	v
		.replace(/\s+/g, "_")
		.replace(/([a-z])([A-Z])/g, "$1_$2")
		.replace(/[-_]+/g, "_")
		.toLowerCase();
export const squish = (v: string) => v.trim().replace(/\s+/g, " ");

export const start = (v: string, t: string) => (v.startsWith(t) ? v : t + v);

export const startsWith = (v: string, t: string | string[]) =>
	Array.isArray(t) ? t.some((t) => v.startsWith(t)) : v.startsWith(t);

export const studly = (v: string) =>
	v
		.replace(/[-_](.)/g, (_, c) => c.toUpperCase())
		.replace(/[-_]/g, "")
		.replace(/^(.)/, (_, c) => c.toUpperCase());

export const substr = (v: string, s: number, l = 0) =>
	l === 0 ? v.substring(s) : v.substring(s, s + l);
export const take = (v: string, l: number) => v.slice(0, l);

export const test = (v: string, p: string) => new RegExp(p).test(v);

export const title = (v: string) =>
	v
		.replace(/[-_]/g, " ")
		.split(" ")
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(" ");

export const trim = (v: string) => v.trim();

export const ltrim = (v: string) => v.trimStart();

export const rtrim = (v: string) => v.trimEnd();

export const ucfirst = (v: string) => v.charAt(0).toUpperCase() + v.slice(1);

export const ucsplit = (v: string) =>
	v.replace(/([a-z])([A-Z])/g, "$1 $2").split(/[-_ ]/);

export const unwrap = (v: string, p: string, s: string) =>
	v.startsWith(p) && v.endsWith(s) ? v.slice(p.length, -s.length) : v;

export const upper = (v: string) => v.toUpperCase();

export const wordCount = (v: string) => v.split(/\s+/).length;

export const words = (v: string, w: number, r = "...") => {
	const wa = v.split(/\s+/);
	return wa.length <= w ? v : wa.slice(0, w).join(" ") + r;
};
