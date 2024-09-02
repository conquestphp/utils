import { expect, it } from "vitest";
import { random } from ".";

it("should return a random element from the array", () => {
	const a = [1, 2, 3, 4, 5];
	const r = random(a);
	expect(a.includes(r)).toBe(true);
});

it("should return undefined if empty array", () => {
	expect(random([])).toBeUndefined();
});
