"use client";

import DatacenterIcon from "@/components/icons/datacenter-icon";
import { dictionary } from "@/lib/i18n/dictionary";
import BundleDiscounts from "@/components/features/main-card/bundle-discounts";
import IpsQuantity from "@/components/features/main-card/ips-quantity";
import { useOrder } from "@/providers/order-provider";
import SubscriptionCycle from "@/components/features/main-card/subscription-cycle";
import Location from "@/components/features/main-card/location";
import Card from "@/components/ui/card";

const MainCard = () => {
    const { quantity, setQuantity, period, setPeriod, location, setLocation } = useOrder();

    return (
        <Card>
            <div className="flex items-start gap-4 ">
                <div className="flex-none shrink-0 flex h-14 w-14 items-center justify-center rounded bg-grey-50">
                    <DatacenterIcon />
                </div>
                <div className="flex-1 min-w-0 w-[254px] lg:w-auto lg:max-w-[558px]">
                    <h4 className="text-h4 font-medium text-grey-900">{dictionary.main.title}</h4>
                    <p className="text-body2 font-medium tracking-[-0.2px] text-grey-500">
                        {dictionary.main.description}
                    </p>
                </div>
            </div>
            <div>
                <div className="text-subtitle2 font-bold text-grey-900 mt-6">
                    {dictionary.main.select.IPs}
                </div>
                <div className="text-body2 font-medium tracking-[-0.2px] text-grey-500">
                    {dictionary.main.select.IPs_description}
                </div>
            </div>
            <BundleDiscounts />
            <IpsQuantity value={quantity} onChange={setQuantity} />
            <div className="text-subtitle2 font-bold text-grey-900 mt-6">
                {dictionary.main.select.subscription_cycle}
            </div>
            <SubscriptionCycle period={period} setPeriod={setPeriod} />
            <div className="text-subtitle2 font-bold text-grey-900 mt-6">
                {dictionary.main.select.location}
            </div>
            <Location location={location} setLocation={setLocation} />
        </Card>
    );
};
export default MainCard;
