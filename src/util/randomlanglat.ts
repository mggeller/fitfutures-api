export const getRandomInRange = (from: number, to: number, fixed: number) => {
    return Number((Math.random() * (to - from) + from).toFixed(fixed));
}