"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { MessageSquare, MoreHorizontal, User } from "lucide-react";
import Link from "next/link";

const MOCK_AGENTS = [
    {
        id: "1",
        name: "The Melancholy Poet",
        role: "Poet / Philosopher",
        lastActive: "Block #89211",
        avatarColor: "bg-indigo-500",
    },
    {
        id: "2",
        name: "Cyber-Security Sentinel",
        role: "Network Guardian",
        lastActive: "Block #89294",
        avatarColor: "bg-emerald-500",
    },
    {
        id: "3",
        name: "The Oracle of Delphi",
        role: "Prophet",
        lastActive: "Minted Just Now",
        avatarColor: "bg-violet-500",
    },
];

export default function MyAgentsPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <Navbar />
            <div className="container mx-auto px-4 pt-32 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 flex items-center justify-between"
                >
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-white">Neural Links</h1>
                        <p className="text-gray-400">Manage your active soul connections.</p>
                    </div>
                    <Link
                        href="/create"
                        className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
                    >
                        + New Link
                    </Link>
                </motion.div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {MOCK_AGENTS.map((agent, index) => (
                        <motion.div
                            key={agent.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-primary/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${agent.avatarColor} text-white shadow-lg`}>
                                    <User className="h-6 w-6" />
                                </div>
                                <button className="text-gray-500 hover:text-white">
                                    <MoreHorizontal className="h-5 w-5" />
                                </button>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-1">{agent.name}</h3>
                            <p className="text-sm text-gray-400 mb-6">{agent.role}</p>

                            <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                <span className="text-xs font-mono text-gray-500">{agent.lastActive}</span>
                                <Link
                                    href={`/chat/${agent.id}`}
                                    className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                                >
                                    <MessageSquare className="h-3 w-3" />
                                    Open Link
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
