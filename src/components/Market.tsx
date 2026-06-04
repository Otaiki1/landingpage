import Reveal from "./Reveal";

const marketStats = [
    {
        value: "$187B",
        label: "Global gaming market",
        note: "2024 · 3.3B players",
    },
    {
        value: "$120B+",
        label: "Projected web3 gaming market",
        note: "2032 · from $25B today",
    },
    {
        value: "700M+",
        label: "Africans under 35",
        note: "Primary audience",
    },
];

const Market = () => {
    return (
        <section id="market" className="section-block">
            <div className="site-shell">
                <Reveal>
                    <div className="section-heading">
                        <p className="section-label">The Opportunity</p>
                        <h2>Culture-native products meet a massive addressable market.</h2>
                    </div>
                </Reveal>

                <div className="market-grid">
                    {marketStats.map((stat, index) => (
                        <Reveal key={stat.label} delay={index * 80}>
                            <article className="market-card">
                                <p className="market-value">{stat.value}</p>
                                <p className="market-label">{stat.label}</p>
                                <p className="market-note">{stat.note}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={160}>
                    <p className="market-footnote">
                        More than 30% of mainstream gamers avoid web3 because onboarding friction
                        breaks the experience. Cracked Studios builds around that constraint.
                    </p>
                </Reveal>
            </div>
        </section>
    );
};

export default Market;
