import { signals } from "../../data/signals";

const RigShowcase = () => {
    return (
        <section id="rig" className="py-20 lg:py-32 bg-black relative overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(#16A349 1px, transparent 1px),
                        linear-gradient(90deg, #16A349 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                    opacity: 0.08,
                    transform: "rotate(-0.3deg)",
                }}
            ></div>

            <div className="container-responsive relative z-10">
                <div className="grid lg:grid-cols-[1.05fr_1.15fr] gap-8">
                    <div className="space-y-6 transform -rotate-0.5 offset-left">
                        <div className="border-4 border-[#16A349] p-8 bg-black relative glitch-box overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <h2 className="text-5xl md:text-6xl font-black mb-4 text-[#F2F2F2] relative z-10 glitch-text">
                                MEET THE <span className="text-[#16A349] glitch-word" data-text="RIG">RIG</span>
                            </h2>
                            <p className="text-[#16A349] text-sm md:text-base font-black uppercase tracking-[0.2em] relative z-10">
                                HOW WE OPERATE
                            </p>
                        </div>

                        <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <p className="text-lg md:text-xl text-[#F2F2F2] leading-relaxed font-medium mb-6 relative z-10">
                                Eleven AI agents — called Signals — run continuously alongside our human team. Marketing. Analytics. Revenue. Community. Engineering. Nothing falls through the cracks.
                            </p>
                            <p className="text-lg md:text-xl text-[#F2F2F2] leading-relaxed font-medium mb-4 relative z-10">
                                Most studios have a team. Cracked has a team plus a permanent AI workforce.
                            </p>
                            <p className="text-base md:text-lg text-[#F2F2F2] leading-relaxed font-medium mb-4 relative z-10">
                                Every Signal reads from a shared knowledge base (The Stack) — a single source of truth updated weekly. Every Signal writes outputs that other Signals consume. The result: every function of the company is always in sync.
                            </p>
                            <p className="text-base md:text-lg text-[#F2F2F2] leading-relaxed font-medium relative z-10">
                                This is our structural moat. It cannot be replicated without time, architecture, and deep company-specific knowledge baked into every agent.
                            </p>
                        </div>

                        <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <p className="text-[#16A349] text-sm font-black uppercase tracking-[0.2em] mb-4 relative z-10">
                                STACK ARCHITECTURE
                            </p>
                            <pre className="text-[#F2F2F2] text-sm md:text-base font-mono whitespace-pre-wrap relative z-10">{`core-stack/\n  -> signal-memory/\n    -> drop-zone/`}</pre>
                        </div>
                    </div>

                    <div className="space-y-6 transform rotate-0.5 offset-right">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {signals.map((signal, index) => (
                                <div
                                    key={signal.name}
                                    className={`border-2 ${index % 2 === 0 ? "border-[#16A349]" : "border-[#00FF66]"} p-4 bg-black glitch-box relative overflow-hidden signal-card-pulse`}
                                >
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <div className={`w-3 h-3 ${index % 2 === 0 ? "bg-[#16A349]" : "bg-[#00FF66]"} mb-4 glitch-pulse relative z-10`}></div>
                                    <h3 className={`text-lg font-black mb-2 uppercase relative z-10 ${index % 2 === 0 ? "text-[#16A349]" : "text-[#00FF66]"}`}>
                                        {signal.name}
                                    </h3>
                                    <p className="text-[#F2F2F2] text-xs font-medium uppercase tracking-wide relative z-10">
                                        {signal.function}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="border-2 border-[#16A349] p-8 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <h3 className="text-3xl md:text-4xl font-black mb-4 text-[#16A349] uppercase relative z-10 glitch-text">
                                THE RIG IS THE OPERATING SYSTEM
                            </h3>
                            <p className="text-[#F2F2F2] text-lg font-medium relative z-10">
                                Cracked Studios is not a company that happens to use AI. It is a company architected around shared memory, structured Signals, and continuous output.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RigShowcase;
