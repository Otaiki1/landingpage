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
            {/* Glitch Grid Background - Asymmetric */}
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
                {/* Main Content - Glitch-Tech */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Left Column - Offset */}
                    <div className="space-y-6 transform -rotate-0.5 offset-left">
                        <div className="border-4 border-[#16A349] p-8 bg-black relative glitch-box overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="absolute top-4 right-4 opacity-10 watermark-flicker">
                                <img src="/assets/svg/watermark-black-white.svg" alt="" className="w-16 h-16" />
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black mb-6 text-[#F2F2F2] relative z-10 glitch-text">
                                WHO WE ARE
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-black mb-6 text-[#16A349] relative z-10 glitch-text">
                                GAMES + APPS + TOOLS
                            </h3>
                        </div>

                        <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <p className="text-lg md:text-xl text-[#F2F2F2] leading-relaxed font-medium mb-6 relative z-10">
                                Cracked Studios is a web3 products company
                                pioneering games, applications, and tooling. Gaming
                                is our entry point, but our mission goes beyond play
                                — we're creating an ecosystem of products that are
                                simple, engaging, and community-driven.
                            </p>
                            <p className="text-lg md:text-xl text-[#F2F2F2] leading-relaxed font-medium relative z-10">
                                We want people to feel that web3 isn't just tech — it's
                                <span className="text-[#16A349] font-black glitch-hover"> culture</span>, it's
                                <span className="text-[#00FF66] font-black glitch-hover"> play</span>, and it's
                                <span className="text-[#16A349] font-black glitch-hover"> belonging</span>.
                            </p>
                        </div>

                        {/* Category Tags - Glitch Style */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="border-2 border-[#16A349] p-4 bg-[#16A349] text-black text-center glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="flex justify-center mb-2 relative z-10">
                                    <GamesIcon className="w-8 h-8" color="black" />
                                </div>
                                <span className="font-black text-sm uppercase relative z-10">Games</span>
                            </div>
                            <div className="border-2 border-[#00FF66] p-4 bg-[#00FF66] text-black text-center glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="flex justify-center mb-2 relative z-10">
                                    <AppsIcon className="w-8 h-8" color="black" />
                                </div>
                                <span className="font-black text-sm uppercase relative z-10">Apps</span>
                            </div>
                            <div className="border-2 border-[#16A349] p-4 bg-[#16A349] text-black text-center glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="flex justify-center mb-2 relative z-10">
                                    <ToolsIcon className="w-8 h-8" color="black" />
                                </div>
                                <span className="font-black text-sm uppercase relative z-10">Tools</span>
                            </div>
                        </div>

                        <button className="w-full border-2 border-[#16A349] px-8 py-4 bg-black text-[#00FF66] font-black text-lg uppercase tracking-wider glitch-button glitch-button-outline relative group overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <span className="relative z-10">EXPLORE ECOSYSTEM</span>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity">
                                <img src="/assets/svg/icon-green-black.svg" alt="" className="w-6 h-6" />
                            </div>
                        </button>
                    </div>

                    {/* Right Column - Core Pillars - Offset */}
                    <div className="space-y-6 transform rotate-0.5 offset-right">
                        <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <h3 className="text-3xl md:text-4xl font-black mb-8 text-center text-[#16A349] relative z-10 glitch-text">
                                OUR CORE PILLARS
                            </h3>
                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                <div className="border-2 border-[#16A349] p-4 bg-black text-center glitch-box relative overflow-hidden">
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <div className="flex justify-center mb-2 relative z-10">
                                        <InnovationIcon className="w-10 h-10" color="#16A349" />
                                    </div>
                                    <h4 className="font-black text-lg mb-2 text-[#16A349] uppercase relative z-10">
                                        INNOVATION
                                    </h4>
                                    <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                        Cutting-edge blockchain technology
                                    </p>
                                </div>
                                <div className="border-2 border-[#00FF66] p-4 bg-black text-center glitch-box relative overflow-hidden">
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <div className="flex justify-center mb-2 relative z-10">
                                        <CommunityIcon className="w-10 h-10" color="#00FF66" />
                                    </div>
                                    <h4 className="font-black text-lg mb-2 text-[#00FF66] uppercase relative z-10">
                                        COMMUNITY
                                    </h4>
                                    <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                        Thriving player ecosystem
                                    </p>
                                </div>
                                <div className="border-2 border-[#16A349] p-4 bg-black text-center glitch-box relative overflow-hidden">
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <div className="flex justify-center mb-2 relative z-10">
                                        <AccessibilityIcon className="w-10 h-10" color="#16A349" />
                                    </div>
                                    <h4 className="font-black text-lg mb-2 text-[#16A349] uppercase relative z-10">
                                        ACCESSIBILITY
                                    </h4>
                                    <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                        Easy web3 onboarding
                                    </p>
                                </div>
                                <div className="border-2 border-[#00FF66] p-4 bg-black text-center glitch-box relative overflow-hidden">
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <div className="flex justify-center mb-2 relative z-10">
                                        <FunIcon className="w-10 h-10" color="#00FF66" />
                                    </div>
                                    <h4 className="font-black text-lg mb-2 text-[#00FF66] uppercase relative z-10">
                                        FUN
                                    </h4>
                                    <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                        Engaging gameplay experiences
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlights Section - Glitch Style */}
                <div className="border-2 border-[#16A349] p-8 bg-black mb-8 glitch-box relative overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <h3 className="text-4xl md:text-5xl font-black mb-4 text-center text-[#16A349] uppercase relative z-10 glitch-text">
                        WHAT MAKES US DIFFERENT
                    </h3>
                    <p className="text-[#F2F2F2] text-center font-medium max-w-2xl mx-auto mb-8 relative z-10">
                        Discover the key highlights that set us apart in the web3 ecosystem
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border-2 border-[#16A349] bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="border-b-2 border-[#16A349]">
                            <img
                                src="/assets/images/Sec3.png"
                                alt="Games in development"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-6 relative z-10">
                            <div className="border-2 border-[#16A349] p-2 mb-4 bg-[#16A349] text-black text-center">
                                <p className="font-black text-sm uppercase">+3 GAMES IN DEVELOPMENT</p>
                            </div>
                            <h4 className="text-xl font-black mb-2 text-[#16A349] uppercase">
                                ACTIVE DEVELOPMENT
                            </h4>
                            <p className="text-[#F2F2F2] text-sm font-medium">
                                Multiple exciting projects in the pipeline, each
                                pushing the boundaries of onchain gaming.
                            </p>
                        </div>
                    </div>

                    <div className="border-2 border-[#00FF66] bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="border-b-2 border-[#00FF66]">
                            <img
                                src="/assets/images/Sec2.png"
                                alt="Active players"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-6 relative z-10">
                            <div className="border-2 border-[#00FF66] p-2 mb-4 bg-[#00FF66] text-black text-center">
                                <p className="font-black text-sm uppercase">+250 ACTIVE TWEETLE PLAYERS</p>
                            </div>
                            <h4 className="text-xl font-black mb-2 text-[#00FF66] uppercase">
                                GROWING COMMUNITY
                            </h4>
                            <p className="text-[#F2F2F2] text-sm font-medium">
                                A thriving community of players who love our
                                innovative approach to word games.
                            </p>
                        </div>
                    </div>

                    <div className="border-2 border-[#16A349] bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="border-b-2 border-[#16A349]">
                            <img
                                src="/assets/images/Sec1.png"
                                alt="Multi-chain expansion"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-6 relative z-10">
                            <div className="border-2 border-[#16A349] p-2 mb-4 bg-[#16A349] text-black text-center">
                                <p className="font-black text-sm uppercase">EXPANDING TO MULTI-CHAIN</p>
                            </div>
                            <h4 className="text-xl font-black mb-2 text-[#16A349] uppercase">
                                MULTI-CHAIN FUTURE
                            </h4>
                            <p className="text-[#F2F2F2] text-sm font-medium">
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
