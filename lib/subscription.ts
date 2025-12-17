export const PERIODS = [1, 3, 12] as const;

export type Period = (typeof PERIODS)[number];
