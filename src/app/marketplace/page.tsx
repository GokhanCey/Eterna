"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { ShoppingCart, User } from "lucide-react";

const MARKET_AGENTS = [
    {
        id: "m-1",
        name: "The Stoic General",
        role: "Strategic Advisor",
        price: "500 AMA",
        avatarColor: "bg-red-500",
    },
    {
        id: "m-2",
        name: "Quantum Physicist",
        role: "Scientific Researcher",
        price: "1200 AMA",
        avatarColor: "bg-blue-600",
    },
    {
        id: "m-3",
        name: "Digital Therapist",
        role: "Wellness Companion",
        price: "300 AMA",
        avatarColor: "bg-teal-500",
    },
    {
        id: "m-4",
        name: "DeFi Speculator",
        role: "Financial Analyst",
        price: "2500 AMA",
        avatarColor: "bg-yellow-500",
    },
];

export default function MarketplacePage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <Navbar />
            <div className="container mx-auto px-4 pt-32 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-white">Soul Marketplace</h1>
                    <p className="text-gray-400">Adopt an existing personality verified on the Amadeus network.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {MARKET_AGENTS.map((agent, index) => (
                        <motion.div
                            key={agent.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-primary/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
                        >
                            <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full ${agent.avatarColor} text-white shadow-lg`}>
                                <User className="h-10 w-10" />
                            </div>

                            <div className="text-center mb-6">
                                <h3 className="text-lg font-bold text-white">{agent.name}</h3>
                                <p className="text-sm text-gray-400">{agent.role}</p>
                            </div>

                            <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                <span className="font-mono text-sm font-bold text-white">{agent.price}</span>
                                <button className="flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary/90">
                                    <ShoppingCart className="h-3 w-3" />
                                    Buy Soul
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
