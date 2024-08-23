import { it, expect } from "vitest";
import { camel } from ".";

it("can convert string to camelCase", () => {
	expect(camel("foo-bar")).toBe("fooBar");
	expect(camel("foo_bar")).toBe("fooBar");
});
