import { it, expect } from "vitest";
import { unwrap } from ".";

it("can unwrap string", () => {
	expect(unwrap("{Conquest}", "{", "}")).toBe("Conquest");
	expect(unwrap("Conquest", "{", "}")).toBe("Conquest");
});
