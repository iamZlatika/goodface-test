import type { PropsWithChildren } from "react";
import clsx from "clsx";

const Card = ({ children }: PropsWithChildren) => {
    return (
        <div
            className={clsx(
                "bg-white border border-grey-100 p-6 mt-6 rounded-lg",
                "min-w-[360px] max-w-[680px]",
            )}
        >
            {children}
        </div>
    );
};

export default Card;
