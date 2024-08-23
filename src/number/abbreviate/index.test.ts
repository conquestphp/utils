import { it, expect } from "vitest";
import { abbreviate } from ".";

it("should abbreviate numbers correctly", () => {
	expect(abbreviate(1000)).toBe("1K");
	expect(abbreviate(1500)).toBe("1.5K");
	expect(abbreviate(1000000)).toBe("1M");
	expect(abbreviate(1500000)).toBe("1.5M");
	expect(abbreviate(1000000000)).toBe("1B");
});
