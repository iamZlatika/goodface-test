import type { SVGProps } from "react";

export default function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
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
                d="M0.75 0.75L5.75 5.75L10.75 0.75"
                stroke="#384250"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
