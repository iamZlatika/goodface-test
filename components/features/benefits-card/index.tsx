import { dictionary } from "@/lib/i18n/dictionary";
import CheckedIcon from "@/components/icons/checked-icon";
import clsx from "clsx";

const BenefitsCard = () => {
    const benefits = Object.values(dictionary.plan.benefits);
    return (
        <div
            className={clsx(
                "mt-6 w-[680px] bg-white flex-1",
                "flex flex-col",
                "rounded-t-lg rounded-b-none",
                "p-6",
                "border-t border-x border-grey-100",
            )}
        >
            <h6 className="text-h6 font-medium text-grey-900">{dictionary.plan.title}</h6>
            <ul className="mt-2 grid grid-cols-2 gap-x-6 gap-y-2">
                {benefits.map((text) => (
                    <li key={text} className="flex items-center gap-2">
                        <CheckedIcon />
                        <span className="text-body2 font-medium tracking-[-0.2px] text-grey-600">
                            {text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default BenefitsCard;
