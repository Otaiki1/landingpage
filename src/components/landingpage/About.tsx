import {
    GamesIcon,
    AppsIcon,
    ToolsIcon,
    InnovationIcon,
    CommunityIcon,
    AccessibilityIcon,
    FunIcon,
} from "../BrutalistIcons";

const About = () => {
    return (
        <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
            {/* Brutalist Grid Background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(#24AF52 1px, transparent 1px),
                        linear-gradient(90deg, #24AF52 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                    opacity: 0.05,
                }}
            ></div>

            <div className="container-responsive relative z-10">
                {/* Main Content - Brutalist */}
                <div className="grid lg:grid-cols-2 gap-4 mb-12">
                    {/* Left Column */}
                    <div className="space-y-4">
                        <div className="border-8 border-[#24AF52] p-8 bg-black relative">
                            <div className="absolute top-4 right-4 opacity-10">
                                <img src="/assets/svg/watermark-black-white.svg" alt="" className="w-16 h-16" />
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white relative z-10">
                                WHO WE ARE
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-black mb-6 text-[#24AF52] relative z-10">
                                GAMES + APPS + TOOLS
                            </h3>
                        </div>

                        <div className="border-4 border-[#24AF52] p-6 bg-black">
                            <p className="text-lg md:text-xl text-white leading-relaxed font-medium mb-6">
                                Cracked Studios is a web3 products company
                                pioneering games, applications, and tooling. Gaming
                                is our entry point, but our mission goes beyond play
                                — we're creating an ecosystem of products that are
                                simple, engaging, and community-driven.
                            </p>
                            <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
                                We want people to feel that web3 isn't just tech — it's
                                <span className="text-[#24AF52] font-black"> culture</span>, it's
                                <span className="text-[#A7DFBA] font-black"> play</span>, and it's
                                <span className="text-[#1C6833] font-black"> belonging</span>.
                            </p>
                        </div>

                        {/* Category Tags - Brutalist */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="border-4 border-[#24AF52] p-4 bg-[#24AF52] text-black text-center">
                                <div className="flex justify-center mb-2">
                                    <GamesIcon className="w-8 h-8" color="black" />
                                </div>
                                <span className="font-black text-sm uppercase">Games</span>
                            </div>
                            <div className="border-4 border-[#A7DFBA] p-4 bg-[#A7DFBA] text-black text-center">
                                <div className="flex justify-center mb-2">
                                    <AppsIcon className="w-8 h-8" color="black" />
                                </div>
                                <span className="font-black text-sm uppercase">Apps</span>
                            </div>
                            <div className="border-4 border-[#1C6833] p-4 bg-[#1C6833] text-black text-center">
                                <div className="flex justify-center mb-2">
                                    <ToolsIcon className="w-8 h-8" color="black" />
                                </div>
                                <span className="font-black text-sm uppercase">Tools</span>
                            </div>
                        </div>

                        <button className="w-full border-4 border-[#24AF52] px-8 py-4 bg-black text-[#A7DFBA] font-black text-lg uppercase tracking-wider hover:bg-[#24AF52] hover:text-black transition-colors relative group">
                            <span className="relative z-10">EXPLORE ECOSYSTEM</span>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity">
                                <img src="/assets/svg/icon-green-black.svg" alt="" className="w-6 h-6" />
                            </div>
                        </button>
                    </div>

                    {/* Right Column - Core Pillars */}
                    <div className="space-y-4">
                        <div className="border-4 border-[#24AF52] p-6 bg-black">
                            <h3 className="text-3xl md:text-4xl font-black mb-8 text-center text-[#24AF52]">
                                OUR CORE PILLARS
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="border-4 border-[#24AF52] p-4 bg-black text-center">
                                    <div className="flex justify-center mb-2">
                                        <InnovationIcon className="w-10 h-10" color="#24AF52" />
                                    </div>
                                    <h4 className="font-black text-lg mb-2 text-[#24AF52] uppercase">
                                        INNOVATION
                                    </h4>
                                    <p className="text-white text-sm font-medium">
                                        Cutting-edge blockchain technology
                                    </p>
                                </div>
                                <div className="border-4 border-[#A7DFBA] p-4 bg-black text-center">
                                    <div className="flex justify-center mb-2">
                                        <CommunityIcon className="w-10 h-10" color="#A7DFBA" />
                                    </div>
                                    <h4 className="font-black text-lg mb-2 text-[#A7DFBA] uppercase">
                                        COMMUNITY
                                    </h4>
                                    <p className="text-white text-sm font-medium">
                                        Thriving player ecosystem
                                    </p>
                                </div>
                                <div className="border-4 border-[#1C6833] p-4 bg-black text-center">
                                    <div className="flex justify-center mb-2">
                                        <AccessibilityIcon className="w-10 h-10" color="#1C6833" />
                                    </div>
                                    <h4 className="font-black text-lg mb-2 text-[#1C6833] uppercase">
                                        ACCESSIBILITY
                                    </h4>
                                    <p className="text-white text-sm font-medium">
                                        Easy web3 onboarding
                                    </p>
                                </div>
                                <div className="border-4 border-[#24AF52] p-4 bg-black text-center">
                                    <div className="flex justify-center mb-2">
                                        <FunIcon className="w-10 h-10" color="#24AF52" />
                                    </div>
                                    <h4 className="font-black text-lg mb-2 text-[#24AF52] uppercase">
                                        FUN
                                    </h4>
                                    <p className="text-white text-sm font-medium">
                                        Engaging gameplay experiences
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlights Section - Brutalist */}
                <div className="border-4 border-[#24AF52] p-8 bg-black mb-8">
                    <h3 className="text-4xl md:text-5xl font-black mb-4 text-center text-[#24AF52] uppercase">
                        WHAT MAKES US DIFFERENT
                    </h3>
                    <p className="text-white text-center font-medium max-w-2xl mx-auto mb-8">
                        Discover the key highlights that set us apart in the web3 ecosystem
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border-4 border-[#24AF52] bg-black">
                        <div className="border-b-4 border-[#24AF52]">
                            <img
                                src="/assets/images/Sec3.png"
                                alt="Games in development"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="border-4 border-[#24AF52] p-2 mb-4 bg-[#24AF52] text-black text-center">
                                <p className="font-black text-sm uppercase">+3 GAMES IN DEVELOPMENT</p>
                            </div>
                            <h4 className="text-xl font-black mb-2 text-[#24AF52] uppercase">
                                ACTIVE DEVELOPMENT
                            </h4>
                            <p className="text-white text-sm font-medium">
                                Multiple exciting projects in the pipeline, each
                                pushing the boundaries of onchain gaming.
                            </p>
                        </div>
                    </div>

                    <div className="border-4 border-[#A7DFBA] bg-black">
                        <div className="border-b-4 border-[#A7DFBA]">
                            <img
                                src="/assets/images/Sec2.png"
                                alt="Active players"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="border-4 border-[#A7DFBA] p-2 mb-4 bg-[#A7DFBA] text-black text-center">
                                <p className="font-black text-sm uppercase">+250 ACTIVE TWEETLE PLAYERS</p>
                            </div>
                            <h4 className="text-xl font-black mb-2 text-[#A7DFBA] uppercase">
                                GROWING COMMUNITY
                            </h4>
                            <p className="text-white text-sm font-medium">
                                A thriving community of players who love our
                                innovative approach to word games.
                            </p>
                        </div>
                    </div>

                    <div className="border-4 border-[#1C6833] bg-black">
                        <div className="border-b-4 border-[#1C6833]">
                            <img
                                src="/assets/images/Sec1.png"
                                alt="Multi-chain expansion"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="border-4 border-[#1C6833] p-2 mb-4 bg-[#1C6833] text-black text-center">
                                <p className="font-black text-sm uppercase">EXPANDING TO MULTI-CHAIN</p>
                            </div>
                            <h4 className="text-xl font-black mb-2 text-[#1C6833] uppercase">
                                MULTI-CHAIN FUTURE
                            </h4>
                            <p className="text-white text-sm font-medium">
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
