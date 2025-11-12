import {
    LightningIcon,
    VerifiedIcon,
    NFTIcon,
} from "../BrutalistIcons";

const Games = () => {
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
                    transform: "rotate(0.3deg)",
                }}
            ></div>

            <div className="container-responsive relative z-10">
                {/* Section Header - Glitch-Tech */}
                <div className="border-2 border-[#16A349] p-8 mb-12 bg-black text-center relative glitch-box overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <div className="absolute top-4 right-4 opacity-10 watermark-flicker">
                        <img src="/assets/svg/watermark-black-white.svg" alt="" className="w-20 h-20" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black mb-4 text-[#F2F2F2] relative z-10 glitch-text">
                        OUR <span className="text-[#16A349] glitch-word" data-text="ECOSYSTEM">ECOSYSTEM</span>
                    </h2>
                    <p className="text-[#F2F2F2] text-lg font-medium max-w-2xl mx-auto relative z-10">
                        From games to apps to tools - discover our complete web3 product suite
                    </p>
                </div>

                {/* Game Showcase - Glitch Style */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Game Visual - Offset */}
                    <div className="border-2 border-[#16A349] bg-black p-4 relative glitch-box transform -rotate-0.5 offset-left overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="absolute top-2 left-2 opacity-10 z-10 watermark-flicker">
                            <img src="/assets/svg/icon-green-white.svg" alt="" className="w-12 h-12" />
                        </div>
                        <div className="relative z-10">
                            <img
                                src="/assets/images/Games.png"
                                alt="Games showcase"
                                className="w-full object-cover"
                            />
                            <div className="absolute top-4 right-4 border-2 border-[#16A349] bg-[#16A349] text-black px-4 py-2 glitch-pulse">
                                <span className="font-black text-sm uppercase">LIVE</span>
                            </div>
                        </div>
                    </div>

                    {/* Game Content - Offset */}
                    <div className="space-y-6 transform rotate-0.5 offset-right">
                        <div className="border-2 border-[#16A349] p-6 bg-black relative glitch-box overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="absolute top-2 right-2 opacity-10 watermark-flicker">
                                <img src="/assets/svg/icon-green-white.svg" alt="" className="w-8 h-8" />
                            </div>
                            <img
                                src="/assets/images/Title.png"
                                alt="Tweetle Game Title"
                                className="w-full max-w-md mx-auto relative z-10"
                            />
                        </div>

                        <div className="border-2 border-[#16A349] p-6 bg-black space-y-4 glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="border-2 border-[#16A349] w-6 h-6 bg-[#16A349] flex-shrink-0 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-lg font-medium">
                                    Daily puzzles, leaderboard competitions, NFT achievements
                                </p>
                            </div>
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="border-2 border-[#00FF66] w-6 h-6 bg-[#00FF66] flex-shrink-0 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-lg font-medium">
                                    Play on web - no downloads required
                                </p>
                            </div>
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="border-2 border-[#16A349] w-6 h-6 bg-[#16A349] flex-shrink-0 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-lg font-medium">
                                    250+ active players and growing
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button className="border-2 border-[#16A349] px-6 py-4 bg-[#16A349] text-black font-black text-lg uppercase tracking-wider glitch-button relative group overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <span className="relative z-10">PLAY NOW</span>
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-20 transition-opacity">
                                    <img src="/assets/svg/icon-green-black.svg" alt="" className="w-6 h-6" />
                                </div>
                            </button>
                            <button className="border-2 border-[#16A349] px-6 py-4 bg-black text-[#00FF66] font-black text-lg uppercase tracking-wider glitch-button glitch-button-outline relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <span className="relative z-10">LEARN MORE</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Features Grid - Glitch Style */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border-2 border-[#16A349] p-6 bg-black text-center glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="border-2 border-[#16A349] w-20 h-20 bg-[#16A349] flex items-center justify-center mx-auto mb-4 relative z-10">
                            <LightningIcon className="w-10 h-10" color="black" />
                        </div>
                        <h3 className="text-xl font-black mb-3 text-[#16A349] uppercase relative z-10">
                            LIGHTNING FAST
                        </h3>
                        <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                            Optimized for speed with gas-efficient gameplay
                        </p>
                    </div>

                    <div className="border-2 border-[#00FF66] p-6 bg-black text-center glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="border-2 border-[#00FF66] w-20 h-20 bg-[#00FF66] flex items-center justify-center mx-auto mb-4 relative z-10">
                            <VerifiedIcon className="w-10 h-10" color="black" />
                        </div>
                        <h3 className="text-xl font-black mb-3 text-[#00FF66] uppercase relative z-10">
                            VERIFIABLE RESULTS
                        </h3>
                        <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                            Fair leaderboards with blockchain-verified scores
                        </p>
                    </div>

                    <div className="border-2 border-[#16A349] p-6 bg-black text-center glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="border-2 border-[#16A349] w-20 h-20 bg-[#16A349] flex items-center justify-center mx-auto mb-4 relative z-10">
                            <NFTIcon className="w-10 h-10" color="black" />
                        </div>
                        <h3 className="text-xl font-black mb-3 text-[#16A349] uppercase relative z-10">
                            NFT REWARDS
                        </h3>
                        <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                            Earn unique tokens and NFTs through gameplay
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Games;
