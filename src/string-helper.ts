import * as s from "./strings";

class Stringable {
	source: string;
	constructor(value: string) {
		this.source = value;
	}

	after(target: string): Stringable {
		this.source = s.after(this.source, target);
		return this;
	}

	afterLast(target: string): Stringable {
		this.source = s.afterLast(this.source, target);
		return this;
	}

	append(target: string): Stringable {
		this.source = s.append(this.source, target);
		return this;
	}

	before(target: string): Stringable {
		this.source = s.before(this.source, target);
		return this;
	}

	beforeLast(target: string): Stringable {
		this.source = s.beforeLast(this.source, target);
		return this;
	}

	between(start: string, end: string): Stringable {
		this.source = s.between(this.source, start, end);
		return this;
	}

	betweenLast(start: string, end: string): Stringable {
		this.source = s.betweenLast(this.source, start, end);
		return this;
	}

	camel(): Stringable {
		this.source = s.camel(this.source);
		return this;
	}

	charAt(index: number): Stringable {
		this.source = s.charAt(this.source, index);
		return this;
	}

	chopStart(target: string | string[]): Stringable {
		this.source = s.chopStart(this.source, target);
		return this;
	}

	chopEnd(target: string | string[]): Stringable {
		this.source = s.chopEnd(this.source, target);
		return this;
	}

	contains(target: string, caseSensitive: boolean = false): boolean {
		return s.contains(this.source, target, caseSensitive);
	}

	containsAll(targets: string[], caseSensitive: boolean = false): boolean {
		return s.containsAll(this.source, targets, caseSensitive);
	}

	endsWith(target: string | string[]): boolean {
		return s.endsWith(this.source, target);
	}

	exactly(target: string): boolean {
		return s.exactly(this.source, target);
	}

	explode(delimiter: string): string[] {
		return s.explode(this.source, delimiter);
	}

	finish(target: string): Stringable {
		this.source = s.finish(this.source, target);
		return this;
	}

	headline(): Stringable {
		this.source = s.headline(this.source);
		return this;
	}

	is(target: string): boolean {
		return s.is(this.source, target);
	}

	isEmpty(): boolean {
		return s.isEmpty(this.source);
	}

	isNotEmpty(): boolean {
		return s.isNotEmpty(this.source);
	}

	isJson(): boolean {
		return s.isJson(this.source);
	}

	isUrl(): boolean {
		return s.isUrl(this.source);
	}

	isEmail(): boolean {
		return s.isEmail(this.source);
	}

	kebab(): Stringable {
		this.source = s.kebab(this.source);
		return this;
	}

	lcfirst(): Stringable {
		this.source = s.lcfirst(this.source);
		return this;
	}

	length(): number {
		return s.length(this.source);
	}

	limit(limit: number): Stringable {
		this.source = s.limit(this.source, limit);
		return this;
	}

	lower(): Stringable {
		this.source = s.lower(this.source);
		return this;
	}

	mask(mask: string, show: number = 100, end: number = 0): Stringable {
		this.source = s.mask(this.source, mask, show, end);
		return this;
	}

	pad(length: number, pad: string = " "): Stringable {
		this.source = s.pad(this.source, length, pad);
		return this;
	}

	padLeft(length: number, pad: string = " "): Stringable {
		this.source = s.padLeft(this.source, length, pad);
		return this;
	}

	padRight(length: number, pad: string = " "): Stringable {
		this.source = s.padRight(this.source, length, pad);
		return this;
	}

	pipe(...callbacks: Function[]): Stringable {
		this.source = s.pipe(this.source, ...callbacks);
		return this;
	}

	plural(): Stringable {
		this.source = s.plural(this.source);
		return this;
	}

	prepend(target: string): Stringable {
		this.source = s.prepend(this.source, target);
		return this;
	}

	remove(target: string): Stringable {
		this.source = s.remove(this.source, target);
		return this;
	}

	repeat(times: number): Stringable {
		this.source = s.repeat(this.source, times);
		return this;
	}

	replace(target: string, replacement: string): Stringable {
		this.source = s.replace(this.source, target, replacement);
		return this;
	}

	replaceArray(targets: string[], replacement: string): Stringable {
		this.source = s.replaceArray(this.source, targets, replacement);
		return this;
	}

	replaceEnd(target: string, replacement: string): Stringable {
		this.source = s.replaceEnd(this.source, target, replacement);
		return this;
	}

	replaceFirst(target: string, replacement: string): Stringable {
		this.source = s.replaceFirst(this.source, target, replacement);
		return this;
	}

	replaceLast(target: string, replacement: string): Stringable {
		this.source = s.replaceLast(this.source, target, replacement);
		return this;
	}

	replaceStart(target: string, replacement: string): Stringable {
		this.source = s.replaceStart(this.source, target, replacement);
		return this;
	}

	singular(): Stringable {
		this.source = s.singular(this.source);
		return this;
	}

	slug(): Stringable {
		this.source = s.slug(this.source);
		return this;
	}

	snake(): Stringable {
		this.source = s.snake(this.source);
		return this;
	}

	squish(): Stringable {
		this.source = s.squish(this.source);
		return this;
	}

	start(target: string): Stringable {
		this.source = s.start(this.source, target);
		return this;
	}

	startsWith(target: string | string[]): boolean {
		return s.startsWith(this.source, target);
	}

	studly(): Stringable {
		this.source = s.studly(this.source);
		return this;
	}

	substr(start: number, length: number = 0): Stringable {
		this.source = s.substr(this.source, start, length);
		return this;
	}

	take(length: number): Stringable {
		this.source = s.take(this.source, length);
		return this;
	}

	test(pattern: string): boolean {
		return s.test(this.source, pattern);
	}

	title(): Stringable {
		this.source = s.title(this.source);
		return this;
	}

	trim(): Stringable {
		this.source = s.trim(this.source);
		return this;
	}

	ltrim(): Stringable {
		this.source = s.ltrim(this.source);
		return this;
	}

	rtrim(): Stringable {
		this.source = s.rtrim(this.source);
		return this;
	}

	ucfirst(): Stringable {
		this.source = s.ucfirst(this.source);
		return this;
	}

	ucsplit(): string[] {
		return s.ucsplit(this.source);
	}

	unwrap(prefix: string, suffix: string): Stringable {
		this.source = s.unwrap(this.source, prefix, suffix);
		return this;
	}

	upper(): Stringable {
		this.source = s.upper(this.source);
		return this;
	}

	wordCount(): number {
		return s.wordCount(this.source);
	}

	words(words: number, replacement: string = "..."): Stringable {
		this.source = s.words(this.source, words, replacement);
		return this;
	}

	toString(): string {
		return this.source;
	}

	value(): string {
		return this.source;
	}

	// Implement Symbol.toPrimitive to handle different contexts
	[Symbol.toPrimitive](hint: string) {
		if (hint === "string" || hint === "default") {
			return this.toString();
		}
		return this.value();
	}
}

export const str = (value: string): Stringable => new Stringable(value);
