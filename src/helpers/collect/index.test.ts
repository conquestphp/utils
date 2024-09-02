import { expect, it } from "vitest";
import { collect, Collection } from "./index";

it("collects using a Collection class", () => {
	expect(collect()).toBeInstanceOf(Collection);
});
