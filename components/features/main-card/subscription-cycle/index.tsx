import type { Period } from "@/lib/subscription";
import { PERIODS } from "@/lib/subscription";
import SubscriptionRadioItem from "./subscribtion-radio-item";
import clsx from "clsx";
import { dictionary } from "@/lib/i18n/dictionary";

interface SubscriptionCycleProps {
    period: Period;
    setPeriod: (period: Period) => void;
}

function periodLabel(p: Period) {
    return p === 1 ? "1 month" : `${p} months`;
}

const SubscriptionCycle = ({ period, setPeriod }: SubscriptionCycleProps) => {
    return (
        <div className="flex flex-col gap-2 pt-2">
            {PERIODS.map((p) => (
                <SubscriptionRadioItem
                    key={p}
                    active={p === period}
                    label={periodLabel(p)}
                    badge={
                        p === 12 ? (
                            <span
                                className={clsx(
                                    "inline-flex items-center justify-center",
                                    "w-[68px] h-5",
                                    "rounded border border-green-300 bg-green-50",
                                    "text-[12px] leading-4 font-medium tracking-[0.2px]",
                                    "text-[#136C34]",
                                )}
                            >
                                {dictionary.main.badge}
                            </span>
                        ) : null
                    }
                    onSelect={() => setPeriod(p)}
                />
            ))}
        </div>
    );
};

export default SubscriptionCycle;
