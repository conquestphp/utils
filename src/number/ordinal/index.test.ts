import { it, expect } from "vitest";
import { ordinal } from ".";

it("should return correct ordinal suffixes", () => {
	expect(ordinal(1)).toBe("1st");
	expect(ordinal(2)).toBe("2nd");
	expect(ordinal(3)).toBe("3rd");
	expect(ordinal(4)).toBe("4th");
	expect(ordinal(11)).toBe("11th");
	expect(ordinal(21)).toBe("21st");
	expect(ordinal(22)).toBe("22nd");
	expect(ordinal(23)).toBe("23rd");
	expect(ordinal(100)).toBe("100th");
	expect(ordinal(101)).toBe("101st");
});
