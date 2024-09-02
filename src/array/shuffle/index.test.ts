import { expect, it } from "vitest";
import { shuffle } from ".";

it("should shuffle an array", () => {
	expect(shuffle([1, 2, 3, 4, 5])).toEqual(
		expect.arrayContaining([1, 2, 3, 4, 5]),
	);
});
