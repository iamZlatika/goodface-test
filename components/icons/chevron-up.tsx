import type { SVGProps } from "react";

export default function ChevronUpIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M0.625 5.625L5.625 0.625L10.625 5.625"
                stroke="#4D5761"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
