"use client";

import { useMemo, useState } from "react";

import IpsSlider from "./ips-slider";
import StepLabels from "./steps-labels";
import { nearestStep } from "./utils";
import { type Step, STEPS } from "@/lib/ips";
import { dictionary } from "@/lib/i18n/dictionary";
import ChangeButton from "@/components/ui/buttons/change-button";
import EditIcon from "@/components/icons/edit-icon";
import clsx from "clsx";

type Mode = "range" | "custom";

interface IpsQuantityProps {
    value: number;
    onChange: (v: number) => void;
}

const IpsQuantity = ({ value, onChange }: IpsQuantityProps) => {
    const [mode, setMode] = useState<Mode>("range");
    const [customValue, setCustomValue] = useState<string>(String(value ?? ""));

    const rangeStep: Step = useMemo(() => {
        return nearestStep(STEPS, value) as Step;
    }, [value]);

    const buttonLabel =
        mode === "range"
            ? dictionary.main.ips_quantity_button.enter
            : dictionary.main.ips_quantity_button.select;

    return (
        <div className="w-full">
            {mode === "range" ? (
                <div className="relative pt-16">
                    <IpsSlider
                        steps={STEPS}
                        value={rangeStep}
                        onChangeAction={(nextStep: Step) => onChange(nextStep)}
                    />
                    <StepLabels
                        steps={STEPS}
                        value={rangeStep}
                        onChange={(nextStep) => onChange(nextStep)}
                    />
                </div>
            ) : (
                <div className="mt-4 flex w-full max-w-[632px] flex-col gap-2">
                    <label className="text-body2 font-medium text-grey-700">
                        {dictionary.main.custom_quantity_label}
                    </label>

                    <input
                        autoFocus
                        value={customValue}
                        onChange={(e) => {
                            const digitsOnly = e.target.value.replace(/\D+/g, "");
                            setCustomValue(digitsOnly);

                            if (digitsOnly === "") return;
                            const n = Number.parseInt(digitsOnly, 10);
                            if (!Number.isNaN(n)) {
                                onChange(n);
                            }
                        }}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        className={clsx(
                            "w-full h-10 rounded-sm border border-[#D2D6DB]",
                            "px-3 py-2",
                            "text-body2 text-grey-900",
                            "outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20",
                        )}
                    />
                </div>
            )}

            <ChangeButton
                label={buttonLabel}
                startIcon={<EditIcon />}
                onClick={() => {
                    setMode((m) => {
                        const next = m === "range" ? "custom" : "range";
                        if (next === "custom") {
                            setCustomValue(String(value ?? ""));
                        }
                        return next;
                    });
                }}
            />
        </div>
    );
};

export default IpsQuantity;
