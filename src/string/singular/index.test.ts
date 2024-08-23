import { it, expect } from "vitest";
import { singular } from ".";

it("can convert string to singular form", () => {
	expect(singular("cars")).toBe("car");
	expect(singular("babies")).toBe("baby");
	expect(singular("analyses")).toBe("analyse");
});
