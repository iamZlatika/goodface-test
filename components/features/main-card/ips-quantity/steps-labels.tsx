import type { Step } from "@/lib/ips";

type Props = {
    steps: readonly Step[];
    value: Step;
    onChange: (next: Step) => void;
};

const StepLabels = ({ steps, value, onChange }: Props) => {
    return (
        <div className="mt-3 flex justify-between text-[12px] leading-4 font-medium text-grey-500">
            {steps.map((step) => (
                <button
                    key={step}
                    type="button"
                    onClick={() => onChange(step)}
                    className={`relative -mx-1 px-1 py-1 transition-colors ${
                        step === value ? "text-grey-900" : "hover:text-grey-700"
                    }`}
                >
                    {step}
                </button>
            ))}
        </div>
    );
};

export default StepLabels;
