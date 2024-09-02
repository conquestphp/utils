import { expect, it } from "vitest";
import { shift } from ".";

it("should shift an array", () => {
	expect(shift([1, 2, 3, 4, 5])).toEqual(1);
});

it("should modify the original array", () => {
	const arr = [1, 2, 3, 4, 5];
	shift(arr);
	expect(arr).toEqual([2, 3, 4, 5]);
});
