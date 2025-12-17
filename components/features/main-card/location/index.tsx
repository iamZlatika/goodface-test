"use client";

import LocationSelect from "@/components/features/main-card/location/location-select";
import { getLocationOptions, type LocationCode } from "@/lib/location";

interface LocationProps {
    location: LocationCode;
    setLocation: (next: LocationCode) => void;
}

const Location = ({ location, setLocation }: LocationProps) => {
    const options = getLocationOptions();

    return (
        <div className="pt-2">
            <LocationSelect options={options} value={location} onChange={setLocation} />
        </div>
    );
};

export default Location;
