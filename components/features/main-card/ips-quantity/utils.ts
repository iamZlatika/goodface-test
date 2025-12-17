export function clamp(n: number, min: number, max: number) {
    return Math.min(Math.max(n, min), max);
}

export function valueToIndex(steps: readonly number[], value: number) {
    const idx = steps.indexOf(value);
    if (idx >= 0) {
        return idx;
    }
    return 0;
}

export function nearestStep(steps: readonly number[], value: number) {
    if (steps.length === 0) {
        return 0;
    }

    let best = steps[0] ?? 0;

    for (let i = 1; i < steps.length; i += 1) {
        const s = steps[i] ?? 0;

        const bestDist = Math.abs(best - value);
        const dist = Math.abs(s - value);

        if (dist < bestDist || (dist === bestDist && s > best)) {
            best = s;
        }
    }
    return best;
}

export function indexToPercent(stepsCount: number, index: number) {
    const lastIndex = stepsCount - 1;
    if (lastIndex <= 0) {
        return 0;
    }
    return (clamp(index, 0, lastIndex) / lastIndex) * 100;
}

export function pointerXToStepIndex(params: {
    clientX: number;
    rectLeft: number;
    rectWidth: number;
    stepsCount: number;
}) {
    const { clientX, rectLeft, rectWidth, stepsCount } = params;
    const lastIndex = stepsCount - 1;

    if (lastIndex <= 0 || rectWidth <= 0) {
        return 0;
    }

    const x = clamp(clientX - rectLeft, 0, rectWidth);
    const ratio = x / rectWidth;

    return clamp(Math.round(ratio * lastIndex), 0, lastIndex);
}
