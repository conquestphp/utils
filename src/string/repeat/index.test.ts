import { it, expect } from "vitest";
import { repeat } from ".";

it("can repeat string", () => {
	expect(repeat("Hi", 3)).toBe("HiHiHi");
});
