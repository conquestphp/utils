import { contains } from "../contains";

export const containsAll = (v: string, ts: string[], c = false) =>
	ts.every((t) => contains(v, t, c));
