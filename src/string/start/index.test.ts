import { it, expect } from "vitest";
import { start } from ".";

it("can ensure string starts with given substring", () => {
	expect(start("World", "Hello ")).toBe("Hello World");
	expect(start("Hello World", "Hello ")).toBe("Hello World");
});
