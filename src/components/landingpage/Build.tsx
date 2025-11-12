import {
    ScalabilityIcon,
    DecentralizationIcon,
    OnboardingIcon,
    RewardsIcon,
    StarknetIcon,
    CairoIcon,
    Web3Icon,
    SecurityIcon,
} from "../BrutalistIcons";

const Build = () => {
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
                    transform: "rotate(-0.2deg)",
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
                        HOW WE <span className="text-[#16A349] glitch-word" data-text="BUILD">BUILD</span>
                    </h2>
                    <p className="text-[#F2F2F2] text-lg font-medium max-w-2xl mx-auto relative z-10">
                        Our development philosophy combines cutting-edge technology with player-first design
                    </p>
                </div>

                {/* Development Principles - Glitch Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="flex items-center gap-4 mb-4 relative z-10">
                            <div className="border-2 border-[#16A349] w-16 h-16 bg-[#16A349] flex items-center justify-center flex-shrink-0">
                                <ScalabilityIcon className="w-8 h-8" color="black" />
                            </div>
                            <h3 className="text-2xl font-black text-[#16A349] uppercase">
                                SCALABILITY
                            </h3>
                        </div>
                        <p className="text-[#F2F2F2] text-base font-medium relative z-10">
                            Layer 2 solutions for lightning-fast transactions
                        </p>
                    </div>

                    <div className="border-2 border-[#00FF66] p-6 bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="flex items-center gap-4 mb-4 relative z-10">
                            <div className="border-2 border-[#00FF66] w-16 h-16 bg-[#00FF66] flex items-center justify-center flex-shrink-0">
                                <DecentralizationIcon className="w-8 h-8" color="black" />
                            </div>
                            <h3 className="text-2xl font-black text-[#00FF66] uppercase">
                                DECENTRALIZATION
                            </h3>
                        </div>
                        <p className="text-[#F2F2F2] text-base font-medium relative z-10">
                            True ownership through blockchain technology
                        </p>
                    </div>

                    <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="flex items-center gap-4 mb-4 relative z-10">
                            <div className="border-2 border-[#16A349] w-16 h-16 bg-[#16A349] flex items-center justify-center flex-shrink-0">
                                <OnboardingIcon className="w-8 h-8" color="black" />
                            </div>
                            <h3 className="text-2xl font-black text-[#16A349] uppercase">
                                SEAMLESS ONBOARDING
                            </h3>
                        </div>
                        <p className="text-[#F2F2F2] text-base font-medium relative z-10">
                            One-click web3 experiences for everyone
                        </p>
                    </div>

                    <div className="border-2 border-[#00FF66] p-6 bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="flex items-center gap-4 mb-4 relative z-10">
                            <div className="border-2 border-[#00FF66] w-16 h-16 bg-[#00FF66] flex items-center justify-center flex-shrink-0">
                                <RewardsIcon className="w-8 h-8" color="black" />
                            </div>
                            <h3 className="text-2xl font-black text-[#00FF66] uppercase">
                                COMMUNITY REWARDS
                            </h3>
                        </div>
                        <p className="text-[#F2F2F2] text-base font-medium relative z-10">
                            Earn tokens and NFTs through gameplay
                        </p>
                    </div>
                </div>

                {/* Technology Stack - Glitch Style */}
                <div className="border-2 border-[#16A349] p-8 mb-8 bg-black glitch-box relative overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <h3 className="text-3xl md:text-4xl font-black mb-8 text-center text-[#16A349] uppercase relative z-10 glitch-text">
                        POWERED BY ADVANCED TECHNOLOGY
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                        <div className="border-2 border-[#16A349] p-6 bg-black text-center glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="border-2 border-[#16A349] w-16 h-16 bg-[#16A349] flex items-center justify-center mx-auto mb-4 relative z-10">
                                <StarknetIcon className="w-8 h-8" color="black" />
                            </div>
                            <h4 className="font-black mb-2 text-[#16A349] uppercase text-sm relative z-10">
                                STARKNET
                            </h4>
                            <p className="text-[#F2F2F2] text-xs font-medium relative z-10">
                                Layer 2 scaling
                            </p>
                        </div>

                        <div className="border-2 border-[#00FF66] p-6 bg-black text-center glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="border-2 border-[#00FF66] w-16 h-16 bg-[#00FF66] flex items-center justify-center mx-auto mb-4 relative z-10">
                                <CairoIcon className="w-8 h-8" color="black" />
                            </div>
                            <h4 className="font-black mb-2 text-[#00FF66] uppercase text-sm relative z-10">
                                CAIRO
                            </h4>
                            <p className="text-[#F2F2F2] text-xs font-medium relative z-10">
                                Smart contracts
                            </p>
                        </div>

                        <div className="border-2 border-[#16A349] p-6 bg-black text-center glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="border-2 border-[#16A349] w-16 h-16 bg-[#16A349] flex items-center justify-center mx-auto mb-4 relative z-10">
                                <Web3Icon className="w-8 h-8" color="black" />
                            </div>
                            <h4 className="font-black mb-2 text-[#16A349] uppercase text-sm relative z-10">
                                WEB3
                            </h4>
                            <p className="text-[#F2F2F2] text-xs font-medium relative z-10">
                                Decentralized gaming
                            </p>
                        </div>

                        <div className="border-2 border-[#00FF66] p-6 bg-black text-center glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="border-2 border-[#00FF66] w-16 h-16 bg-[#00FF66] flex items-center justify-center mx-auto mb-4 relative z-10">
                                <SecurityIcon className="w-8 h-8" color="black" />
                            </div>
                            <h4 className="font-black mb-2 text-[#00FF66] uppercase text-sm relative z-10">
                                SECURITY
                            </h4>
                            <p className="text-[#F2F2F2] text-xs font-medium relative z-10">
                                Audited contracts
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Build;
