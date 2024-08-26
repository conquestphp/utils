import * as s from "../../string";
// import { pipe } from "./logic";

class Stringable {
	constructor(private source: string) {}

	private chain(
		fn: (s: string, ...args: any[]) => string,
		...args: any[]
	): Stringable {
		this.source = fn(this.source, ...args);
		return this;
	}

	// Methods that return Stringable
	after = (target: string) => this.chain(s.after, target);
	afterLast = (target: string) => this.chain(s.afterLast, target);
	before = (target: string) => this.chain(s.before, target);
	beforeLast = (target: string) => this.chain(s.beforeLast, target);
	between = (start: string, end: string) => this.chain(s.between, start, end);
	camel = () => this.chain(s.camel);
	charAt = (index: number) => this.chain(s.charAt, index);
	chopStart = (target: string | string[]) => this.chain(s.chopStart, target);
	chopEnd = (target: string | string[]) => this.chain(s.chopEnd, target);
	finish = (target: string) => this.chain(s.finish, target);
	headline = () => this.chain(s.headline);
	kebab = () => this.chain(s.kebab);
	lcfirst = () => this.chain(s.lcfirst);
	limit = (limit: number) => this.chain(s.limit, limit);
	lower = () => this.chain(s.lower);
	mask = (mask: string = "*", start = 0, length?: number) =>
		this.chain(s.mask, mask, start, length);
	pad = (length: number, pad = " ") => this.chain(s.pad, length, pad);
	padLeft = (length: number, pad = " ") => this.chain(s.padLeft, length, pad);
	padRight = (length: number, pad = " ") => this.chain(s.padRight, length, pad);
	// pipe = (...callbacks: Function[]) => this.chain(pipe, ...callbacks);
	plural = () => this.chain(s.plural);
	prefix = (target: string) => this.chain(s.prefix, target);
	remove = (target: string) => this.chain(s.remove, target);
	repeat = (times: number) => this.chain(s.repeat, times);
	replace = (target: string, replacement: string) =>
		this.chain(s.replace, target, replacement);
	replaceArray = (targets: string[], replacement: string) =>
		this.chain(s.replaceArray, targets, replacement);
	replaceEnd = (target: string, replacement: string) =>
		this.chain(s.replaceEnd, target, replacement);
	replaceFirst = (target: string, replacement: string) =>
		this.chain(s.replaceFirst, target, replacement);
	replaceLast = (target: string, replacement: string) =>
		this.chain(s.replaceLast, target, replacement);
	replaceStart = (target: string, replacement: string) =>
		this.chain(s.replaceStart, target, replacement);
	singular = () => this.chain(s.singular);
	slug = () => this.chain(s.slug);
	snake = () => this.chain(s.snake);
	squish = () => this.chain(s.squish);
	start = (target: string) => this.chain(s.start, target);
	studly = () => this.chain(s.studly);
	substr = (start: number, length = 0) => this.chain(s.substr, start, length);
	suffix = (target: string) => this.chain(s.suffix, target);
	take = (length: number) => this.chain(s.take, length);
	title = () => this.chain(s.title);
	trim = () => this.chain(s.trim);
	ltrim = () => this.chain(s.ltrim);
	rtrim = () => this.chain(s.rtrim);
	ucfirst = () => this.chain(s.ucfirst);
	unwrap = (prefix: string, suffix: string) =>
		this.chain(s.unwrap, prefix, suffix);
	upper = () => this.chain(s.upper);
	words = (words: number, replacement = "...") =>
		this.chain(s.words, words, replacement);

	// Methods that return boolean
	contains = (target: string, caseSensitive = false) =>
		s.contains(this.source, target, caseSensitive);
	containsAll = (targets: string[], caseSensitive = false) =>
		s.containsAll(this.source, targets, caseSensitive);
	endsWith = (target: string | string[]) => s.endsWith(this.source, target);
	exactly = (target: string) => s.exactly(this.source, target);
	isJson = () => s.isJson(this.source);
	isUrl = () => s.isUrl(this.source);
	isEmail = () => s.isEmail(this.source);
	startsWith = (target: string | string[]) => s.startsWith(this.source, target);
	test = (pattern: string) => s.test(this.source, pattern);

	// Methods that return other types
	explode = (delimiter: string) => s.explode(this.source, delimiter);
	length = () => s.length(this.source);
	ucsplit = () => s.ucsplit(this.source);
	wordCount = () => s.wordCount(this.source);

	toString = () => this.source;
	value = () => this.source;

	[Symbol.toPrimitive](hint: string) {
		return hint === "number" ? NaN : this.toString();
	}
}

export const str = (value: string) => new Stringable(value);
