import {
    LightningIcon,
    VerifiedIcon,
    NFTIcon,
} from "../BrutalistIcons";

const Games = () => {
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
                        OUR <span className="text-[#24AF52]">ECOSYSTEM</span>
                    </h2>
                    <p className="text-white text-lg font-medium max-w-2xl mx-auto relative z-10">
                        From games to apps to tools - discover our complete web3 product suite
                    </p>
                </div>

                {/* Game Showcase - Brutalist */}
                <div className="grid lg:grid-cols-2 gap-4 mb-12">
                    {/* Game Visual */}
                    <div className="border-4 border-[#24AF52] bg-black p-4 relative">
                        <div className="absolute top-2 left-2 opacity-10 z-10">
                            <img src="/assets/svg/icon-green-white.svg" alt="" className="w-12 h-12" />
                        </div>
                        <div className="relative">
                            <img
                                src="/assets/images/Games.png"
                                alt="Games showcase"
                                className="w-full object-cover"
                            />
                            <div className="absolute top-4 right-4 border-4 border-[#24AF52] bg-[#24AF52] text-black px-4 py-2">
                                <span className="font-black text-sm uppercase">LIVE</span>
                            </div>
                        </div>
                    </div>

                    {/* Game Content */}
                    <div className="space-y-4">
                        <div className="border-4 border-[#24AF52] p-6 bg-black relative">
                            <div className="absolute top-2 right-2 opacity-10">
                                <img src="/assets/svg/icon-green-white.svg" alt="" className="w-8 h-8" />
                            </div>
                            <img
                                src="/assets/images/Title.png"
                                alt="Tweetle Game Title"
                                className="w-full max-w-md mx-auto relative z-10"
                            />
                        </div>

                        <div className="border-4 border-[#24AF52] p-6 bg-black space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="border-4 border-[#24AF52] w-6 h-6 bg-[#24AF52] flex-shrink-0"></div>
                                <p className="text-white text-lg font-medium">
                                    Daily puzzles, leaderboard competitions, NFT achievements
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="border-4 border-[#A7DFBA] w-6 h-6 bg-[#A7DFBA] flex-shrink-0"></div>
                                <p className="text-white text-lg font-medium">
                                    Play on web - no downloads required
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="border-4 border-[#1C6833] w-6 h-6 bg-[#1C6833] flex-shrink-0"></div>
                                <p className="text-white text-lg font-medium">
                                    250+ active players and growing
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button className="border-4 border-[#24AF52] px-6 py-4 bg-[#24AF52] text-black font-black text-lg uppercase tracking-wider hover:bg-black hover:text-[#24AF52] transition-colors relative group">
                                <span className="relative z-10">PLAY NOW</span>
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-20 transition-opacity">
                                    <img src="/assets/svg/icon-green-black.svg" alt="" className="w-6 h-6" />
                                </div>
                            </button>
                            <button className="border-4 border-[#24AF52] px-6 py-4 bg-black text-[#A7DFBA] font-black text-lg uppercase tracking-wider hover:bg-[#24AF52] hover:text-black transition-colors">
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Features Grid - Brutalist */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border-4 border-[#24AF52] p-6 bg-black text-center">
                        <div className="border-4 border-[#24AF52] w-20 h-20 bg-[#24AF52] flex items-center justify-center mx-auto mb-4">
                            <LightningIcon className="w-10 h-10" color="black" />
                        </div>
                        <h3 className="text-xl font-black mb-3 text-[#24AF52] uppercase">
                            LIGHTNING FAST
                        </h3>
                        <p className="text-white text-sm font-medium">
                            Optimized for speed with gas-efficient gameplay
                        </p>
                    </div>

                    <div className="border-4 border-[#A7DFBA] p-6 bg-black text-center">
                        <div className="border-4 border-[#A7DFBA] w-20 h-20 bg-[#A7DFBA] flex items-center justify-center mx-auto mb-4">
                            <VerifiedIcon className="w-10 h-10" color="black" />
                        </div>
                        <h3 className="text-xl font-black mb-3 text-[#A7DFBA] uppercase">
                            VERIFIABLE RESULTS
                        </h3>
                        <p className="text-white text-sm font-medium">
                            Fair leaderboards with blockchain-verified scores
                        </p>
                    </div>

                    <div className="border-4 border-[#1C6833] p-6 bg-black text-center">
                        <div className="border-4 border-[#1C6833] w-20 h-20 bg-[#1C6833] flex items-center justify-center mx-auto mb-4">
                            <NFTIcon className="w-10 h-10" color="black" />
                        </div>
                        <h3 className="text-xl font-black mb-3 text-[#1C6833] uppercase">
                            NFT REWARDS
                        </h3>
                        <p className="text-white text-sm font-medium">
                            Earn unique tokens and NFTs through gameplay
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Games;
