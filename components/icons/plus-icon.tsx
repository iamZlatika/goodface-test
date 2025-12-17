import type { SVGProps } from "react";

export default function PlusIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 9.33 9.33"
            width={9.33}
            height={9.33}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M4.665 0V9.33M0 4.665H9.33"
                stroke="currentColor"
                strokeWidth={1.25}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
