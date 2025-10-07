const Parterns = () => {
    return (
        <section className="py-20 lg:py-32 section-padding relative overflow-hidden">
            {/* Neon background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl floating-animation neon-glow"></div>
                <div
                    className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl floating-animation neon-pink-glow"
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl floating-animation neon-yellow-glow"
                    style={{ animationDelay: "4s" }}
                ></div>
            </div>

            <div className="container-responsive relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 fade-in">
                    <h2 className="text-responsive-xl mb-6">
                        PARTNER{" "}
                        <span className="text-responsive-xl">WITH US</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Join forces with us to shape the future of web3 products
                        and experiences
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
                    <div className="slide-in-left">
                        <h3 className="text-responsive-lg mb-8">
                            LET'S BUILD THE FUTURE
                            <br />
                            <span className="text-responsive-lg">TOGETHER</span>
                        </h3>
                        <p className="text-responsive-base text-gray-300 leading-relaxed mb-8">
                            For potential sponsors, blockchain networks, and
                            collaborators, we offer exciting partnership
                            opportunities that can help shape the future of
                            gaming.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            <div className="cyberpunk-card p-4 text-center">
                                <div className="w-8 h-8 bg-[#00ff88] rounded-full flex items-center justify-center mx-auto mb-3 cyberpunk-glow">
                                    <span className="text-lg">🔗</span>
                                </div>
                                <h4 className="gaming-title text-sm mb-2">
                                    CHAIN PARTNERSHIPS
                                </h4>
                                <p className="gaming-description text-xs">
                                    Multi-chain integration
                                </p>
                            </div>
                            <div className="cyberpunk-card p-4 text-center">
                                <div className="w-8 h-8 bg-[#0ff4c6] rounded-full flex items-center justify-center mx-auto mb-3 cyberpunk-glow">
                                    <span className="text-lg">🏆</span>
                                </div>
                                <h4
                                    className="gaming-title text-sm mb-2"
                                    style={{ color: "#0ff4c6" }}
                                >
                                    TOURNAMENT SPONSORS
                                </h4>
                                <p className="gaming-description text-xs">
                                    Competitive events
                                </p>
                            </div>
                            <div className="cyberpunk-card p-4 text-center">
                                <div className="w-8 h-8 bg-[#8b5cf6] rounded-full flex items-center justify-center mx-auto mb-3 cyberpunk-glow">
                                    <span className="text-lg">⚙️</span>
                                </div>
                                <h4
                                    className="gaming-title text-sm mb-2"
                                    style={{ color: "#8b5cf6" }}
                                >
                                    SDK INTEGRATION
                                </h4>
                                <p className="gaming-description text-xs">
                                    Developer tools
                                </p>
                            </div>
                        </div>

                        <button className="explore-btn">PARTNER WITH US</button>
                    </div>

                    <div className="slide-in-right">
                        <div className="glass-card p-8 lg:p-12 neon-pulse">
                            <h4 className="text-responsive-lg mb-6 text-center text-cyan-400">
                                WHY PARTNER WITH US?
                            </h4>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 neon-glow">
                                        <svg
                                            className="w-6 h-6 text-white"
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
                                    <div>
                                        <h5 className="text-lg font-semibold mb-2 text-cyan-400">
                                            INNOVATION LEADER
                                        </h5>
                                        <p className="text-gray-400">
                                            Cutting-edge blockchain gaming
                                            technology
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 neon-pink-glow">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-semibold mb-2 text-purple-400">
                                            GROWING COMMUNITY
                                        </h5>
                                        <p className="text-gray-400">
                                            Active and engaged player base
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 neon-yellow-glow">
                                        <svg
                                            className="w-6 h-6 text-white"
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
                                    <div>
                                        <h5 className="text-lg font-semibold mb-2 text-yellow-400">
                                            PROVEN TRACK RECORD
                                        </h5>
                                        <p className="text-gray-400">
                                            Successful game launches and
                                            community building
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partnership Benefits */}
                <div className="text-center mb-16">
                    <h3 className="text-responsive-lg mb-4 text-cyan-400">
                        PARTNERSHIP BENEFITS
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Discover what makes our partnerships valuable for all
                        stakeholders
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="gradient-border group">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[18px] p-6 h-full">
                            <div className="relative overflow-hidden rounded-xl mb-6">
                                <img
                                    src="/assets/images/Sec3.png"
                                    alt="Games in development"
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-cyan-400 font-semibold text-sm neon-pulse">
                                        +3 GAMES IN DEVELOPMENT
                                    </p>
                                </div>
                            </div>
                            <h4 className="text-lg font-semibold mb-2 text-cyan-400">
                                ACTIVE DEVELOPMENT
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Multiple exciting projects in the pipeline, each
                                pushing the boundaries of onchain gaming.
                            </p>
                        </div>
                    </div>

                    <div className="gradient-border group">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[18px] p-6 h-full">
                            <div className="relative overflow-hidden rounded-xl mb-6">
                                <img
                                    src="/assets/images/Sec2.png"
                                    alt="Active players"
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-purple-400 font-semibold text-sm neon-pulse">
                                        +250 ACTIVE TWEETLE PLAYERS
                                    </p>
                                </div>
                            </div>
                            <h4 className="text-lg font-semibold mb-2 text-purple-400">
                                GROWING COMMUNITY
                            </h4>
                            <p className="text-gray-400 text-sm">
                                A thriving community of players who love our
                                innovative approach to word games.
                            </p>
                        </div>
                    </div>

                    <div className="gradient-border group md:col-span-2 lg:col-span-1">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[18px] p-6 h-full">
                            <div className="relative overflow-hidden rounded-xl mb-6">
                                <img
                                    src="/assets/images/Sec1.png"
                                    alt="Multi-chain expansion"
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-yellow-400 font-semibold text-sm neon-pulse">
                                        EXPANDING TO MULTI-CHAIN
                                    </p>
                                </div>
                            </div>
                            <h4 className="text-lg font-semibold mb-2 text-yellow-400">
                                MULTI-CHAIN FUTURE
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Expanding our reach across multiple blockchain
                                networks for maximum accessibility.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <div className="glass-card p-12 max-w-4xl mx-auto neon-pulse">
                        <h3 className="text-responsive-lg mb-6 text-cyan-400">
                            READY TO PARTNER?
                        </h3>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can work together to create
                            amazing gaming experiences and grow our communities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="explore-btn">
                                START PARTNERSHIP
                            </button>
                            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400/10 transition-all duration-300 neon-pulse">
                                DOWNLOAD DECK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Parterns;
