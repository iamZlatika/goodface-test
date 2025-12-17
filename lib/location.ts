import { dictionary } from "@/lib/i18n/dictionary";

export type LocationCode = keyof typeof dictionary.main.location_options;

export type LocationOption = {
    code: LocationCode;
    label: string;
    flagSrc: string;
};

export function getLocationOptions(): LocationOption[] {
    const entries = Object.entries(dictionary.main.location_options) as Array<
        [LocationCode, string]
    >;

    return entries.map(([code, label]) => ({
        code,
        label,
        flagSrc: `/flag-${code}.png`,
    }));
}
