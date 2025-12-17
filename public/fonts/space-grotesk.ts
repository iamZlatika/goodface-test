import localFont from "next/font/local";

export const SpaceGrotesk = localFont({
    src: [
        {
            path: "../../public/fonts/SpaceGrotesk/SpaceGrotesk-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/SpaceGrotesk/SpaceGrotesk-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/SpaceGrotesk/SpaceGrotesk-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-space-grotesk",
    display: "swap",
});
