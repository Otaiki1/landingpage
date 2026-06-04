import CountUpValue from "./CountUpValue";

interface HeroProps {
    onOpenWhitepaper: () => void;
}

const heroStats = [
    { value: 5, label: "Products Deployed" },
    { value: 5, label: "Chains Deployed" },
    { value: 11, label: "AI Signals" },
    { value: 100, label: "Developers Mentored", suffix: "+" },
];

const nodePositions = [
    { name: "Vanta", top: "10%", left: "24%" },
    { name: "Flare", top: "17%", left: "68%" },
    { name: "Prism", top: "36%", left: "18%" },
    { name: "Forge", top: "39%", left: "53%" },
    { name: "Thread", top: "32%", left: "83%" },
    { name: "Vault", top: "61%", left: "27%" },
    { name: "Circuit", top: "63%", left: "66%" },
    { name: "Spark", top: "82%", left: "49%" },
];

const Hero = ({ onOpenWhitepaper }: HeroProps) => {
    return (
        <section id="top" className="hero-section">
            <div className="site-shell hero-grid">
                <div className="hero-copy">
                    <div className="eyebrow-row">
                        <span className="eyebrow">Human-AI Hybrid Operating Studio</span>
                        <span className="mono-chip">Play. Build. Belong.</span>
                    </div>

                    <div className="hero-stack">
                        <p className="hero-kicker">Lagos, Nigeria · Global Products</p>
                        <h1 className="hero-title">
                            The Studio That
                            <br />
                            Doesn&apos;t Sleep.
                        </h1>
                        <p className="hero-subtitle">
                            Cracked Studios is a human-AI hybrid web3 studio with deployed
                            products across Celo, Base, Starknet, Somnia, and Avalanche. Seven
                            products are live or in flight, and The Rig keeps the studio operating
                            around the clock.
                        </p>
                    </div>

                    <div className="hero-actions">
                        <a className="solid-button" href="#products">
                            Explore Products
                        </a>
                        <button type="button" className="outline-button" onClick={onOpenWhitepaper}>
                            Read the Whitepaper
                        </button>
                    </div>

                    <div className="stats-grid">
                        {heroStats.map((stat) => (
                            <article key={stat.label} className="stat-card">
                                <p className="stat-value">
                                    <CountUpValue end={stat.value} suffix={stat.suffix} />
                                </p>
                                <p className="stat-label">{stat.label}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="rig-graph-card">
                        <div className="rig-graph-header">
                            <span className="eyebrow">The Rig</span>
                            <span className="mono-chip">11 Signals Online</span>
                        </div>

                        <svg
                            className="rig-lines"
                            viewBox="0 0 100 100"
                            aria-hidden="true"
                            preserveAspectRatio="none"
                        >
                            <path d="M25 15 L50 40 L70 20" />
                            <path d="M18 36 L50 40 L83 33" />
                            <path d="M27 61 L50 40 L66 64" />
                            <path d="M27 61 L49 82 L66 64" />
                            <path d="M25 15 L18 36 L27 61" />
                            <path d="M70 20 L83 33 L66 64" />
                        </svg>

                        <div className="central-node">
                            <span>THE STACK</span>
                        </div>

                        {nodePositions.map((node, index) => (
                            <div
                                key={node.name}
                                className="signal-node"
                                style={
                                    {
                                        top: node.top,
                                        left: node.left,
                                        animationDelay: `${index * 160}ms`,
                                    } as React.CSSProperties
                                }
                            >
                                <span>{node.name}</span>
                            </div>
                        ))}

                        <div className="hero-product-strip" aria-hidden="true">
                            <span>Blokaz</span>
                            <span>Uzoza</span>
                            <span>Otterpay</span>
                            <span>BitDrum</span>
                            <span>Noah</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
