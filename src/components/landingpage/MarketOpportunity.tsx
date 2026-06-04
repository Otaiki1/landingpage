const marketStats = [
    {
        value: "$187B",
        label: "Global gaming market (2024)",
        note: "3.3B players",
    },
    {
        value: "$120B+",
        label: "Web3 gaming projected by 2032",
        note: "From $25B today",
    },
    {
        value: "700M+",
        label: "Africans under 35",
        note: "The primary audience",
    },
];

const MarketOpportunity = () => {
    return (
        <section id="market" className="py-20 lg:py-32 bg-black relative overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(#16A349 1px, transparent 1px),
                        linear-gradient(90deg, #16A349 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                    opacity: 0.08,
                    transform: "rotate(0.2deg)",
                }}
            ></div>

            <div className="container-responsive relative z-10">
                <div className="border-2 border-[#16A349] p-8 mb-12 bg-black text-center relative glitch-box overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <p className="text-[#16A349] text-sm md:text-base font-black uppercase tracking-[0.2em] mb-4 relative z-10">
                        THE OPPORTUNITY
                    </p>
                    <h2 className="text-5xl md:text-6xl font-black mb-4 text-[#F2F2F2] relative z-10 glitch-text">
                        CULTURE-NATIVE PRODUCTS.
                    </h2>
                    <p className="text-[#F2F2F2] text-lg font-medium max-w-3xl mx-auto relative z-10">
                        Massive addressable market, low-friction wedge, and distribution rooted in youth culture.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                    {marketStats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`border-2 ${index % 2 === 0 ? "border-[#16A349]" : "border-[#00FF66]"} p-6 bg-black glitch-box relative overflow-hidden`}
                        >
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className={`text-4xl md:text-5xl font-black mb-3 relative z-10 ${index % 2 === 0 ? "text-[#16A349]" : "text-[#00FF66]"}`}>
                                {stat.value}
                            </div>
                            <p className="text-[#F2F2F2] text-base font-black uppercase mb-2 relative z-10">
                                {stat.label}
                            </p>
                            <p className="text-[#B8B8B8] text-sm font-medium relative z-10">
                                {stat.note}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="border-l-4 border-[#00FF66] pl-6 py-2">
                    <p className="text-xl md:text-2xl font-black text-[#F2F2F2] uppercase">
                        &gt;30% of mainstream gamers avoid web3 because of onboarding friction. We fix that.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MarketOpportunity;
