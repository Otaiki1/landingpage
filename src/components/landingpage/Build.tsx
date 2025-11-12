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
                        HOW WE <span className="text-[#24AF52]">BUILD</span>
                    </h2>
                    <p className="text-white text-lg font-medium max-w-2xl mx-auto relative z-10">
                        Our development philosophy combines cutting-edge technology with player-first design
                    </p>
                </div>

                {/* Development Principles - Brutalist Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    <div className="border-4 border-[#24AF52] p-6 bg-black">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="border-4 border-[#24AF52] w-16 h-16 bg-[#24AF52] flex items-center justify-center flex-shrink-0">
                                <ScalabilityIcon className="w-8 h-8" color="black" />
                            </div>
                            <h3 className="text-2xl font-black text-[#24AF52] uppercase">
                                SCALABILITY
                            </h3>
                        </div>
                        <p className="text-white text-base font-medium">
                            Layer 2 solutions for lightning-fast transactions
                        </p>
                    </div>

                    <div className="border-4 border-[#A7DFBA] p-6 bg-black">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="border-4 border-[#A7DFBA] w-16 h-16 bg-[#A7DFBA] flex items-center justify-center flex-shrink-0">
                                <DecentralizationIcon className="w-8 h-8" color="black" />
                            </div>
                            <h3 className="text-2xl font-black text-[#A7DFBA] uppercase">
                                DECENTRALIZATION
                            </h3>
                        </div>
                        <p className="text-white text-base font-medium">
                            True ownership through blockchain technology
                        </p>
                    </div>

                    <div className="border-4 border-[#1C6833] p-6 bg-black">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="border-4 border-[#1C6833] w-16 h-16 bg-[#1C6833] flex items-center justify-center flex-shrink-0">
                                <OnboardingIcon className="w-8 h-8" color="black" />
                            </div>
                            <h3 className="text-2xl font-black text-[#1C6833] uppercase">
                                SEAMLESS ONBOARDING
                            </h3>
                        </div>
                        <p className="text-white text-base font-medium">
                            One-click web3 experiences for everyone
                        </p>
                    </div>

                    <div className="border-4 border-[#24AF52] p-6 bg-black">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="border-4 border-[#24AF52] w-16 h-16 bg-[#24AF52] flex items-center justify-center flex-shrink-0">
                                <RewardsIcon className="w-8 h-8" color="black" />
                            </div>
                            <h3 className="text-2xl font-black text-[#24AF52] uppercase">
                                COMMUNITY REWARDS
                            </h3>
                        </div>
                        <p className="text-white text-base font-medium">
                            Earn tokens and NFTs through gameplay
                        </p>
                    </div>
                </div>

                {/* Technology Stack - Brutalist */}
                <div className="border-4 border-[#24AF52] p-8 mb-8 bg-black">
                    <h3 className="text-3xl md:text-4xl font-black mb-8 text-center text-[#24AF52] uppercase">
                        POWERED BY ADVANCED TECHNOLOGY
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="border-4 border-[#24AF52] p-6 bg-black text-center">
                            <div className="border-4 border-[#24AF52] w-16 h-16 bg-[#24AF52] flex items-center justify-center mx-auto mb-4">
                                <StarknetIcon className="w-8 h-8" color="black" />
                            </div>
                            <h4 className="font-black mb-2 text-[#24AF52] uppercase text-sm">
                                STARKNET
                            </h4>
                            <p className="text-white text-xs font-medium">
                                Layer 2 scaling
                            </p>
                        </div>

                        <div className="border-4 border-[#A7DFBA] p-6 bg-black text-center">
                            <div className="border-4 border-[#A7DFBA] w-16 h-16 bg-[#A7DFBA] flex items-center justify-center mx-auto mb-4">
                                <CairoIcon className="w-8 h-8" color="black" />
                            </div>
                            <h4 className="font-black mb-2 text-[#A7DFBA] uppercase text-sm">
                                CAIRO
                            </h4>
                            <p className="text-white text-xs font-medium">
                                Smart contracts
                            </p>
                        </div>

                        <div className="border-4 border-[#1C6833] p-6 bg-black text-center">
                            <div className="border-4 border-[#1C6833] w-16 h-16 bg-[#1C6833] flex items-center justify-center mx-auto mb-4">
                                <Web3Icon className="w-8 h-8" color="black" />
                            </div>
                            <h4 className="font-black mb-2 text-[#1C6833] uppercase text-sm">
                                WEB3
                            </h4>
                            <p className="text-white text-xs font-medium">
                                Decentralized gaming
                            </p>
                        </div>

                        <div className="border-4 border-[#24AF52] p-6 bg-black text-center">
                            <div className="border-4 border-[#24AF52] w-16 h-16 bg-[#24AF52] flex items-center justify-center mx-auto mb-4">
                                <SecurityIcon className="w-8 h-8" color="black" />
                            </div>
                            <h4 className="font-black mb-2 text-[#24AF52] uppercase text-sm">
                                SECURITY
                            </h4>
                            <p className="text-white text-xs font-medium">
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
