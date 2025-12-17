import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
    active: boolean;
    label: string;
    onSelect: () => void;
    badge?: ReactNode;
};

const SubscriptionRadioItem = ({ active, label, onSelect, badge }: Props) => {
    return (
        <button
            type="button"
            onClick={onSelect}
            role="radio"
            aria-checked={active}
            className={clsx(
                "w-full h-12",
                "flex items-center gap-2",
                "rounded p-3",
                "transition-colors",
                active
                    ? "border-2 border-brand-500 bg-brand-50"
                    : "border border-[#D2D6DB] bg-white hover:bg-grey-50",
            )}
        >
            {active ? (
                <span
                    className="relative h-4 w-4 rounded-full bg-brand-500 shrink-0"
                    aria-hidden="true"
                >
                    <span
                        className={clsx(
                            "absolute left-1/2 top-1/2",
                            "h-1.5 w-1.5",
                            "-translate-x-1/2 -translate-y-1/2",
                            "rounded-full bg-white",
                        )}
                    />
                </span>
            ) : (
                <span
                    className="h-4 w-4 rounded-full border border-[#D2D6DB] bg-white shrink-0"
                    aria-hidden="true"
                />
            )}

            <span className="flex min-w-0 flex-1 items-center gap-2">
                <span className="truncate text-body1 font-medium text-grey-900">{label}</span>
                {badge ? <span className="shrink-0">{badge}</span> : null}
            </span>
        </button>
    );
};

export default SubscriptionRadioItem;
