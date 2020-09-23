export const add = (...numbers: number[]): number => {
    return numbers.reduce((acc, val) => acc + val, 0);
};
