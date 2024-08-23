export const chunk = <T>(a: T[], size: number): T[][] =>
    Array.from({ length: Math.ceil(a.length / size) }, (_, i) =>
        a.slice(i * size, (i + 1) * size)
    );