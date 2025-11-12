import {
    ChainIcon,
    TournamentIcon,
    SDKIcon,
    InnovationIcon,
    CommunityIcon,
    RewardsIcon,
} from "../BrutalistIcons";

const Parterns = () => {
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
                {/* Section Header - Brutalist */}
                <div className="border-4 border-[#24AF52] p-8 mb-12 bg-black text-center relative">
                    <div className="absolute top-4 right-4 opacity-10">
                        <img src="/assets/svg/watermark-black-white.svg" alt="" className="w-20 h-20" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black mb-4 text-white relative z-10">
                        PARTNER <span className="text-[#24AF52]">WITH US</span>
                    </h2>
                    <p className="text-white text-lg font-medium max-w-2xl mx-auto relative z-10">
                        Join forces with us to shape the future of web3 products and experiences
                    </p>
                </div>

                {/* Main Content - Brutalist */}
                <div className="grid lg:grid-cols-2 gap-4 mb-12">
                    <div className="space-y-4">
                        <div className="border-8 border-[#24AF52] p-8 bg-black">
                            <h3 className="text-4xl md:text-5xl font-black mb-6 text-white">
                                LET'S BUILD THE FUTURE
                            </h3>
                            <h3 className="text-4xl md:text-5xl font-black mb-6 text-[#24AF52]">
                                TOGETHER
                            </h3>
                        </div>

                        <div className="border-4 border-[#24AF52] p-6 bg-black">
                            <p className="text-lg md:text-xl text-white leading-relaxed font-medium mb-6">
                                For potential sponsors, blockchain networks, and
                                collaborators, we offer exciting partnership
                                opportunities that can help shape the future of
                                gaming.
                            </p>
                        </div>

                        {/* Partnership Types - Brutalist */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <div className="border-4 border-[#24AF52] p-4 bg-black text-center">
                                <div className="flex justify-center mb-2">
                                    <ChainIcon className="w-10 h-10" color="#24AF52" />
                                </div>
                                <h4 className="font-black text-sm mb-2 text-[#24AF52] uppercase">
                                    CHAIN PARTNERSHIPS
                                </h4>
                                <p className="text-white text-xs font-medium">
                                    Multi-chain integration
                                </p>
                            </div>
                            <div className="border-4 border-[#A7DFBA] p-4 bg-black text-center">
                                <div className="flex justify-center mb-2">
                                    <TournamentIcon className="w-10 h-10" color="#A7DFBA" />
                                </div>
                                <h4 className="font-black text-sm mb-2 text-[#A7DFBA] uppercase">
                                    TOURNAMENT SPONSORS
                                </h4>
                                <p className="text-white text-xs font-medium">
                                    Competitive events
                                </p>
                            </div>
                            <div className="border-4 border-[#1C6833] p-4 bg-black text-center">
                                <div className="flex justify-center mb-2">
                                    <SDKIcon className="w-10 h-10" color="#1C6833" />
                                </div>
                                <h4 className="font-black text-sm mb-2 text-[#1C6833] uppercase">
                                    SDK INTEGRATION
                                </h4>
                                <p className="text-white text-xs font-medium">
                                    Developer tools
                                </p>
                            </div>
                        </div>

                        <button className="w-full border-4 border-[#24AF52] px-8 py-4 bg-[#24AF52] text-black font-black text-lg uppercase tracking-wider hover:bg-black hover:text-[#24AF52] transition-colors relative group">
                            <span className="relative z-10">PARTNER WITH US</span>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-20 transition-opacity">
                                <img src="/assets/svg/icon-green-black.svg" alt="" className="w-6 h-6" />
                            </div>
                        </button>
                    </div>

                    {/* Why Partner - Brutalist */}
                    <div className="border-4 border-[#24AF52] p-8 bg-black">
                        <h4 className="text-3xl md:text-4xl font-black mb-8 text-center text-[#24AF52] uppercase">
                            WHY PARTNER WITH US?
                        </h4>
                        <div className="space-y-4">
                            <div className="border-4 border-[#24AF52] p-4 bg-black">
                                <div className="flex items-start gap-4">
                                    <div className="border-4 border-[#24AF52] w-12 h-12 bg-[#24AF52] flex items-center justify-center flex-shrink-0">
                                        <InnovationIcon className="w-6 h-6" color="black" />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-black mb-2 text-[#24AF52] uppercase">
                                            INNOVATION LEADER
                                        </h5>
                                        <p className="text-white text-sm font-medium">
                                            Cutting-edge blockchain gaming technology
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-4 border-[#A7DFBA] p-4 bg-black">
                                <div className="flex items-start gap-4">
                                    <div className="border-4 border-[#A7DFBA] w-12 h-12 bg-[#A7DFBA] flex items-center justify-center flex-shrink-0">
                                        <CommunityIcon className="w-6 h-6" color="black" />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-black mb-2 text-[#A7DFBA] uppercase">
                                            GROWING COMMUNITY
                                        </h5>
                                        <p className="text-white text-sm font-medium">
                                            Active and engaged player base
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-4 border-[#1C6833] p-4 bg-black">
                                <div className="flex items-start gap-4">
                                    <div className="border-4 border-[#1C6833] w-12 h-12 bg-[#1C6833] flex items-center justify-center flex-shrink-0">
                                        <RewardsIcon className="w-6 h-6" color="black" />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-black mb-2 text-[#1C6833] uppercase">
                                            PROVEN TRACK RECORD
                                        </h5>
                                        <p className="text-white text-sm font-medium">
                                            Successful game launches and community building
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section - Brutalist */}
                <div className="border-8 border-[#24AF52] p-12 bg-black text-center">
                    <h3 className="text-4xl md:text-5xl font-black mb-6 text-[#24AF52] uppercase">
                        READY TO PARTNER?
                    </h3>
                    <p className="text-white text-lg font-medium mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can work together to create amazing gaming experiences and grow our communities.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        <button className="border-4 border-[#24AF52] px-8 py-4 bg-[#24AF52] text-black font-black text-lg uppercase tracking-wider hover:bg-black hover:text-[#24AF52] transition-colors relative group">
                            <span className="relative z-10">START PARTNERSHIP</span>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-20 transition-opacity">
                                <img src="/assets/svg/icon-green-black.svg" alt="" className="w-6 h-6" />
                            </div>
                        </button>
                        <button className="border-4 border-[#24AF52] px-8 py-4 bg-black text-[#A7DFBA] font-black text-lg uppercase tracking-wider hover:bg-[#24AF52] hover:text-black transition-colors">
                            DOWNLOAD DECK
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Parterns;
