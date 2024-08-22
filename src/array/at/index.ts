export const at = <T>(arr: T[], i: number): T | undefined => {
    try {
        return arr[i];
    } catch (e) {
        return undefined;
    }
};