import { it, expect } from "vitest";
import { isEmail } from ".";

it("can check if string is valid email", () => {
	expect(isEmail("user@example.com")).toBe(true);
	expect(isEmail("invalid-email")).toBe(false);
});
