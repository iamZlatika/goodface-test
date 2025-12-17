export type QuantityRangeKey = "10-24" | "25-49" | "50-99" | "100+";

export type QuantityRange = {
    key: QuantityRangeKey;
    min: number;
    max: number | null;
};

export const QUANTITY_RANGES: readonly QuantityRange[] = [
    { key: "10-24", min: 10, max: 24 },
    { key: "25-49", min: 25, max: 49 },
    { key: "50-99", min: 50, max: 99 },
    { key: "100+", min: 100, max: null },
] as const;

export const UNIT_PRICES_BY_RANGE: Record<QuantityRangeKey, number> = {
    "10-24": 3.0,
    "25-49": 2.75,
    "50-99": 2.5,
    "100+": 2.25,
} as const;

export function findQuantityRange(quantity: number): QuantityRange {
    const q = Number.isFinite(quantity) ? quantity : 0;

    if (q < (QUANTITY_RANGES[0]?.min ?? 0)) {
        return QUANTITY_RANGES[0]!;
    }

    const found = QUANTITY_RANGES.find((r) => q >= r.min && (r.max === null || q <= r.max));
    return found ?? QUANTITY_RANGES.at(-1)!;
}

export function getUnitPrice(quantity: number): number {
    const range = findQuantityRange(quantity);
    return UNIT_PRICES_BY_RANGE[range.key];
}

export function calcTotal(params: { quantity: number; period: number; unitPrice: number }) {
    const { quantity, period, unitPrice } = params;

    const q = Number.isFinite(quantity) ? quantity : 0;
    const p = Number.isFinite(period) ? period : 0;
    const u = Number.isFinite(unitPrice) ? unitPrice : 0;

    return q * u * p;
}
