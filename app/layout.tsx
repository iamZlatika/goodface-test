import "./globals.css";
import { MobileHeader } from "@/components/layout/mobile-header";
import Sidebar from "@/components/layout/sidebar";
import type { ReactNode } from "react";
import { SpaceGrotesk } from "@/public/fonts/space-grotesk";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${SpaceGrotesk.variable} font-sans antialiased`}>
                <div className="flex min-h-screen">
                    <Sidebar />
                    <div className="flex-1 flex flex-col">
                        <MobileHeader />
                        <main className="flex-1 bg-grey-50">
                            <div className="mx-auto w-full max-w-[1120px] px-6 pt-6">
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
}
