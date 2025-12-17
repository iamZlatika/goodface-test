import Link from "next/link";
import DefaultButton from "@/components/ui/buttons/default-button";
import { dictionary } from "@/lib/i18n/dictionary";
import PlusIcon from "@/components/icons/plus-icon";
import NotificationBell from "@/components/ui/notification-bell";
import { navigation, bottomNavigation } from "./nav-data";
import ChevronRightIcon from "@/components/icons/chevron-right-icon";
import ThreeDotsIcon from "@/components/icons/three-dots-icon";
import clsx from "clsx";

const Sidebar = () => {
    return (
        <aside
            className={clsx(
                "hidden lg:flex flex-col w-[280px]",
                "bg-white border-r border-grey-100",
                "h-screen sticky top-0",
            )}
        >
            <div className="flex items-center justify-between px-4 py-2.5 pr-[1.625rem]">
                <span className="text-h5 font-semibold text-grey-900">Logo</span>
                <NotificationBell quantity={2} />
            </div>

            <div className="p-4">
                <DefaultButton
                    label={dictionary.sidebar.button}
                    startIcon={<PlusIcon />}
                    fullWidth
                />
            </div>

            <nav className="px-4">
                {navigation.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-4">
                        {section.title && (
                            <p className="mb-2 text-overline font-medium text-grey-500 uppercase pl-3">
                                {section.title}
                            </p>
                        )}
                        <ul className="space-y-1">
                            {section.items.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={clsx(
                                            "flex h-7 items-center gap-3 px-3 rounded-lg text-[14px] leading-5 font-medium tracking-[0px] transition-colors",
                                            item.isActive
                                                ? "bg-brand-50 text-brand-500"
                                                : "text-grey-700 hover:bg-grey-50",
                                        )}
                                    >
                                        {item.icon ?? (
                                            <span className="w-5 h-5 bg-grey-200 rounded" />
                                        )}
                                        {item.label}
                                        {item.badge !== undefined && (
                                            <span className="ml-auto inline-flex h-3 w-3 items-center justify-center rounded-full bg-(--color-green-100)">
                                                <span className="h-[5px] w-[5px] rounded-full bg-(--color-green-600)" />
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>

            <div className="border-t border-grey-100 p-4">
                {bottomNavigation.map((section, sectionIndex) => (
                    <ul key={sectionIndex} className="space-y-1">
                        {section.items.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={clsx(
                                        "flex h-7 items-center justify-between px-3 pr-4 rounded-lg",
                                        "text-[14px] leading-5 font-medium tracking-[0px]",
                                        "text-grey-700 hover:bg-grey-50 transition-colors",
                                    )}
                                >
                                    <span className="flex items-center gap-3">
                                        {item.icon ?? (
                                            <span className="w-5 h-5 bg-grey-200 rounded" />
                                        )}
                                        {item.label}
                                    </span>
                                    <span className="text-grey-400">
                                        <ChevronRightIcon />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>

            <div className="mt-auto border-t border-grey-100 px-4 py-4  pr-6">
                <div className="flex justify-between">
                    <div className="min-w-0">
                        <p className="text-body2 font-medium text-grey-900 truncate">Henry Smith</p>
                        <p className="text-body2 font-medium tracking-[-0.0125rem] text-grey-500 truncate">
                            henry.smith@company.com
                        </p>
                    </div>

                    <button type="button" className="self-center text-grey-400 hover:text-grey-600">
                        <ThreeDotsIcon />
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
