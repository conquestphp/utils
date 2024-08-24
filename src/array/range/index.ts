export const range = (s: number, e: number) => 
    Array.from({ length: e - s + 1 }, (_, i) => s + i)