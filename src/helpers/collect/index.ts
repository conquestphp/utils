import { at as arrayAt } from "../../array"

export type Items<T = any> = Array<T> | Record<string, T>

export const collect = <T>(items?: Items<T>): Collection<T> => 
    new Collection<T>(items)

class Collection<T = any> {
    private items: Items<T>

    constructor(items?: Items<T>) {
        this.items = items || []
    }

    all(): T[] {
        return Array.isArray(this.items) ? this.items : Object.values(this.items)
    }

    at(index: number): T | undefined {
        return Array.isArray(this.items) ? arrayAt(this.items, index) : this.items[String(index)]
    }

    toJSON(): Items<T> {
        return this.items
    }
}

Object.defineProperty(Collection.prototype, 'toJSON', {
    enumerable: false,
    value: Collection.prototype.toJSON
})