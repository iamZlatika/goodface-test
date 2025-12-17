import type { SVGProps } from "react";

export default function OverviewIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={17}
            height={12}
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6.45833 5.625C6.45833 6.06703 6.63393 6.49095 6.94649 6.80351C7.25905 7.11607 7.68297 7.29167 8.125 7.29167C8.56703 7.29167 8.99095 7.11607 9.30351 6.80351C9.61607 6.49095 9.79167 6.06703 9.79167 5.625C9.79167 5.18297 9.61607 4.75905 9.30351 4.44649C8.99095 4.13393 8.56703 3.95833 8.125 3.95833C7.68297 3.95833 7.25905 4.13393 6.94649 4.44649C6.63393 4.75905 6.45833 5.18297 6.45833 5.625Z"
                stroke="currentColor"
                strokeWidth={1.25}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.625 5.625C13.625 8.95833 11.125 10.625 8.125 10.625C5.125 10.625 2.625 8.95833 0.625 5.625C2.625 2.29167 5.125 0.625 8.125 0.625C11.125 0.625 13.625 2.29167 15.625 5.625Z"
                stroke="currentColor"
                strokeWidth={1.25}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
