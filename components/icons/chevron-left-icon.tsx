import type { SVGProps } from "react";

export default function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M4.625 0.625L0.625 4.625L4.625 8.625"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
