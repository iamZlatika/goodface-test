import type { ReactNode } from "react";
import clsx from "clsx";

interface DefaultButtonProps {
    label: string;
    startIcon?: ReactNode;
    fullWidth?: boolean;
    onClick?: () => void;
}

const DefaultButton = ({ label, startIcon, fullWidth, onClick }: DefaultButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={clsx(
                "inline-flex items-center justify-center",
                fullWidth ? "w-full" : "w-fit",
                "px-3 py-1 rounded border border-grey-100",
                "bg-white",
                "text-[13px] leading-5 font-bold tracking-normal font-sans",
                "text-grey-700 hover:bg-grey-50 transition-colors",
                "gap-[7.33px] max-h-7",
            )}
        >
            {startIcon ? <span className="shrink-0">{startIcon}</span> : null}
            <span>{label}</span>
        </button>
    );
};

export default DefaultButton;
