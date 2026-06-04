import SignalCard from "./SignalCard";
import Reveal from "./Reveal";
import { signals } from "../data/signals";

const TheRig = () => {
    return (
        <section id="rig" className="section-block rig-section">
            <div className="site-shell">
                <div className="rig-layout">
                    <Reveal className="rig-copy">
                        <div className="section-heading section-heading-left">
                            <p className="section-label">How We Operate</p>
                            <h2>Meet The Rig.</h2>
                            <p className="section-description">
                                Eleven AI agents — called Signals — run continuously alongside the
                                human team. Marketing, analytics, revenue, community, engineering,
                                and business operations stay synchronized because the operating
                                system is part of the company itself.
                            </p>
                        </div>

                        <div className="copy-stack">
                            <p>
                                Most studios have a team. Cracked has a team plus a permanent AI
                                workforce.
                            </p>
                            <p>
                                Every Signal reads from a shared knowledge base called The Stack and
                                writes outputs other Signals consume. Weekly updates keep the system
                                aligned across products, revenue, community, and growth.
                            </p>
                            <p>
                                This is the structural moat: company-specific memory, shared
                                context, and continuous execution that compounds over time.
                            </p>
                        </div>

                        <div className="stack-block">
                            <p className="stack-label">Stack architecture</p>
                            <pre>
                                <code>{`core-stack/\n  -> signal-memory/\n    -> drop-zone/`}</code>
                            </pre>
                        </div>
                    </Reveal>

                    <Reveal className="rig-grid-wrap" delay={120}>
                        <div className="signals-grid">
                            {signals.map((signal, index) => (
                                <SignalCard key={signal.name} signal={signal} delay={index * 110} />
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default TheRig;
