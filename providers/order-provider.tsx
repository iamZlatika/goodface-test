"use client";

import { createContext, useMemo, useState, type ReactNode, useContext, useCallback } from "react";
import type { LocationCode } from "@/lib/location";
import type { Period } from "@/lib/subscription";
import { calcTotal, getUnitPrice } from "@/lib/discounts";

type OrderState = {
    quantity: number;
    period: Period;
    location: LocationCode;
};

type OrderContextValue = OrderState & {
    setQuantity: (value: number) => void;
    setPeriod: (value: Period) => void;
    setLocation: (value: LocationCode) => void;

    unitPrice: number;

    total: number;
};

const OrderContext = createContext<OrderContextValue | null>(null);

export function OrderProvider({ children }: { children: ReactNode }) {
    const [quantity, _setQuantity] = useState<number>(100);
    const [period, _setPeriod] = useState<Period>(3);
    const [location, setLocation] = useState<LocationCode>("gb");

    const setQuantity = useCallback((value: number) => {
        _setQuantity(value);
    }, []);

    const setPeriod = useCallback((value: Period) => {
        _setPeriod(value);
    }, []);

    const unitPrice = useMemo(() => getUnitPrice(quantity), [quantity]);

    const total = useMemo(() => {
        return calcTotal({ quantity, period, unitPrice });
    }, [quantity, period, unitPrice]);

    const value = useMemo(
        () => ({
            quantity,
            period,
            location,
            unitPrice,
            total,
            setQuantity,
            setPeriod,
            setLocation,
        }),
        [quantity, period, location, unitPrice, total, setQuantity, setPeriod],
    );

    return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder() {
    const ctx = useContext(OrderContext);
    if (!ctx) throw new Error("useOrder must be used within OrderProvider");
    return ctx;
}
