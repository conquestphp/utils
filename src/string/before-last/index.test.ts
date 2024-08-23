import { it, expect } from "vitest";
import { beforeLast } from ".";

it("can separate before last instance of a string", () => {
	expect(beforeLast("This is my name", "is")).toBe("This ");
	expect(beforeLast("This is my name", "isn't")).toBe("This is my name");
});
