import { it, expect } from "vitest";
import { isset } from ".";

it("can check if a key exists in an object", () => {
	const obj = { a: { b: { c: 1 } } };
	expect(isset("a.b.c", obj)).toBe(true);
	expect(isset("a.b.c.d", obj)).toBe(false);
	expect(isset("a", obj)).toBe(true);
});
