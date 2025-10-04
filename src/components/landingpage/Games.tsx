const Games = () => {
    return (
        <section className="py-20 lg:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[url('/assets/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>

            {/* Animated neon background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl floating-animation neon-glow"></div>
                <div
                    className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating-animation neon-pink-glow"
                    style={{ animationDelay: "3s" }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl floating-animation neon-yellow-glow"
                    style={{ animationDelay: "1s" }}
                ></div>
            </div>

            <div className="container-responsive section-padding relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 fade-in">
                    <h2 className="text-responsive-xl mb-6">
                        OUR{" "}
                        <span className="text-responsive-xl">ECOSYSTEM</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        From games to apps to tools - discover our complete web3
                        product suite
                    </p>
                </div>

                {/* Game Showcase */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Game Visual */}
                    <div className="slide-in-left">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/30 to-[#0ff4c6]/30 rounded-3xl blur-2xl cyberpunk-glow"></div>
                            <div className="relative cyberpunk-border p-2">
                                <div className="cyberpunk-card p-6">
                                    <img
                                        src="/assets/images/Games.png"
                                        alt="Games showcase"
                                        className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-[#00ff88] text-black px-3 py-1 rounded-full text-sm font-bold">
                                        LIVE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Game Content */}
                    <div className="slide-in-right">
                        <div className="space-y-8">
                            <img
                                src="/assets/images/Title.png"
                                alt="Tweetle Game Title"
                                className="w-full max-w-md mx-auto lg:mx-0"
                            />

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full neon-glow"></div>
                                    <span className="text-lg text-cyan-400">
                                        Daily puzzles, leaderboard competitions,
                                        NFT achievements
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full neon-pink-glow"></div>
                                    <span className="text-lg text-purple-400">
                                        Play on web - no downloads required
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full neon-yellow-glow"></div>
                                    <span className="text-lg text-yellow-400">
                                        250+ active players and growing
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="explore-btn">
                                    PLAY NOW
                                </button>
                                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400/10 transition-all duration-300 neon-pulse">
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 neon-pulse">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                            LIGHTNING FAST
                        </h3>
                        <p className="text-gray-400">
                            Optimized for speed with gas-efficient gameplay
                        </p>
                    </div>

                    <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 neon-pulse">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-pink-glow">
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-purple-400">
                            VERIFIABLE RESULTS
                        </h3>
                        <p className="text-gray-400">
                            Fair leaderboards with blockchain-verified scores
                        </p>
                    </div>

                    <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 neon-pulse">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-yellow-glow">
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                            NFT REWARDS
                        </h3>
                        <p className="text-gray-400">
                            Earn unique tokens and NFTs through gameplay
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Games;
