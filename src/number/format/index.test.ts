import { it, expect } from "vitest";
import { format } from ".";

it("should format numbers with default precision and locale", () => {
	expect(format(1234.5678)).toBe("1,234.57");
	expect(format(1234.5)).toBe("1,234.5");
	expect(format(1234)).toBe("1,234");
});

it("should format numbers with custom precision", () => {
	expect(format(1234.5678, 3)).toBe("1,234.568");
	expect(format(1234.5678, 1)).toBe("1,234.6");
});

it("should format numbers with custom locale", () => {
	expect(format(1234.56, 2, "de-DE")).toBe("1.234,56");
});
