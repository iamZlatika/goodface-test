"use client";

import FourDotsIcon from "@/components/icons/four-dots-icon";
import clsx from "clsx";

type Props = {
    value: number;
    leftPercent: number;
};

export default function IpsMarker({ value, leftPercent }: Props) {
    const KNOB = 22;
    const KNOB_HALF = KNOB / 2;

    const STEM_W = 10;
    const STEM_H = 8;

    const GAP_TO_KNOB = 0;

    return (
        <div
            className="absolute inset-y-0 transition-[left] duration-200 ease-out"
            style={{ left: `${leftPercent}%` }}
            aria-hidden="true"
        >
            <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{
                    top: `calc(50% - ${KNOB_HALF}px - ${GAP_TO_KNOB + STEM_H}px)`,
                    width: `${STEM_W}px`,
                    height: `${STEM_H}px`,
                }}
            >
                <div
                    className={clsx(
                        "absolute left-1/2 -translate-x-1/2 bottom-full mb-0",
                        "bg-brand-500 text-white",
                        "rounded-sm h-8 px-2 py-1",
                        "inline-flex items-center justify-center",
                        "whitespace-nowrap",
                    )}
                >
                    <span className="text-body2 font-medium tracking-normal">{value} IP</span>
                </div>
                <div className="relative overflow-hidden w-full h-full bg-brand-500">
                    <div className="absolute left-[-3px] top-0 h-2 w-1.5 rounded-full bg-white" />
                    <div className="absolute right-[-3px] top-0 h-2 w-1.5 rounded-full bg-white" />
                </div>
            </div>
            <div
                className={clsx(
                    "absolute left-1/2 -translate-x-1/2",
                    "h-[22px] w-[22px]",
                    "rounded-[3px]",
                    "border border-brand-500 bg-white",
                    "flex items-center justify-center",
                )}
                style={{ top: `calc(50% - ${KNOB_HALF}px)` }}
            >
                <FourDotsIcon />
            </div>
        </div>
    );
}
