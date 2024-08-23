export const maxBy = <T>(args: T[], by?: (arg: T) => number | string): T => {
    let max = args[0];
    for (let i = 1; i < args.length; i++) {
        const aValue = by ? by(max) : max;
        const bValue = by ? by(args[i]) : args[i];
        if (bValue > aValue) max = args[i];
    }
    return max;
};

// export const maxBy = <T>(args: T[], by?: (arg: T) => number | string): T =>
//     args.sort((a, b) => {
//         const aValue = by ? by(a) : a;
//         const bValue = by ? by(b) : b;
//         return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
//     })[args.length - 1];