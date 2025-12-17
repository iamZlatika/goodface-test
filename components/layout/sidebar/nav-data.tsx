import type { ReactNode } from "react";

import { dictionary } from "@/lib/i18n/dictionary";

import DashboardIcon from "@/components/icons/dashboard-icon";
import OverviewIcon from "@/components/icons/overview-icon";
import LogMonitorIcon from "@/components/icons/log-monitor-icon";
import SummaryIcon from "@/components/icons/summary-icon";
import ProxyIcon from "@/components/icons/proxy-icon";
import UserIcon from "@/components/icons/user-icon";
import ProductsIcon from "@/components/icons/product-icon";
import KeyIcon from "@/components/icons/key-icon";
import ApiRequestsIcon from "@/components/icons/api-requests-icon";
import ResellersIcon from "@/components/icons/resellers-icon";
import AffiliateIcon from "@/components/icons/affiliate-icon";
import BillingIcon from "@/components/icons/billing-icon";
import HelpIcon from "@/components/icons/help-icon";

export interface NavItem {
    label: string;
    href: string;
    icon?: ReactNode;
    badge?: number;
    isActive?: boolean;
}

export interface NavSection {
    title?: string;
    items: NavItem[];
}

const t = dictionary.sidebar.nav;

export const navigation: NavSection[] = [
    {
        items: [{ label: t.items.dashboard, href: "/dashboard", icon: <DashboardIcon /> }],
    },
    {
        title: t.title.system_overview,
        items: [
            {
                label: t.items.observability_overview,
                href: "/observability",
                icon: <OverviewIcon className="w-5 h-5" />,
            },
            {
                label: t.items.live_log_monitor,
                href: "/logs",
                badge: 1,
                icon: <LogMonitorIcon className="w-5 h-5" />,
            },
        ],
    },
    {
        title: t.title.services,
        items: [
            { label: t.items.summary, href: "/summary", icon: <SummaryIcon className="w-5 h-5" /> },
            {
                label: t.items.proxy_list,
                href: "/proxy-list",
                icon: <ProxyIcon className="w-5 h-5" />,
            },
            {
                label: t.items.user_settings,
                href: "/settings",
                icon: <UserIcon className="w-5 h-5" />,
            },
            {
                label: t.items.all_products,
                href: "/",
                isActive: true,
                icon: <ProductsIcon className="w-5 h-5" />,
            },
        ],
    },
    {
        title: t.title.developer_section,
        items: [
            { label: t.items.api_keys, href: "/api-keys", icon: <KeyIcon className="w-5 h-5" /> },
            {
                label: t.items.api_requests,
                href: "/api-requests",
                icon: <ApiRequestsIcon className="w-5 h-5" />,
            },
        ],
    },
    {
        title: t.title.affiliate_programs,
        items: [
            {
                label: t.items.resellers_statistics,
                href: "/resellers",
                icon: <ResellersIcon className="w-5 h-5" />,
            },
            {
                label: t.items.affiliate_program,
                href: "/affiliate",
                icon: <AffiliateIcon className="w-5 h-5" />,
            },
        ],
    },
];

export const bottomNavigation: NavSection[] = [
    {
        items: [
            { label: t.items.billing, href: "/billing", icon: <BillingIcon className="w-5 h-5" /> },
            { label: t.items.help, href: "/help", icon: <HelpIcon className="w-5 h-5" /> },
        ],
    },
];
