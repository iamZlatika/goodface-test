import BellIcon from "@/components/icons/bell-icon";
import clsx from "clsx";

interface NotificationBellProps {
    quantity: number;
}

const NotificationBell = ({ quantity }: NotificationBellProps) => {
    const showBadge = quantity > 0;

    return (
        <div className="relative inline-block">
            <BellIcon className="w-[13.3333px] h-[15px] text-grey-700" />

            {showBadge && (
                <span
                    className={clsx(
                        "absolute z-10 bottom-1 left-2.5 h-4 w-5 box-border",
                        "rounded-[20px] border-2 bg-brand-400 border-background",
                        "font-medium text-white text-[12px] leading-4 tracking-[0.2px]",
                        "inline-flex items-center justify-center text-center align-middle whitespace-nowrap",
                    )}
                >
                    {quantity}
                </span>
            )}
        </div>
    );
};

export default NotificationBell;
