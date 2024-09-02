import * as a from "../../array";
import { max, maxBy, mean, median, min, minBy, mode, sum } from "../../number";
import * as o from "../../object";

export type Obj<T> = Record<string, T>;
export type Items<T> = T[] | Obj<T>;

export const collect = <T>(items?: Items<T>): Collection<T> =>
	new Collection<T>(items);

export class Collection<T> {
	private items: Items<T>;
	private isArray: boolean;

	constructor(items?: Items<T>) {
		this.items = items || [];
		this.isArray = Array.isArray(items);
	}

	private chain<U, V>(
		v: U,
		fn: (s: U, ...args: any[]) => V,
		...args: any[]
	): Collection<T> {
		this.items = fn(v, ...args) as unknown as Items<T>;
		return this;
	}

	/** Chain
	 *
	 * flip
	 * forget
	 * groupBy
	 * intersect
	 * keyBy
	 * map
	 * mapWithKeys
	 * merge
	 * multiply (copy)
	 * nth
	 * only
	 * pipe
	 * pluck
	 * prepend
	 * push
	 * put
	 * range
	 * reduce
	 * reject
	 * replace
	 * reverse
	 * select
	 * shuffle
	 * skip
	 * slice
	 * sort
	 * sortBy
	 * sortByDesc
	 * sortDesc
	 * sortKeys
	 * sortKeysDesc
	 * sortKeysUsing
	 * split
	 * splice
	 * take
	 * unique
	 * unless
	 * when
	 * where
	 * whereBetween
	 * whereIn
	 * zip
	 */

	flip() {
		return this.isArray ? this : this.chain(this.items as Obj<T>, o.flip);
	}

	forget(...keys: (keyof T)[]) {
		return this.isArray
			? this
			: this.chain(this.items as Obj<T>, o.forget, ...keys);
	}

	groupBy<K extends keyof T>(key: K) {
		return this.isArray ? this.chain(this.items as T[], a.groupBy, key) : this;
	}

	intersect(items: T[]) {
		return this.isArray
			? this.chain(this.items as T[], a.intersect, items)
			: this;
	}

	// keyBy<K extends keyof T>(key: K) {
	//     return this.isArray ? this.chain(this.items as T[], a.keyBy, key) : this;
	// }

	map(callback: (item: T, index: number) => T) {
		return this.isArray ? this.chain(this.items as T[], a.map, callback) : this;
	}

	/** T methods
	 *
	 * after
	 * all
	 * at
	 * contains
	 * keys
	 * first
	 * get
	 * last
	 * pop
	 * pull
	 * random
	 * search
	 * shift
	 * sole
	 * value
	 * values
	 */

	all(): Items<T> {
		return this.items;
	}

	at(index: number): T | undefined {
		return this.isArray ? a.at(this.items as T[], index) : undefined;
	}

	// contains(value: T): boolean {
	//     return this.isArray ? a.contains(this.items as T[], value) : a.contains(Object.values(this.items), value)
	// }

	keys(): string[] {
		return this.isArray ? [] : o.keys(this.items);
	}

	// first(): T|undefined {
	//     return this.isArray ? a.first(this.items) : o.first(this.items)
	// }

	/** Numerical methods
	 *
	 * average
	 * max
	 * maxBy
	 * median
	 * mode
	 * min
	 * minBy
	 * percentage
	 * sum
	 */

	// Typed methods

	//after
	//all
	//at
	//get

	// String methods

	// implode
	// join

	// Booleans

	// has
	// hasAny
	// isEmpty
	// isNotEmpty

	// after(index: number): T|undefined {
	//     return this.isArray ? undefined : a.next(this.items as T[], index)
	// }

	average(): number | undefined {
		return this.isArray ? undefined : mean(this.items as number[]);
	}

	// before(index: number): T|undefined {
	//     return this.isArray ? undefined : a.prev(this.items as T[], index)
	// }

	chunk(size: number): T[][] | undefined {
		return this.isArray ? undefined : a.chunk(this.items as T[], size);
	}

	// collapse(): T[]|undefined {
	//     return this.isArray ? undefined : a.collapse(this.items as T[])
	// }

	// combine

	// concat(): T[]|undefined {
	//     return this.isArray ? undefined : a.concat(this.items as T[])
	// }

	// contains(value: T): boolean {
	//     return this.isArray ? this.items[value] : a.contains(this.items as T[], value)
	// }

	count(): number {
		return a.count(
			(this.isArray ? Object.keys(this.items) : this.items) as T[],
		);
	}

	// duplicates(): T[]|undefined {
	//     return this.isArray ? undefined : a.duplicates(this.items as T[])
	// }

	each(callback: (item: T, index: number) => void): void {
		return a.each(
			this.isArray ? Object.values(this.items) : (this.items as T[]),
			callback,
		);
	}

	every(callback: (item: T, index: number) => boolean): boolean {
		return a.every(
			this.isArray ? Object.values(this.items) : (this.items as T[]),
			callback,
		);
	}

	// except(values: T[]): T[] {

	// filter(callback: (item: T, index: number) => boolean): T[] {
	//     return a.filter(this.isArray ? Object.values(this.items) : this.items as T[], callback)
	// }

	// first(fn?: (item: T, index: number) => boolean): T|undefined {
	//     return this.isArray ? undefined : a.first(this.items as T[], fn)
	// }

	toJSON(): Items<T> {
		return this.items;
	}
}

Object.defineProperty(Collection.prototype, "toJSON", {
	enumerable: false,
	value: Collection.prototype.toJSON,
});
