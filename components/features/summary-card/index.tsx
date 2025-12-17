"use client";

import { dictionary } from "@/lib/i18n/dictionary";

import CheckedIcon from "@/components/icons/checked-icon";
import { useOrder } from "@/providers/order-provider";
import { getLocationOptions } from "@/lib/location";
import DefaultButton from "@/components/ui/buttons/default-button";
import clsx from "clsx";
import Card from "@/components/ui/card";

const SummaryCard = () => {
    const benefits = Object.values(dictionary.summary.benefits);

    const { quantity, location, unitPrice, total, period } = useOrder();
    const locationLabel =
        getLocationOptions().find((o) => o.code === location)?.label ?? String(location);

    const periodLabel = period === 1 ? "1 month" : `${period} months`;
    const priceLabel = `$${unitPrice.toFixed(2)}`;
    const quantityLabel = `${quantity} IPs`;
    const totalLabel = `$${total.toFixed(2)}`;

    const rows = [
        {
            key: "quantity",
            left: dictionary.summary.selectedOptions.quantity,
            right: quantityLabel,
        },
        {
            key: "location",
            left: dictionary.summary.selectedOptions.location,
            right: locationLabel,
        },
        { key: "price", left: dictionary.summary.selectedOptions.price, right: priceLabel },
        { key: "period", left: dictionary.summary.selectedOptions.period, right: periodLabel },
    ] as const;

    return (
        <div>
            <Card>
                <h5 className="text-h5 font-medium text-grey-900">{dictionary.summary.title}</h5>

                <h6 className="text-body1 font-medium text-grey-900 mt-4">
                    {dictionary.summary.subtitle}
                </h6>

                <ul className="flex flex-col gap-2 mt-2">
                    {benefits.map((text) => (
                        <li key={text} className="flex items-center gap-2">
                            <CheckedIcon />
                            <span className="text-body2 font-medium tracking-[-0.2px] text-grey-600">
                                {text}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="mt-4 flex flex-col gap-3">
                    {rows.map((row) => (
                        <div key={row.key} className="flex items-center justify-between gap-4">
                            <div className="text-body2 font-medium tracking-[-0.2px] text-grey-600">
                                {row.left}
                            </div>
                            <div className="text-body2 font-medium tracking-[-0.2px] text-right text-grey-900">
                                {row.right}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-2 mt-8 ">
                    <input
                        className={clsx(
                            "w-[243px] h-7 rounded-sm border border-[#D2D6DB]",
                            "py-1 pr-2 pl-3",
                            "text-body2 font-medium tracking-[-0.2px] text-grey-900",
                            "placeholder:text-grey-500 placeholder:font-medium placeholder:tracking-[-0.2px]",
                            "outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20",
                        )}
                        placeholder={dictionary.summary.discount_placeholder}
                    />
                    <DefaultButton label={dictionary.summary.discount_button} />
                </div>

                <div className="flex justify-between pt-4 border-t border-[#D2D6DB] mt-4">
                    <span className="text-body2 font-medium text-grey-700">
                        {dictionary.summary.total}
                    </span>
                    <span className="text-h4 font-medium text-grey-900">{totalLabel}</span>
                </div>
            </Card>
        </div>
    );
};

export default SummaryCard;
