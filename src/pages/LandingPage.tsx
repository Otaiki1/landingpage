import About from "../components/landingpage/About";
import Games from "../components/landingpage/Games";
import Parterns from "../components/landingpage/Parterns";
import Build from "../components/landingpage/Build";
import {
    DiscordIcon,
    TwitterIcon,
    ContactIcon,
} from "../components/BrutalistIcons";

const LandingPage = () => {
    return (
        <div className="min-h-screen overflow-hidden relative bg-black">
            {/* Hero Section - Brutalist Design */}
            <section className="relative min-h-screen bg-black overflow-hidden">
                {/* Brutalist Grid Background */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                        linear-gradient(#24AF52 1px, transparent 1px),
                        linear-gradient(90deg, #24AF52 1px, transparent 1px)
                    `,
                        backgroundSize: "40px 40px",
                        opacity: 0.1,
                    }}
                ></div>

                <div className="container-responsive relative z-10 min-h-screen flex flex-col">
                    {/* Navigation - Brutalist */}
                    <nav className="py-6 border-b-4 border-[#24AF52] mb-8">
                        <div className="flex justify-between items-center">
                            <div className="border-4 border-[#24AF52] px-6 py-3 bg-black">
                                <img
                                    src="/assets/svg/icon-green-white.svg"
                                    alt="Cracked Studios"
                                    className="h-8 w-auto"
                                />
                            </div>
                            <ul className="hidden md:flex gap-0">
                                <li className="border-4 border-r-0 border-[#24AF52] px-6 py-3 bg-black text-[#A7DFBA] font-black text-sm uppercase tracking-wider hover:bg-[#24AF52] hover:text-black transition-colors">
                                    MENU
                                </li>
                                <li className="border-4 border-r-0 border-[#24AF52] px-6 py-3 bg-black text-[#A7DFBA] font-black text-sm uppercase tracking-wider hover:bg-[#24AF52] hover:text-black transition-colors">
                                    GAMES
                                </li>
                                <li className="border-4 border-[#24AF52] px-6 py-3 bg-black text-[#A7DFBA] font-black text-sm uppercase tracking-wider hover:bg-[#24AF52] hover:text-black transition-colors">
                                    CONTACT
                                </li>
                            </ul>
                            <button className="md:hidden border-4 border-[#24AF52] px-4 py-3 bg-black text-[#A7DFBA]">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={3}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </nav>

                    {/* Hero Content - Brutalist Grid Layout */}
                    <div className="flex-1 grid lg:grid-cols-2 gap-4 items-center">
                        {/* Left Column - Logo & Tagline */}
                        <div className="space-y-4">
                            {/* Icon in brutalist box */}
                            <div className="border-8 border-[#24AF52] p-8 bg-black">
                                <img
                                    src="/assets/svg/icon-green-white.svg"
                                    alt="Cracked Studios Logo"
                                    className="w-full max-w-xs mx-auto"
                                />
                            </div>

                            {/* Wordmark */}
                            <div className="border-4 border-[#24AF52] p-6 bg-black">
                                <img
                                    src="/assets/svg/wordmark-white.svg"
                                    alt="Cracked Studios"
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Tagline Box */}
                            <div className="border-4 border-[#24AF52] p-6 bg-[#24AF52] text-black">
                                <p className="text-2xl md:text-3xl font-black uppercase tracking-wider">
                                    WEB3 PRODUCTS COMPANY
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Main Message */}
                        <div className="space-y-4">
                            {/* Play Build Belong - Brutalist Typography */}
                            <div className="border-8 border-[#24AF52] p-8 bg-black relative">
                                {/* Watermark decoration */}
                                <div className="absolute top-4 right-4 opacity-10">
                                    <img
                                        src="/assets/svg/watermark-black-white.svg"
                                        alt=""
                                        className="w-24 h-24"
                                    />
                                </div>
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none relative z-10">
                                    <span className="block text-[#A7DFBA] mb-2">
                                        PLAY.
                                    </span>
                                    <span className="block text-[#24AF52] mb-2">
                                        BUILD.
                                    </span>
                                    <span className="block text-[#1C6833]">
                                        BELONG.
                                    </span>
                                </h1>
                                <p className="text-3xl md:text-4xl font-black text-white mt-4 relative z-10">
                                    THAT'S{" "}
                                    <span className="text-[#24AF52]">
                                        CRACKED
                                    </span>
                                    .
                                </p>
                            </div>

                            {/* Description Box */}
                            <div className="border-4 border-[#24AF52] p-6 bg-black">
                                <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
                                    Cracked Studios is a Web3 products company
                                    bringing{" "}
                                    <span className="text-[#A7DFBA] font-black">
                                        fun
                                    </span>
                                    ,{" "}
                                    <span className="text-[#24AF52] font-black">
                                        simplicity
                                    </span>
                                    , and{" "}
                                    <span className="text-[#1C6833] font-black">
                                        belonging
                                    </span>{" "}
                                    into decentralized technology.
                                </p>
                                <p className="text-lg md:text-xl text-white leading-relaxed font-medium mt-4">
                                    We design games, applications, and tools
                                    that make Web3 feel less like code and more
                                    like{" "}
                                    <span className="text-[#24AF52] font-black">
                                        culture
                                    </span>{" "}
                                    — where everyone can play, build, and
                                    belong.
                                </p>
                            </div>

                            {/* CTA Buttons - Brutalist */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button className="border-4 border-[#24AF52] px-8 py-4 bg-[#24AF52] text-black font-black text-lg uppercase tracking-wider hover:bg-black hover:text-[#24AF52] transition-colors relative group">
                                    <span className="relative z-10">
                                        EXPLORE GAMES
                                    </span>
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-20 transition-opacity">
                                        <img
                                            src="/assets/svg/icon-green-black.svg"
                                            alt=""
                                            className="w-8 h-8"
                                        />
                                    </div>
                                </button>
                                <button className="border-4 border-[#24AF52] px-8 py-4 bg-black text-[#A7DFBA] font-black text-lg uppercase tracking-wider hover:bg-[#24AF52] hover:text-black transition-colors">
                                    DISCOVER TOOLS
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator - Brutalist */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="border-4 border-[#24AF52] w-8 h-12 bg-black flex items-center justify-center">
                            <div className="w-2 h-4 bg-[#24AF52] animate-bounce"></div>
                        </div>
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

            {/* Footer - Brutalist */}
            <footer className="relative bg-black py-20">
                <div className="container-responsive">
                    {/* Main Footer Content */}
                    <div className="border-8 border-[#24AF52] p-12 mb-8 bg-black relative">
                        {/* Watermark decoration */}
                        <div className="absolute top-8 right-8 opacity-5">
                            <img
                                src="/assets/svg/watermark-black-white.svg"
                                alt=""
                                className="w-32 h-32"
                            />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black mb-8 text-center relative z-10">
                            <span className="block text-[#A7DFBA] mb-2">
                                PLAY.
                            </span>
                            <span className="block text-[#24AF52] mb-2">
                                BUILD.
                            </span>
                            <span className="block text-[#1C6833]">
                                BELONG.
                            </span>
                        </h2>
                        <p className="text-3xl md:text-4xl font-black text-white text-center mb-4 relative z-10">
                            THAT'S{" "}
                            <span className="text-[#24AF52]">CRACKED</span>.
                        </p>
                    </div>

                    {/* Description Box */}
                    <div className="border-4 border-[#24AF52] p-8 mb-8 bg-black">
                        <p className="text-lg md:text-xl text-white leading-relaxed font-medium text-center max-w-3xl mx-auto">
                            Whether you're a gamer exploring blockchain-based
                            fun, a non-crypto native trying web3 for the first
                            time, or a web3 builder looking for apps and tools
                            that actually work - we've got you covered. Join our
                            community and be part of the web3 revolution.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
                        <button className="border-4 border-[#24AF52] px-8 py-4 bg-[#24AF52] text-black font-black text-lg uppercase tracking-wider hover:bg-black hover:text-[#24AF52] transition-colors">
                            JOIN THE COMMUNITY
                        </button>
                        <button className="border-4 border-[#24AF52] px-8 py-4 bg-black text-[#A7DFBA] font-black text-lg uppercase tracking-wider hover:bg-[#24AF52] hover:text-black transition-colors">
                            WORK WITH US
                        </button>
                    </div>

                    {/* Community Links - Brutalist */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
                        <a
                            href="#"
                            className="border-4 border-[#24AF52] p-6 bg-black text-center hover:bg-[#24AF52] hover:text-black transition-colors relative group"
                        >
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity">
                                <img
                                    src="/assets/svg/icon-green-black.svg"
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex justify-center mb-2">
                                <DiscordIcon
                                    className="w-10 h-10"
                                    color="#A7DFBA"
                                />
                            </div>
                            <span className="text-[#A7DFBA] font-black text-lg uppercase tracking-wider hover:text-black">
                                Discord
                            </span>
                        </a>
                        <a
                            href="#"
                            className="border-4 border-[#24AF52] p-6 bg-black text-center hover:bg-[#24AF52] hover:text-black transition-colors relative group"
                        >
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity">
                                <img
                                    src="/assets/svg/icon-green-black.svg"
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex justify-center mb-2">
                                <TwitterIcon
                                    className="w-10 h-10"
                                    color="#A7DFBA"
                                />
                            </div>
                            <span className="text-[#A7DFBA] font-black text-lg uppercase tracking-wider hover:text-black">
                                Twitter
                            </span>
                        </a>
                        <a
                            href="#"
                            className="border-4 border-[#1C6833] p-6 bg-black text-center hover:bg-[#1C6833] hover:text-white transition-colors relative group"
                        >
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity">
                                <img
                                    src="/assets/svg/icon-black-white.svg"
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex justify-center mb-2">
                                <ContactIcon
                                    className="w-10 h-10"
                                    color="#A7DFBA"
                                />
                            </div>
                            <span className="text-[#A7DFBA] font-black text-lg uppercase tracking-wider hover:text-white">
                                Contact
                            </span>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="border-t-4 border-[#24AF52] pt-8 text-center">
                        <p className="text-[#24AF52] font-black text-lg uppercase mb-2">
                            © 2024 CRACKED STUDIOS. ALL RIGHTS RESERVED.
                        </p>
                        <p className="text-white font-medium">
                            Making web3 fun, simple, and rewarding for everyone.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Brutalist Styles & Font System */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Bungee+Shade&family=Press+Start+2P&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }
        
        /* Display/Heading Fonts - Geometric, Futuristic, Tech-Inspired */
        h1, h2, h3, h4, h5, h6, .font-brutal, .font-display {
          font-family: 'Orbitron', 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        
        /* Extra bold headings */
        .font-black, h1, h2 {
          font-weight: 900;
        }
        
        /* Playful cracked feel for special headings - Bungee Shade */
        .font-cracked, .font-playful {
          font-family: 'Bungee Shade', 'Orbitron', 'Space Grotesk', sans-serif;
          font-weight: 400;
          letter-spacing: 0.1em;
        }
        
        /* Retro pixel/hacking edge - Press Start 2P */
        .font-pixel, .font-retro {
          font-family: 'Press Start 2P', 'Orbitron', 'Space Grotesk', sans-serif;
          font-weight: 400;
          letter-spacing: 0.05em;
          line-height: 1.6;
        }
        
        /* Body text - Space Grotesk for readability */
        p, span, li, a, button, .font-body {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          font-weight: 400;
          letter-spacing: -0.01em;
        }
        
        /* Medium weight for emphasis */
        .font-medium {
          font-weight: 500;
        }
        
        /* Strong/bold body text */
        strong, b, .font-bold {
          font-weight: 700;
        }
        
        /* Utility classes */
        .container-responsive { 
          padding-left: 1.25rem; 
          padding-right: 1.25rem; 
          max-width: 1180px; 
          margin-left: auto; 
          margin-right: auto; 
        }
        .section-padding { 
          padding-top: 4rem; 
          padding-bottom: 4rem; 
        }
      `}</style>
        </div>
    );
};

export default LandingPage;
