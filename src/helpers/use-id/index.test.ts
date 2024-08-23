import { it, expect } from "vitest";
import { useId } from ".";

it("can generate a unique id", () => {
	const id = useId();
	expect(id).toBeTypeOf("string");
	const id2 = useId();
	expect(id2).toBeTypeOf("string");
	expect(id2).not.toBe(id);
});

it("accepts an id", () => {
	const id = useId("test");
	expect(id).toBe("test");
});
