import { it, expect } from "vitest";
import { before } from ".";

it("can separate before a string", () => {
	expect(before("This is my name", "my name")).toBe("This is ");
	expect(before("This is my name", ".")).toBe("This is my name");
});
