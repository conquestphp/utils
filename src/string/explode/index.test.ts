import { it, expect } from "vitest";
import { explode } from ".";

it("can explode string into array", () => {
	expect(explode("Hello World", " ")).toEqual(["Hello", "World"]);
});
