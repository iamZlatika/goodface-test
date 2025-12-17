import NotificationBell from "@/components/ui/notification-bell";

export function MobileHeader() {
    return (
        <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-grey-100 sticky top-0 z-50">
            <span className="text-h5 font-semibold text-grey-900">Logo</span>

            <div className="flex items-center gap-6">
                <button
                    type="button"
                    className="relative w-6 h-6 flex items-center justify-center"
                    aria-label="Notifications"
                >
                    <NotificationBell quantity={2} />
                </button>

                <button
                    type="button"
                    className="w-6 h-6 flex flex-col justify-center gap-1"
                    aria-label="Open menu"
                >
                    <span className="w-full h-0.5 bg-grey-800" />
                    <span className="w-full h-0.5 bg-grey-800" />
                    <span className="w-full h-0.5 bg-grey-800" />
                </button>
            </div>
        </header>
    );
}
