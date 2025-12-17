import clsx from "clsx";

interface ContinueButtonProps {
    label: string;
    onClick?: () => void;
}

const ContinueButton = ({ label, onClick }: ContinueButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={clsx(
                "my-4 w-full max-w-[680px] h-10 inline-flex items-center justify-center gap-2 rounded-sm",
                "px-4 py-2 bg-brand-500 text-white",
                "text-body2 font-medium tracking-[-0.2px]",
                "transition-colors hover:bg-brand-400 disabled:opacity-60 disabled:cursor-not-allowed",
            )}
        >
            <span className="text-center">{label}</span>
        </button>
    );
};

export default ContinueButton;
