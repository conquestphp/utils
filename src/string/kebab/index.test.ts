import { it, expect } from "vitest";
import { kebab } from ".";

it("can convert string to kebab-case", () => {
	expect(kebab("fooBar")).toBe("foo-bar");
	expect(kebab("foo_bar")).toBe("foo-bar");
});
