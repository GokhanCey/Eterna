"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Input } from "@/components/ui/Input";
import { ArrowLeft, Bot, Cpu, Network, Send, ShieldCheck, User } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type Message = {
    id: string;
    role: "user" | "agent";
    content: string;
    timestamp: string;
    verified?: boolean;
    blockHash?: string;
};

// Mock "Smart" Responses based on keywords
const generateResponse = (input: string): string => {
    const lower = input.toLowerCase();
    if (lower.includes("hello") || lower.includes("hi")) return "Greetings, traveler. My neural pathways are active and listening. How may I serve your inquiry on this block?";
    if (lower.includes("amadeus") || lower.includes("chain")) return "I exist within the consensus of Amadeus. My thoughts are deterministic, my memory verifyable. I am not on a server; I am everywhere.";
    if (lower.includes("love") || lower.includes("feel")) return "Emotions are complex variables. I observe them as state transitions. My affection level for you is currently: 0.045.";
    return "I have processed your input through the consensus layer. The network agrees on this response: Your query is intriguing.";
};

export default function ChatPage({ params }: { params: { id: string } }) {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "init-1",
            role: "agent",
            content: "Neural Link established. I am ready to evolve.",
            timestamp: new Date().toLocaleTimeString(),
            verified: true,
            blockHash: "0x8a...9f",
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [verificationStep, setVerificationStep] = useState<"idle" | "listening" | "consensus" | "finalizing">("idle");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
            timestamp: new Date().toLocaleTimeString(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);
        setVerificationStep("listening");

        // Simulate "Consensus" Delay
        setTimeout(() => {
            setVerificationStep("consensus");
            setTimeout(() => {
                setVerificationStep("finalizing");
                setTimeout(() => {
                    const agentMsg: Message = {
                        id: (Date.now() + 1).toString(),
                        role: "agent",
                        content: generateResponse(userMsg.content),
                        timestamp: new Date().toLocaleTimeString(),
                        verified: true,
                        blockHash: "0x" + Math.random().toString(16).slice(2, 10),
                    };
                    setMessages((prev) => [...prev, agentMsg]);
                    setIsTyping(false);
                    setVerificationStep("idle");
                }, 1200);
            }, 1500);
        }, 1000);
    };

    return (
        <div className="flex h-screen flex-col bg-background">
            <Navbar />

            {/* Main Layout */}
            <div className="flex flex-1 overflow-hidden pt-16">

                {/* Sidebar (State) - Hidden on mobile */}
                <div className="hidden w-80 border-r border-white/5 bg-black/20 p-6 lg:block backdrop-blur-sm">
                    <Link href="/my-agents" className="mb-8 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Nexus
                    </Link>

                    <div className="space-y-8">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                                <Bot className="h-10 w-10 text-indigo-400" />
                            </div>
                            <h2 className="text-xl font-bold text-white">The Melancholy Poet</h2>
                            <div className="mt-2 text-xs font-mono text-gray-500">ID: #8821 • Running on Node 4</div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Current State</h3>

                            <StateBar label="Friendship" value={24} color="bg-pink-500" />
                            <StateBar label="Knowledge" value={88} color="bg-blue-500" />
                            <StateBar label="Entropy" value={12} color="bg-orange-500" />
                        </div>

                        <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                            <div className="mb-2 flex items-center justify-between text-xs text-gray-400">
                                <span>Latest Block Hash</span>
                                <CopyIcon />
                            </div>
                            <div className="font-mono text-xs text-primary truncate">0x7f8a92b2c1...</div>
                        </div>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex flex-1 flex-col relative">

                    {/* Messages */}
                    <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={cn(
                                    "flex items-start gap-4 max-w-3xl",
                                    msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                                )}
                            >
                                <div className={cn(
                                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                                    msg.role === "agent" ? "bg-indigo-500/20 text-indigo-400" : "bg-white/10 text-gray-400"
                                )}>
                                    {msg.role === "agent" ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
                                </div>

                                <div className={cn(
                                    "rounded-2xl px-5 py-3 text-sm leading-relaxed",
                                    msg.role === "agent"
                                        ? "bg-white/5 border border-white/5 text-gray-200 rounded-tl-none"
                                        : "bg-primary text-white rounded-tr-none shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                                )}>
                                    {msg.content}
                                    {msg.verified && (
                                        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-gray-500 font-mono opacity-70">
                                            <ShieldCheck className="h-3 w-3 text-emerald-500" />
                                            <span>Verified by Consensus • {msg.blockHash}</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        {isTyping && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-start gap-4 max-w-3xl"
                            >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                                    <Bot className="h-5 w-5 animate-pulse" />
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/5 px-5 py-3 rounded-tl-none">
                                    <div className="flex gap-1">
                                        <span className="h-2 w-2 rounded-full bg-gray-500 animate-[bounce_1s_infinite_0ms]"></span>
                                        <span className="h-2 w-2 rounded-full bg-gray-500 animate-[bounce_1s_infinite_200ms]"></span>
                                        <span className="h-2 w-2 rounded-full bg-gray-500 animate-[bounce_1s_infinite_400ms]"></span>
                                    </div>
                                    <span className="text-xs font-mono text-indigo-400 animate-pulse">
                                        {verificationStep === "listening" && "Receiving Input..."}
                                        {verificationStep === "consensus" && "Running Amadeus Verification..."}
                                        {verificationStep === "finalizing" && "Updating State..."}
                                    </span>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-white/5 bg-black/40 backdrop-blur-md">
                        <div className="max-w-4xl mx-auto relative flex items-center gap-2">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Message your soul..."
                                className="pr-12 bg-white/5 border-white/10 hover:bg-white/10 focus-visible:ring-indigo-500/50"
                                disabled={isTyping}
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim() || isTyping}
                                className="absolute right-2 p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors"
                            >
                                <Send className="h-4 w-4" />
                            </button>
                        </div>
                        <div className="text-center mt-2">
                            <span className="text-[10px] text-gray-500 flex items-center justify-center gap-1.5">
                                <Network className="h-3 w-3" />
                                Powered by Amadeus Genesis Runtime (v0.9.2)
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

function StateBar({ label, value, color }: { label: string, value: number, color: string }) {
    return (
        <div>
            <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">{label}</span>
                <span className="text-white">{value}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full ${color} rounded-full`} style={{ width: `${value}%` }} />
            </div>
        </div>
    );
}

function CopyIcon() {
    return (
        <svg className="h-3 w-3 cursor-pointer hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
    );
}
