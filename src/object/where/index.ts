export const where = <T>(obj: Record<string, T>, key: keyof T, value: any) => {
    return obj[key] === value ? obj : undefined;
}