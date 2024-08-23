import { it, expect } from "vitest";
import { finish } from ".";

it("can finish string with a given substring", () => {
	expect(finish("Hello", "!")).toBe("Hello!");
	expect(finish("Hello!", "!")).toBe("Hello!");
});
