import About from "../components/landingpage/About";
import Games from "../components/landingpage/Games";
import Parterns from "../components/landingpage/Parterns";
import Build from "../components/landingpage/Build";

const LandingPage = () => {
    return (
        <div className="min-h-screen overflow-hidden relative">
            {/* Neon Grid Background */}
            <div className="fixed inset-0 neon-grid opacity-30"></div>

            {/* Floating Neon Particles */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="neon-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${8 + Math.random() * 4}s`,
                        }}
                    ></div>
                ))}
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Cyberpunk Background */}
                <div className="absolute inset-0 bg-[url('/assets/images/Hero.png')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90"></div>
                <div className="absolute inset-0 pixel-grid opacity-30"></div>

                {/* Animated cyberpunk elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff88]/30 rounded-full blur-3xl floating-animation cyberpunk-glow"></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0ff4c6]/30 rounded-full blur-3xl floating-animation"
                        style={{ animationDelay: "2s" }}
                    ></div>
                    <div
                        className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#8b5cf6]/30 rounded-full blur-3xl floating-animation"
                        style={{ animationDelay: "4s" }}
                    ></div>

                    {/* Cyberpunk grid lines */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-50"></div>
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0ff4c6] to-transparent opacity-50"></div>
                        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent opacity-50"></div>
                    </div>
                </div>

                <div className="container-responsive section-padding relative z-10">
                    {/* Navigation */}
                    <nav className="flex justify-between items-center mb-16 fade-in">
                        <div className="navbar-brand">CRACKED STUDIO</div>
                        <ul className="hidden md:flex gap-4 text-lg font-medium">
                            <li className="navbar-menu-item">MENU</li>
                            <li className="navbar-menu-item">GAMES</li>
                            <li className="navbar-menu-item">CONTACT</li>
                        </ul>
                        <button className="md:hidden navbar-menu-item">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </nav>

                    {/* Hero Content */}
                    <div className="text-center max-w-6xl mx-auto">
                        <h1
                            className="text-responsive-xl mb-8 fade-in hero-3d-text"
                            data-text="PLAY. BUILD. BELONG. THAT'S CRACKED."
                        >
                            PLAY. BUILD. BELONG.
                            <br />
                            <span className="text-responsive-xl">
                                THAT'S CRACKED.
                            </span>
                        </h1>
                        <p className="text-responsive-base mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed fade-in">
                            We build web3 games, applications, and tools that
                            make blockchain fun, seamless, and rewarding. Gaming
                            is our entry point, but our mission goes beyond play
                            — we're creating an ecosystem of products that are
                            simple, engaging, and community-driven.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in">
                            <button className="explore-btn">
                                EXPLORE OUR GAMES
                            </button>
                            <button className="glass-btn">
                                DISCOVER OUR TOOLS
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center neon-glow">
                        <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="relative">
                <About />
                <Games />
                <Build />
                <Parterns />
            </div>

            {/* Footer */}
            <footer className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/images/Footer.png')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>

                <div className="container-responsive section-padding relative z-10 text-center">
                    <h2
                        className="text-responsive-xl mb-8 fade-in hero-3d-text"
                        data-text="PLAY. BUILD. BELONG. THAT'S CRACKED."
                    >
                        PLAY. BUILD. BELONG.
                        <br />
                        <span className="text-responsive-xl">
                            THAT'S CRACKED.
                        </span>
                    </h2>
                    <p className="text-responsive-base mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed fade-in">
                        Whether you're a gamer exploring blockchain-based fun, a
                        non-crypto native trying web3 for the first time, or a
                        web3 builder looking for apps and tools that actually
                        work - we've got you covered. Join our community and be
                        part of the web3 revolution.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in mb-12">
                        <button className="explore-btn">
                            JOIN THE COMMUNITY
                        </button>
                        <button className="glass-btn">WORK WITH US</button>
                    </div>

                    {/* Community Links */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <a
                            href="#"
                            className="cyberpunk-card p-4 hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#00ff88] rounded-full flex items-center justify-center cyberpunk-glow">
                                    <span className="text-lg">💬</span>
                                </div>
                                <span className="text-[#00ff88] font-semibold">
                                    Discord
                                </span>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="cyberpunk-card p-4 hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#0ff4c6] rounded-full flex items-center justify-center cyberpunk-glow">
                                    <span className="text-lg">🐦</span>
                                </div>
                                <span className="text-[#0ff4c6] font-semibold">
                                    Twitter
                                </span>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="cyberpunk-card p-4 hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#8b5cf6] rounded-full flex items-center justify-center cyberpunk-glow">
                                    <span className="text-lg">📧</span>
                                </div>
                                <span className="text-[#8b5cf6] font-semibold">
                                    Contact
                                </span>
                            </div>
                        </a>
                    </div>

                    <div className="mt-16 pt-8 border-t border-[#00ff88]/30">
                        <p className="text-[#00ff88]">
                            © 2024 CRACKED STUDIOS. ALL RIGHTS RESERVED.
                        </p>
                        <p className="text-gray-400 mt-2">
                            Making web3 fun, simple, and rewarding for everyone.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
