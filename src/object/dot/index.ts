import { isNumber } from "../../logic";

export const dot = (key: string): (string | number)[] =>
	key.split(".").map((part) => (isNumber(Number(part)) ? Number(part) : part));
