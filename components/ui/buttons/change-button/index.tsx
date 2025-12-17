import type { ReactNode } from "react";
import clsx from "clsx";

interface ChangeButtonProps {
    label: string;
    startIcon?: ReactNode;
    onClick?: () => void;
}

const ChangeButton = ({ label, startIcon, onClick }: ChangeButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={clsx(
                "mt-4 inline-flex items-center gap-2 rounded-md border border-grey-100 bg-white",
                "px-3 py-2",
                "text-body2 font-medium tracking-normal text-grey-700",
                "hover:bg-grey-50 transition-colors",
            )}
        >
            {startIcon ? <span className="shrink-0">{startIcon}</span> : null}
            <span>{label}</span>
        </button>
    );
};

export default ChangeButton;
