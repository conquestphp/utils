import { str } from ".";
import { it, expect } from "vitest";

it("should chain string methods and output a string", () => {
	expect(
		str(" Hello, World ")
			.trim()
			.lower()
			.replace("world", "TypeScript")
			.suffix("!")
			.title()
			.value(),
	).toBe("Hello, TypeScript!");
});

it("should handle type coercion", () => {
	const stringable = str("42");
	expect(stringable + "").toBe("42");
	expect(`${stringable}`).toBe("42");
	expect(stringable.toString()).toBe("42");
	expect(stringable.value()).toBe("42");
});

it("can use multiple methods", () => {
	expect(str("hello").upper().value()).toBe("HELLO");
	expect(str("Hello").contains("ell")).toBe(true);
	expect(str("hello world").words(1).value()).toBe("hello...");
	expect(str("snake_case").camel().value()).toBe("snakeCase");
});

// Additional tests to increase coverage

it("should handle string operations", () => {
	expect(str("Hello, World").after(",").value()).toBe(" World");
	expect(str("App/Http/Controllers/Controller").afterLast("/").value()).toBe(
		"Controller",
	);
	expect(str("Hello").suffix(" World").value()).toBe("Hello World");
	expect(str("This is my name").before("my").value()).toBe("This is ");
	expect(str("This is my name").beforeLast("is").value()).toBe("This ");
	expect(str("This is my name").between("This", "name").value()).toBe(
		" is my ",
	);
	expect(str("foo_bar").camel().value()).toBe("fooBar");
	expect(str("Hello").charAt(1).value()).toBe("e");
	expect(str("https://laravel.com").chopStart("https://").value()).toBe(
		"laravel.com",
	);
	expect(str("Hello World").chopEnd(" World").value()).toBe("Hello");
});

it("should handle string checks", () => {
	expect(str("Hello World").contains("World")).toBe(true);
	expect(str("Hello World").containsAll(["Hello", "World"])).toBe(true);
	expect(str("Hello World").endsWith("World")).toBe(true);
	expect(str("Hello").exactly("Hello")).toBe(true);
	expect(str('{"name": "John"}').isJson()).toBe(true);
	expect(str("https://example.com").isUrl()).toBe(true);
	expect(str("user@example.com").isEmail()).toBe(true);
});

it("should handle string transformations", () => {
	expect(str("fooBar").kebab().value()).toBe("foo-bar");
	expect(str("Hello").lcfirst().value()).toBe("hello");
	expect(str("Hello World").length()).toBe(11);
	expect(str("Hello World").limit(5).value()).toBe("Hello");
	expect(str("HELLO").lower().value()).toBe("hello");
	expect(str("1234567890").mask("*", 4).value()).toBe("****567890");
	expect(str("Hello").pad(9).value()).toBe("  Hello  ");
	expect(str("Hello").padLeft(7).value()).toBe("  Hello");
	expect(str("Hello").padRight(7).value()).toBe("Hello  ");
});

it("should handle advanced string operations", () => {
	//   expect(str("hello").pipe((s: string ) => s.toUpperCase(), (s: string) => s.split("").reverse().join("")).value()).toBe("OLLEH");
	expect(str("car").plural().value()).toBe("cars");
	expect(str("World").prefix("Hello ").value()).toBe("Hello World");
	expect(str("Hello World").remove("llo").value()).toBe("He World");
	expect(str("Hi").repeat(3).value()).toBe("HiHiHi");
	expect(str("Hello World").replace("World", "Universe").value()).toBe(
		"Hello Universe",
	);
	expect(
		str("The quick brown fox").replaceArray(["quick", "brown"], "lazy").value(),
	).toBe("The lazy lazy fox");
	expect(str("Hello World").replaceEnd("World", "Universe").value()).toBe(
		"Hello Universe",
	);
	expect(str("Hello Hello World").replaceFirst("Hello", "Hi").value()).toBe(
		"Hi Hello World",
	);
	expect(str("Hello Hello World").replaceLast("Hello", "Hi").value()).toBe(
		"Hello Hi World",
	);
	expect(str("Hello World").replaceStart("Hello", "Hi").value()).toBe(
		"Hi World",
	);
});

it("should handle string formatting", () => {
	expect(str("cars").singular().value()).toBe("car");
	expect(str("Hello World").slug().value()).toBe("hello-world");
	expect(str("helloWorld").snake().value()).toBe("hello_world");
	expect(str("  Hello   World  ").squish().value()).toBe("Hello World");
	expect(str("World").start("Hello ").value()).toBe("Hello World");
	expect(str("hello_world").studly().value()).toBe("HelloWorld");
	expect(str("Hello World").substr(6).value()).toBe("World");
	expect(str("Hello World").take(5).value()).toBe("Hello");
	expect(str("hello_world").title().value()).toBe("Hello World");
	expect(str("  Conquest  ").trim().value()).toBe("Conquest");
	expect(str("  Conquest  ").ltrim().value()).toBe("Conquest  ");
	expect(str("  Conquest  ").rtrim().value()).toBe("  Conquest");
	expect(str("foo bar").ucfirst().value()).toBe("Foo bar");
	expect(str("conquest").upper().value()).toBe("CONQUEST");
	expect(str("{Conquest}").unwrap("{", "}").value()).toBe("Conquest");
});

it("should handle word operations", () => {
	expect(str("Hello, World").wordCount()).toBe(2);
	expect(
		str("Perfectly balanced, as all things should be.").words(3, ">>>").value(),
	).toBe("Perfectly balanced, as>>>");
});

it("should handle type conversions", () => {
	const stringable = str("42");
	expect(Number(stringable)).toBe(NaN);
	expect(stringable[Symbol.toPrimitive]("number")).toBe(NaN);
	expect(stringable[Symbol.toPrimitive]("string")).toBe("42");
});
