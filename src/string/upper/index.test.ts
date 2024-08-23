import { it, expect } from "vitest";
import { upper } from ".";

it("can convert string to uppercase", () => {
	expect(upper("conquest")).toBe("CONQUEST");
	expect(upper("Conquest")).toBe("CONQUEST");
});
