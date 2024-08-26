import * as a from "../../array"
import * as n from "../../number"

export type Items<T = any> = T[] | Record<string, T>

export const collect = <T>(items?: Items<T>): Collection<T> => 
    new Collection<T>(items)

export class Collection<T = any> {
    private items: Items<T>
    private associative: boolean

    constructor(items?: Items<T>) {
        this.items = items || []
        this.associative = typeof items === 'object'
    }

    private chain(
		fn: (s: Items<T>, ...args: any[]) => Items<T>,
		...args: any[]
	): Collection<T> {
		this.items = fn(this.items, ...args);
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

    /** T methods
     * 
     * after
     * all
     * at
     * all
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
    //     return this.associative ? undefined : a.next(this.items as T[], index)
    // }

    all(): Items<T> {
        return this.items
    }

    at(index: number): T|undefined {
        return this.associative ? undefined : a.at(this.items as T[], index)
    }

    average(): number|undefined {
        return this.associative ? undefined : n.mean(this.items as number[])
    }

    // before(index: number): T|undefined {
    //     return this.associative ? undefined : a.prev(this.items as T[], index)
    // }

    chunk(size: number): T[][]|undefined {
        return this.associative ? undefined : a.chunk(this.items as T[], size)
    }

    // collapse(): T[]|undefined {
    //     return this.associative ? undefined : a.collapse(this.items as T[])
    // }

    // combine

    // concat(): T[]|undefined {
    //     return this.associative ? undefined : a.concat(this.items as T[])
    // }

    // contains(value: T): boolean {
    //     return this.associative ? this.items[value] : a.contains(this.items as T[], value)
    // }

    count(): number {
        return a.count((this.associative ? Object.keys(this.items) : this.items) as T[])
    }

    // duplicates(): T[]|undefined {
    //     return this.associative ? undefined : a.duplicates(this.items as T[])
    // }

    each(callback: (item: T, index: number) => void): void {
        return a.each(this.associative ? Object.values(this.items) : this.items as T[], callback)
    }

    every(callback: (item: T, index: number) => boolean): boolean {
        return a.every(this.associative ? Object.values(this.items) : this.items as T[], callback)
    }

    // except(values: T[]): T[] {

    // filter(callback: (item: T, index: number) => boolean): T[] {
    //     return a.filter(this.associative ? Object.values(this.items) : this.items as T[], callback)
    // }

    // first(fn?: (item: T, index: number) => boolean): T|undefined {
    //     return this.associative ? undefined : a.first(this.items as T[], fn)
    // }

















    toJSON(): Items<T> {
        return this.items
    }
}

Object.defineProperty(Collection.prototype, 'toJSON', {
    enumerable: false,
    value: Collection.prototype.toJSON
})