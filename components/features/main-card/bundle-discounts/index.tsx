"use client";

import { useState } from "react";
import ChevronUpIcon from "@/components/icons/chevron-up";
import { QUANTITY_RANGES, UNIT_PRICES_BY_RANGE } from "@/lib/discounts";
import { dictionary } from "@/lib/i18n/dictionary";
import clsx from "clsx";

const BundleDiscounts = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full  mt-6">
            <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                className="inline-flex items-center gap-2"
            >
                <span className="text-body2 font-medium tracking-normal text-grey-900">
                    {dictionary.main.bundle_discounts}
                </span>

                <span
                    className={`transition-transform duration-200 ease-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                >
                    <ChevronUpIcon />
                </span>
            </button>

            <div
                className={clsx(
                    "overflow-hidden transition-[max-height,opacity] duration-200 ease-out",
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
                )}
            >
                <div className="mt-3 overflow-hidden rounded-lg border border-grey-100 bg-white">
                    <table className="w-full table-fixed border-collapse">
                        <thead className="bg-grey-50">
                            <tr>
                                <th className="w-40 px-4 py-2 text-left text-body2 font-medium text-grey-500">
                                    {dictionary.main.table.th_IPs}
                                </th>

                                {QUANTITY_RANGES.map((r) => (
                                    <th
                                        key={r.key}
                                        className="px-4 py-2 text-left text-body2 font-medium text-grey-500"
                                    >
                                        ${UNIT_PRICES_BY_RANGE[r.key].toFixed(2)}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t border-grey-100">
                                <td className="px-4 py-2 text-body2 font-medium text-grey-700">
                                    {dictionary.main.table.th_IPs}
                                </td>

                                {QUANTITY_RANGES.map((r) => (
                                    <td
                                        key={r.key}
                                        className="px-4 py-2 text-body2 font-medium text-grey-700"
                                    >
                                        {r.key}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BundleDiscounts;
