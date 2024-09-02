import { expect, it } from "vitest";
import { join } from ".";

it("should return an empty string if the array is empty", () => {
	expect(join([])).toBe("");
});

it("should join the items of the array with the separator", () => {
	expect(join([1, 2, 3])).toBe("1, 2, 3");
});

it("should join the items of the array with the final separator", () => {
	expect(join([1, 2, 3], ", ", " and ")).toBe("1, 2 and 3");
});
