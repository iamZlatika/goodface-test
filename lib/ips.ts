export const STEPS = [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] as const;

export type Step = (typeof STEPS)[number];
