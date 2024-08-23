import { it, expect } from "vitest";
import { replaceEnd } from ".";

it("can replace substring at the end", () => {
	expect(replaceEnd("Hello World", "World", "Universe")).toBe("Hello Universe");
	expect(replaceEnd("Hello World", "Hello", "Hi")).toBe("Hello World");
});
