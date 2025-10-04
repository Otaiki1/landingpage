const About = () => {
    return (
        <section className="py-20 lg:py-32 section-padding relative overflow-hidden">
            {/* Neon background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl floating-animation neon-glow"></div>
                <div
                    className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl floating-animation neon-pink-glow"
                    style={{ animationDelay: "3s" }}
                ></div>
                <div
                    className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl floating-animation neon-yellow-glow"
                    style={{ animationDelay: "1s" }}
                ></div>
            </div>

            <div className="container-responsive relative z-10">
                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
                    <div className="slide-in-left">
                        <h2 className="text-responsive-xl mb-8">
                            WHO WE ARE
                            <br />
                            <span className="text-responsive-xl">
                                GAMES + APPS + TOOLS
                            </span>
                        </h2>
                        <p className="text-responsive-base text-gray-300 leading-relaxed mb-8">
                            Cracked Studios is a web3 products company
                            pioneering games, applications, and tooling. Gaming
                            is our entry point, but our mission goes beyond play
                            — we're creating an ecosystem of products that are
                            simple, engaging, and community-driven. We want
                            people to feel that web3 isn't just tech — it's
                            culture, it's play, and it's belonging.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="flex items-center gap-2 px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88] rounded-full">
                                <span className="text-2xl">🎮</span>
                                <span className="text-[#00ff88] font-semibold">
                                    Games
                                </span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-[#0FF4C6]/10 border border-[#0FF4C6] rounded-full">
                                <span className="text-2xl">⚡</span>
                                <span className="text-[#0FF4C6] font-semibold">
                                    Apps
                                </span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-[#8B5CF6]/10 border border-[#8B5CF6] rounded-full">
                                <span className="text-2xl">🛠️</span>
                                <span className="text-[#8B5CF6] font-semibold">
                                    Tools
                                </span>
                            </div>
                        </div>
                        <button className="explore-btn">
                            EXPLORE ECOSYSTEM
                        </button>
                    </div>

                    <div className="slide-in-right">
                        <div className="cyberpunk-card p-8 lg:p-12">
                            <h3 className="text-responsive-lg mb-8 text-center neon-text">
                                OUR CORE PILLARS
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="cyberpunk-border p-4 text-center">
                                    <div className="w-12 h-12 bg-[#00ff88] rounded-full flex items-center justify-center mx-auto mb-3 cyberpunk-glow">
                                        <span className="text-2xl">🚀</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-[#00ff88] mb-2">
                                        INNOVATION
                                    </h4>
                                    <p className="text-sm text-gray-300">
                                        Cutting-edge blockchain technology
                                    </p>
                                </div>
                                <div className="cyberpunk-border p-4 text-center">
                                    <div className="w-12 h-12 bg-[#0FF4C6] rounded-full flex items-center justify-center mx-auto mb-3 cyberpunk-glow">
                                        <span className="text-2xl">👥</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-[#0FF4C6] mb-2">
                                        COMMUNITY
                                    </h4>
                                    <p className="text-sm text-gray-300">
                                        Thriving player ecosystem
                                    </p>
                                </div>
                                <div className="cyberpunk-border p-4 text-center">
                                    <div className="w-12 h-12 bg-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-3 cyberpunk-glow">
                                        <span className="text-2xl">🔓</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-[#8B5CF6] mb-2">
                                        ACCESSIBILITY
                                    </h4>
                                    <p className="text-sm text-gray-300">
                                        Easy web3 onboarding
                                    </p>
                                </div>
                                <div className="cyberpunk-border p-4 text-center">
                                    <div className="w-12 h-12 bg-[#00ff88] rounded-full flex items-center justify-center mx-auto mb-3 cyberpunk-glow">
                                        <span className="text-2xl">🎮</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-[#00ff88] mb-2">
                                        FUN
                                    </h4>
                                    <p className="text-sm text-gray-300">
                                        Engaging gameplay experiences
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlights Section */}
                <div className="text-center mb-16">
                    <h3 className="text-responsive-lg mb-4 text-[#00ff88]">
                        WHAT MAKES US DIFFERENT
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Discover the key highlights that set us apart in the
                        web3 ecosystem
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
            </div>
        </section>
    );
};

export default About;
