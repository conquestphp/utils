import { it, expect } from "vitest";
import { replaceLast } from ".";

it("can replace last occurrence of substring", () => {
	expect(replaceLast("Hello Hello World", "Hello", "Hi")).toBe(
		"Hello Hi World",
	);
});
