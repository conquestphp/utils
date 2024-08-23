export const maxBy = <T>(args: T[], by?: (arg: T) => number | string): T =>
        args.reduce((m, c) => by ? by(c) > by(m) ? c : m : c > m ? c : m);
