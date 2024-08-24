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

    after(index: number): T|undefined {
        return this.associative ? undefined : a.next(this.items as T[], index)
    }

    all(): Items<T> {
        return this.items
    }

    at(index: number): T|undefined {
        return this.associative ? undefined : a.at(this.items as T[], index)
    }

    average(): number|undefined {
        return this.associative ? undefined : n.mean(this.items as number[])
    }
    
    before(index: number): T|undefined {
        return this.associative ? undefined : a.prev(this.items as T[], index)
    }



    toJSON(): Items<T> {
        return this.items
    }
}

Object.defineProperty(Collection.prototype, 'toJSON', {
    enumerable: false,
    value: Collection.prototype.toJSON
})