import { it, expect } from "vitest";
import { remove } from ".";

it("can remove substring", () => {
	expect(remove("Hello World", "llo")).toBe("He World");
});
