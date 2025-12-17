"use client";

import { useCallback, useMemo, useRef, type PointerEvent } from "react";

import { clamp, indexToPercent, pointerXToStepIndex, valueToIndex } from "./utils";
import IpsMarker from "@/components/features/main-card/ips-quantity/ips-marker";
import { type Step, STEPS } from "@/lib/ips";

type IpsSliderProps = {
    steps: typeof STEPS;
    value: Step;
    onChangeAction: (next: Step) => void;
};

const IpsSlider = ({ steps, value, onChangeAction }: IpsSliderProps) => {
    const trackRef = useRef<HTMLDivElement | null>(null);

    const stepIndex = useMemo(() => valueToIndex(steps, value), [steps, value]);
    const percent = useMemo(
        () => indexToPercent(steps.length, stepIndex),
        [steps.length, stepIndex],
    );

    const setByClientX = useCallback(
        (clientX: number) => {
            const el = trackRef.current;
            if (!el) {
                return;
            }

            const rect = el.getBoundingClientRect();
            const idx = pointerXToStepIndex({
                clientX,
                rectLeft: rect.left,
                rectWidth: rect.width,
                stepsCount: steps.length,
            });

            const next = steps[idx] ?? steps[0];
            onChangeAction(next);
        },
        [onChangeAction, steps],
    );

    const onPointerDown = useCallback(
        (e: PointerEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.currentTarget.setPointerCapture(e.pointerId);
            setByClientX(e.clientX);
        },
        [setByClientX],
    );

    const onPointerMove = useCallback(
        (e: PointerEvent<HTMLDivElement>) => {
            if (!e.currentTarget.hasPointerCapture(e.pointerId)) {
                return;
            }
            setByClientX(e.clientX);
        },
        [setByClientX],
    );

    const leftPercent = clamp(percent, 0, 100);

    return (
        <div
            ref={trackRef}
            className="relative h-2 rounded-full bg-grey-100 cursor-pointer select-none touch-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            role="slider"
            aria-label="IPs quantity"
            aria-valuemin={steps[0] ?? 0}
            aria-valuemax={steps.at(-1) ?? 0}
            aria-valuenow={value}
        >
            <div
                className="h-2 rounded-full bg-brand-400 transition-[width] duration-200 ease-out"
                style={{ width: `${leftPercent}%` }}
            />

            <IpsMarker value={value} leftPercent={leftPercent} />
        </div>
    );
};

export default IpsSlider;
