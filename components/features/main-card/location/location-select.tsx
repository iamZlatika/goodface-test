"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import ChevronDownIcon from "@/components/icons/chevron-down";
import type { LocationCode, LocationOption } from "@/lib/location";
import clsx from "clsx";

type Props = {
    options: LocationOption[];
    value: LocationCode;
    onChange: (next: LocationCode) => void;
};

const LocationSelect = ({ options, value, onChange }: Props) => {
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!open) {
            return;
        }

        const onPointerDown = (e: PointerEvent) => {
            const root = rootRef.current;
            const target = e.target as Node | null;

            if (!root || !target) {
                return;
            }

            if (!root.contains(target)) {
                setOpen(false);
            }
        };

        document.addEventListener("pointerdown", onPointerDown);

        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
        };
    }, [open]);

    const selected = useMemo(() => {
        return options.find((o) => o.code === value);
    }, [options, value]);

    return (
        <div ref={rootRef} className="relative w-full">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={open}
                className={clsx(
                    "w-full h-10",
                    "flex items-center justify-between gap-2",
                    "rounded-sm border border-(--color-grey-300) bg-white px-3",
                    "text-body2 text-grey-900",
                )}
            >
                <span className="flex min-w-0 items-center gap-2">
                    {selected ? (
                        <>
                            <Image
                                src={selected.flagSrc}
                                alt=""
                                width={20}
                                height={14}
                                className="shrink-0"
                            />
                            <span className="truncate font-medium text-grey-900">
                                {selected.label}
                            </span>
                        </>
                    ) : (
                        <span className="truncate text-grey-500">Select location</span>
                    )}
                </span>

                <ChevronDownIcon
                    className={clsx(
                        "shrink-0 text-grey-700",
                        "transition-transform duration-200 ease-out",
                        open ? "rotate-180" : "rotate-0",
                    )}
                />
            </button>

            {open ? (
                <div
                    role="listbox"
                    className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-sm border border-[#D2D6DB] bg-white p-1"
                >
                    {options.map((o) => {
                        const active = o.code === value;

                        return (
                            <button
                                key={o.code}
                                type="button"
                                role="option"
                                aria-selected={active}
                                onClick={() => {
                                    onChange(o.code);
                                    setOpen(false);
                                }}
                                className={clsx(
                                    "w-full flex items-center gap-2 rounded-sm px-2 py-2 text-left transition-colors",
                                    active ? "bg-grey-50" : "hover:bg-grey-50",
                                )}
                            >
                                <Image
                                    src={o.flagSrc}
                                    alt=""
                                    width={20}
                                    height={14}
                                    className="shrink-0"
                                />
                                <span className="text-body2 font-medium text-grey-900">
                                    {o.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
};

export default LocationSelect;
