import { isNumber } from "../../logic";

export const dot = (key: string): (string | number)[] =>
	key.split(".").map((part) => (isNumber(part) ? Number(part) : part));
