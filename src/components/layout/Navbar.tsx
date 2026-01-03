"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Bot, Sparkles, LayoutGrid } from "lucide-react";

export function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: "Marketplace", href: "/marketplace", icon: LayoutGrid },
        { name: "My Agents", href: "/my-agents", icon: Bot },
        { name: "Create", href: "/create", icon: Sparkles },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 ring-1 ring-primary/50 transition-all group-hover:shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                            <Sparkles className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-white group-hover:text-primary/90 transition-colors">
                            ETERNA
                        </span>
                    </Link>
                </div>

                <nav className="flex items-center gap-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5 hover:text-white",
                                    isActive ? "text-white bg-white/5" : "text-gray-400"
                                )}
                            >
                                <Icon className="h-4 w-4" />
                                <span>{item.name}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 rounded-md ring-1 ring-primary/20 bg-primary/5"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-4">
                    <button className="rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-primary/50">
                        Connect Wallet
                    </button>
                </div>
            </div>
        </header>
    );
}
