const Build = () => {
    return (
        <section className="py-20 lg:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[url('/assets/images/Background2.png')] bg-cover bg-center bg-no-repeat"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>

            {/* Animated neon background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl floating-animation neon-glow"></div>
                <div
                    className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl floating-animation neon-pink-glow"
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className="absolute top-1/2 right-1/4 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl floating-animation neon-yellow-glow"
                    style={{ animationDelay: "4s" }}
                ></div>
            </div>

            <div className="container-responsive section-padding relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 fade-in">
                    <h2 className="text-responsive-xl mb-6">
                        HOW WE <span className="text-responsive-xl">BUILD</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Our development philosophy combines cutting-edge
                        technology with player-first design
                    </p>
                </div>

                {/* Development Timeline */}
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00ff88] via-[#0ff4c6] to-[#8b5cf6] rounded-full"></div>

                        {/* Timeline items */}
                        <div className="space-y-16">
                            <div className="flex items-center">
                                <div className="w-1/2 pr-8 text-right">
                                    <div className="cyberpunk-card p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-[#00ff88] rounded-full flex items-center justify-center cyberpunk-glow">
                                                <span className="text-2xl">
                                                    ⚡
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-[#00ff88]">
                                                SCALABILITY
                                            </h3>
                                        </div>
                                        <p className="text-gray-300">
                                            Layer 2 solutions for lightning-fast
                                            transactions
                                        </p>
                                    </div>
                                </div>
                                <div className="w-8 h-8 bg-[#00ff88] rounded-full border-4 border-black z-10"></div>
                                <div className="w-1/2 pl-8"></div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-1/2 pr-8"></div>
                                <div className="w-8 h-8 bg-[#0ff4c6] rounded-full border-4 border-black z-10"></div>
                                <div className="w-1/2 pl-8">
                                    <div className="cyberpunk-card p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-[#0ff4c6] rounded-full flex items-center justify-center cyberpunk-glow">
                                                <span className="text-2xl">
                                                    🔗
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-[#0ff4c6]">
                                                DECENTRALIZATION
                                            </h3>
                                        </div>
                                        <p className="text-gray-300">
                                            True ownership through blockchain
                                            technology
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-1/2 pr-8 text-right">
                                    <div className="cyberpunk-card p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-[#8b5cf6] rounded-full flex items-center justify-center cyberpunk-glow">
                                                <span className="text-2xl">
                                                    🚀
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-[#8b5cf6]">
                                                SEAMLESS ONBOARDING
                                            </h3>
                                        </div>
                                        <p className="text-gray-300">
                                            One-click web3 experiences for
                                            everyone
                                        </p>
                                    </div>
                                </div>
                                <div className="w-8 h-8 bg-[#8b5cf6] rounded-full border-4 border-black z-10"></div>
                                <div className="w-1/2 pl-8"></div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-1/2 pr-8"></div>
                                <div className="w-8 h-8 bg-[#00ff88] rounded-full border-4 border-black z-10"></div>
                                <div className="w-1/2 pl-8">
                                    <div className="cyberpunk-card p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-[#00ff88] rounded-full flex items-center justify-center cyberpunk-glow">
                                                <span className="text-2xl">
                                                    🎁
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-[#00ff88]">
                                                COMMUNITY REWARDS
                                            </h3>
                                        </div>
                                        <p className="text-gray-300">
                                            Earn tokens and NFTs through
                                            gameplay
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technology Stack */}
                <div className="mt-20">
                    <h3 className="text-center text-responsive-lg mb-12 text-cyan-400">
                        POWERED BY ADVANCED TECHNOLOGY
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 neon-pulse">
                            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                                <span className="text-white font-bold text-xl">
                                    ⚡
                                </span>
                            </div>
                            <h4 className="font-semibold mb-2 text-cyan-400">
                                STARKNET
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Layer 2 scaling
                            </p>
                        </div>

                        <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 neon-pulse">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-pink-glow">
                                <span className="text-white font-bold text-xl">
                                    🔗
                                </span>
                            </div>
                            <h4 className="font-semibold mb-2 text-purple-400">
                                CAIRO
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Smart contracts
                            </p>
                        </div>

                        <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 neon-pulse">
                            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-yellow-glow">
                                <span className="text-white font-bold text-xl">
                                    🎮
                                </span>
                            </div>
                            <h4 className="font-semibold mb-2 text-yellow-400">
                                WEB3
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Decentralized gaming
                            </p>
                        </div>

                        <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 neon-pulse">
                            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                                <span className="text-white font-bold text-xl">
                                    🛡️
                                </span>
                            </div>
                            <h4 className="font-semibold mb-2 text-cyan-400">
                                SECURITY
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Audited contracts
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Build;
