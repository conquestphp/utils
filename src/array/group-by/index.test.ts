import { expect, it } from "vitest";
import { groupBy } from ".";

it("should group by a numeric property", () => {
	const result = groupBy(
		[
			{ name: "John", age: 20 },
			{ name: "Jane", age: 20 },
			{ name: "John", age: 30 },
		],
		"age",
	);
	expect(result).toEqual({
		"20": [
			{ name: "John", age: 20 },
			{ name: "Jane", age: 20 },
		],
		"30": [{ name: "John", age: 30 }],
	});
});

it("should group by a string property", () => {
	const result = groupBy(
		[
			{ name: "John", age: 20 },
			{ name: "Jane", age: 20 },
			{ name: "John", age: 30 },
		],
		"name",
	);
	expect(result).toEqual({
		John: [
			{ name: "John", age: 20 },
			{ name: "John", age: 30 },
		],
		Jane: [{ name: "Jane", age: 20 }],
	});
});

it("handles non-existing property with original array", () => {
	const o = [
		{ name: "John", age: 20 },
		{ name: "Jane", age: 20 },
		{ name: "John", age: 30 },
	];
	const result = groupBy(o, "gender");
	expect(result).toEqual({ undefined: o });
});
