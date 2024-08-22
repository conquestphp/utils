import { str } from "../src/string-helper";
import { it, expect } from "vitest";

it("should chain string methods and output a string", () => {
	expect(str(" Hello, World ")
		.trim()
		.lower()
		.replace("world", "TypeScript")
		.append("!")
		.title()
		.value()
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
