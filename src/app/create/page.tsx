"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Copy, Sparkles, Terminal } from "lucide-react";
import { useState } from "react";

export default function CreatePage() {
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        backstory: "",
    });

    const [isMinting, setIsMinting] = useState(false);

    const handleMint = () => {
        setIsMinting(true);
        // Simulate minting delay
        setTimeout(() => {
            setIsMinting(false);
            // Logic to redirect or show success would go here
            alert("Soul Minted on Amadeus Devnet (Simulation)");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            <Navbar />
            <div className="container mx-auto px-4 pt-32 sm:px-6 lg:px-8">

                <div className="mb-12 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight text-white mb-4"
                    >
                        Forge a New Soul
                    </motion.h1>
                    <p className="text-gray-400">
                        Define the parameters of your agent. This prompt will be immutable on-chain.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Left Col: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                    >
                        <div className="flex items-center gap-2 mb-6 text-primary">
                            <Terminal className="h-5 w-5" />
                            <span className="font-mono text-sm uppercase tracking-widest">Configuration</span>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Agent Name</label>
                            <Input
                                placeholder="e.g. The Oracle of Delphi"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Primary Function/Role</label>
                            <Input
                                placeholder="e.g. Market Analyst, Poet, Therapist"
                                value={formData.role}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">System Prompt & Backstory</label>
                            <Textarea
                                placeholder="You are a cynical market analyst who only speaks in riddles..."
                                className="h-40 font-mono text-sm leading-relaxed"
                                value={formData.backstory}
                                onChange={(e) => setFormData({ ...formData, backstory: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Memory Storage Layer</label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => alert("Selected: Amadeus Native Storage")}
                                    className="rounded-lg border border-white/10 bg-white/5 p-3 text-left text-xs transition-all hover:bg-white/10 hover:border-primary/30"
                                >
                                    <div className="font-bold text-white mb-1">Amadeus Native</div>
                                    <div className="text-gray-500">Fast, consensus-local.</div>
                                </button>
                                <button
                                    onClick={() => alert("Selected: Arweave Permaweb")}
                                    className="rounded-lg border border-primary/50 bg-primary/10 p-3 text-left text-xs ring-1 ring-primary transition-all hover:bg-primary/20"
                                >
                                    <div className="font-bold text-primary mb-1">Arweave Permaweb</div>
                                    <div className="text-primary/70">Permanent, verifiable history. (+ Bonus)</div>
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={handleMint}
                            disabled={isMinting}
                            className="mt-4 w-full rounded-lg bg-primary py-3 font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] disabled:opacity-50"
                        >
                            {isMinting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                                    Minting on Amadeus...
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    <Sparkles className="h-4 w-4" />
                                    Mint Soul (0.01 AMA)
                                </span>
                            )}
                        </button>
                    </motion.div>

                    {/* Right Col: Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative flex items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/40 p-12"
                    >
                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] bg-primary/20 blur-[100px] rounded-full" />
                        </div>

                        <div className="relative z-10 text-center">
                            <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border-2 border-primary/30 bg-black/50 shadow-[0_0_30px_rgba(124,58,237,0.2)]">
                                <Sparkles className="h-12 w-12 text-primary animate-pulse" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {formData.name || "Unnamed Soul"}
                            </h3>
                            <div className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-primary-foreground">
                                <Copy className="h-3 w-3" />
                                <span>0x...HASH</span>
                            </div>
                            <p className="mt-4 text-sm text-gray-500 max-w-xs mx-auto">
                                {formData.role || "Waiting for role assignment..."}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
