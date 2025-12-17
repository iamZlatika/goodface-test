import type { SVGProps } from "react";

export default function DashboardIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={15}
            height={15}
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M0.75 0.75H5.75V7.41667H0.75V0.75Z"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M0.75 10.75H5.75V14.0833H0.75V10.75Z"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.08333 7.41667H14.0833V14.0833H9.08333V7.41667Z"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.08333 0.75H14.0833V4.08333H9.08333V0.75Z"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
