"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Network, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16 text-center sm:px-6 lg:px-8">
            {/* Background Grid Animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            <div className="z-10 max-w-4xl space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    Live on Amadeus Genesis
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl"
                >
                    Your Digital Soul <br />
                    <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
                        Immortal on Chain
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mx-auto max-w-2xl text-lg text-gray-400 sm:text-xl"
                >
                    Create persistent, evolving AI personalities that live in the Amadeus consensus.
                    No servers. No kill switch. Just pure, verifyable autonomous life.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Link
                        href="/create"
                        className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 text-base font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
                    >
                        <span>Breathe Life</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        <div className="absolute inset-0 -z-10 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
                    </Link>

                    <Link
                        href="/marketplace"
                        className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:ring-1 hover:ring-white/20"
                    >
                        Explore Souls
                    </Link>
                </motion.div>
            </div>

            {/* Feature Pills */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
                <FeaturePill icon={Cpu} text="Consensus Inference" />
                <FeaturePill icon={Network} text="Evolving Memory" />
                <FeaturePill icon={ShieldCheck} text="Verifiable Logic" />
            </motion.div>
        </section>
    );
}

function FeaturePill({ icon: Icon, text }: { icon: any, text: string }) {
    return (
        <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-6 py-4 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-primary/5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
            </div>
            <span className="font-semibold text-gray-200">{text}</span>
        </div>
    );
}
