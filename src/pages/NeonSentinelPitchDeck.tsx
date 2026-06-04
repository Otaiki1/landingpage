import React, { useEffect } from 'react';

const NeonSentinelPitchDeck = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const slides = [
        {
            title: "Neon Sentinel",
            subtitle: "A Competitive On-Chain Arcade Experience",
            content: (
                <div className="text-center">
                    <img src="/assets/images/neon-sentinel-logo.png" alt="Neon Sentinel Logo" className="w-64 h-auto mx-auto mb-6 drop-shadow-[0_0_15px_rgba(22,163,73,0.8)]" onError={(e) => e.currentTarget.style.display = 'none'} />
                    <h1 className="text-6xl md:text-8xl font-black mb-6 text-[#16A349] uppercase glitch-text mt-8">
                        Neon Sentinel
                    </h1>
                    <p className="text-[#F2F2F2] text-2xl md:text-3xl font-medium mt-4">
                        A Competitive On-Chain Arcade Experience
                    </p>
                    <div className="mt-12 flex justify-center">
                        <div className="border-2 border-[#16A349] p-2 bg-black glitch-box relative overflow-hidden inline-block">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <p className="font-black text-lg uppercase text-[#16A349] px-6 py-2">Competitive Arcade. Verifiable Integrity.</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "The Problem",
            content: (
                <div className="space-y-6">
                    <p className="text-xl text-[#F2F2F2]">Competitive arcade games today suffer from three issues:</p>
                    <ul className="list-none space-y-4">
                        <li className="flex items-start gap-4">
                            <div className="border-2 border-[#16A349] w-4 h-4 bg-[#16A349] flex-shrink-0 mt-1"></div>
                            <p className="text-lg font-medium text-[#F2F2F2]">Leaderboards are easily manipulated.</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="border-2 border-[#16A349] w-4 h-4 bg-[#16A349] flex-shrink-0 mt-1"></div>
                            <p className="text-lg font-medium text-[#F2F2F2]">Player identity resets with every account.</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="border-2 border-[#16A349] w-4 h-4 bg-[#16A349] flex-shrink-0 mt-1"></div>
                            <p className="text-lg font-medium text-[#F2F2F2]">Digital cosmetics are database entries — not owned.</p>
                        </li>
                    </ul>
                    <div className="border-l-4 border-[#00FF66] pl-6 py-2 mt-8">
                        <p className="text-xl font-black text-[#00FF66] uppercase">Skill-based games deserve integrity and permanence.</p>
                        <p className="text-lg text-[#F2F2F2] mt-2">Crypto-native gaming has focused too much on tokens and farming — not enough on competitive systems.</p>
                    </div>
                </div>
            )
        },
        {
            title: "The Opportunity",
            content: (
                <div className="space-y-8">
                    <div>
                        <p className="text-xl text-[#F2F2F2] mb-4">Arcade and roguelike shooters have:</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Short session loops', 'High replayability', 'Strong leaderboard culture', 'Natural competitive cycles'].map((item, i) => (
                                <div key={i} className="border-2 border-[#16A349] p-4 text-center bg-black">
                                    <p className="font-black text-[#16A349] uppercase">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border-t-2 border-dashed border-[#16A349] pt-8">
                        <p className="text-2xl font-black text-[#F2F2F2] text-center">
                            Neon Sentinel turns that structure into: <br />
                            <span className="text-[#00FF66] mt-2 block">A seasonal, verifiable, skill-first competitive layer on Avalanche.</span>
                        </p>
                    </div>
                </div>
            )
        },
        {
            title: "The Product",
            content: (
                <div className="space-y-6">
                    <p className="text-xl text-[#F2F2F2] mb-6">Neon Sentinel is a fully playable 2D arcade shooter featuring:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            '6 escalating system layers',
                            'Prestige Mode (infinite scaling difficulty)',
                            'Dynamic enemy AI evolution',
                            'Risk-reward corruption system',
                            'Rotating gameplay modifiers',
                            'Functional coin-based meta economy',
                            'Weekly leaderboard resets'
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-4 bg-[#111] border border-[#16A349] p-4">
                                <div className="text-[#00FF66] font-black text-xl">0{i + 1}</div>
                                <p className="text-[#F2F2F2] font-medium">{feature}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center p-4 bg-[#16A349] text-black">
                        <p className="font-black text-xl uppercase tracking-widest">This is not a prototype. It is already built and playable.</p>
                    </div>
                </div>
            )
        },
        {
            title: "What Makes It Different",
            content: (
                <div className="space-y-8 text-center">
                    <p className="text-2xl font-black text-[#F2F2F2] uppercase mb-8">
                        Neon Sentinel is built around skill integrity, not token incentives.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border-2 border-[#16A349] py-8 px-4 flex flex-col items-center">
                            <p className="text-lg font-black text-[#00FF66] uppercase">Skill &gt; speculation</p>
                        </div>
                        <div className="border-2 border-[#16A349] py-8 px-4 flex flex-col items-center">
                            <p className="text-lg font-black text-[#00FF66] uppercase">Strategy &gt; pay-to-win</p>
                        </div>
                        <div className="border-2 border-[#16A349] py-8 px-4 flex flex-col items-center">
                            <p className="text-lg font-black text-[#00FF66] uppercase">Seasonal competition &gt; farming</p>
                        </div>
                    </div>
                    <div className="mt-8 text-left bg-black border border-[#16A349] p-6">
                        <p className="text-xl text-[#F2F2F2] mb-2">The coin economy enhances strategy but resets per run.</p>
                        <p className="text-2xl font-black text-[#16A349] uppercase">Leaderboard position cannot be purchased.</p>
                    </div>
                </div>
            )
        },
        {
            title: "The Coin Economy (Product Strength)",
            content: (
                <div className="space-y-8">
                    <p className="text-xl text-[#F2F2F2]">Neon Sentinel runs on a structured coin system:</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="border-2 border-[#16A349] p-6">
                            <h4 className="text-[#00FF66] font-black text-xl uppercase mb-4">Players earn coins through:</h4>
                            <ul className="space-y-3">
                                <li className="text-[#F2F2F2] flex items-center gap-2"><div className="w-2 h-2 bg-[#16A349]"></div> Daily login resets</li>
                                <li className="text-[#F2F2F2] flex items-center gap-2"><div className="w-2 h-2 bg-[#16A349]"></div> Gameplay progression</li>
                            </ul>
                            
                            <h4 className="text-[#00FF66] font-black text-xl uppercase mb-4 mt-8">Coins are spent on:</h4>
                            <ul className="space-y-3">
                                <li className="text-[#F2F2F2] flex items-center gap-2"><div className="w-2 h-2 bg-[#16A349]"></div> Pregame upgrades (session-only boosts)</li>
                                <li className="text-[#F2F2F2] flex items-center gap-2"><div className="w-2 h-2 bg-[#16A349]"></div> Revives</li>
                                <li className="text-[#F2F2F2] flex items-center gap-2"><div className="w-2 h-2 bg-[#16A349]"></div> Cosmetic unlocks</li>
                            </ul>
                        </div>
                        <div className="border-2 border-[#16A349] p-6 bg-[#0a0a0a]">
                            <h4 className="text-[#16A349] font-black text-xl uppercase mb-4">Inflation Control:</h4>
                            <ul className="space-y-3">
                                <li className="text-[#F2F2F2] flex items-center gap-2"><div className="w-2 h-2 bg-red-500"></div> Daily caps</li>
                                <li className="text-[#F2F2F2] flex items-center gap-2"><div className="w-2 h-2 bg-red-500"></div> Strong sinks</li>
                                <li className="text-[#F2F2F2] flex items-center gap-2"><div className="w-2 h-2 bg-red-500"></div> No permanent stat inflation</li>
                                <li className="text-[#F2F2F2] flex items-center gap-2"><div className="w-2 h-2 bg-red-500"></div> No score purchasing</li>
                            </ul>
                            <div className="mt-8 pt-6 border-t border-[#16A349]">
                                <p className="font-black text-lg text-[#00FF66] uppercase text-center">This creates retention without breaking fairness.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "What Avalanche Enables",
            content: (
                <div className="space-y-8">
                    <p className="text-xl text-[#F2F2F2] mb-6">Built on Avalanche, Neon Sentinel introduces:</p>
                    <div className="space-y-4">
                        {[
                            { title: 'Verifiable Weekly Leaderboards', desc: 'Top scores anchored on-chain.' },
                            { title: 'Persistent Prestige Identity', desc: 'Prestige milestones permanently tied to wallet addresses.' },
                            { title: 'Scarce Cosmetic Ownership', desc: 'Limited heroes, skins, and seasonal badges minted as NFTs.' }
                        ].map((item, i) => (
                            <div key={i} className="border-l-4 border-[#16A349] pl-6 py-4 bg-[#111]">
                                <h4 className="text-[#00FF66] font-black text-2xl uppercase mb-2">{item.title}</h4>
                                <p className="text-[#F2F2F2] text-lg">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="border-2 border-[#16A349] p-6 text-center mt-8">
                        <p className="text-xl font-medium text-[#F2F2F2]">Gameplay remains off-chain for speed.</p>
                        <p className="text-2xl font-black text-[#16A349] uppercase mt-2 glow-text">Integrity and ownership are on-chain.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Why Avalanche",
            content: (
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-[#00FF66] font-black text-2xl uppercase mb-6">Avalanche provides:</h4>
                            <ul className="space-y-4">
                                {[
                                    'Fast finality (ideal for competitive anchoring)',
                                    'Low fees (critical for seasonal resets)',
                                    'Strong builder ecosystem',
                                    'Gaming-aligned infrastructure'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 border border-[#16A349] p-3">
                                        <div className="w-3 h-3 bg-[#16A349]"></div>
                                        <span className="text-[#F2F2F2] text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center border-4 border-[#16A349] p-8 text-center bg-black relative overflow-hidden glitch-box">
                            <div className="absolute inset-0 glitch-scan opacity-50"></div>
                            <p className="text-xl text-[#F2F2F2] uppercase mb-4 relative z-10">Neon Sentinel becomes:</p>
                            <p className="text-3xl font-black text-[#00FF66] uppercase relative z-10 leading-tight">
                                A repeatable seasonal competitive format native to Avalanche.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Player Loop",
            content: (
                <div className="space-y-8">
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {[
                            'Launch game',
                            'Spend coins on strategic pregame upgrades',
                            'Survive escalating layers',
                            'Manage corruption risk',
                            'Defeat bosses',
                            'Submit run',
                            'Compete for weekly top rank',
                            'Unlock prestige & cosmetics'
                        ].map((step, i, arr) => (
                            <React.Fragment key={i}>
                                <div className="border border-[#16A349] p-3 text-center bg-[#111] min-w-[200px] flex-1">
                                    <p className="text-[#16A349] font-black text-sm mb-1">STEP 0{i+1}</p>
                                    <p className="text-[#F2F2F2] text-sm uppercase font-medium">{step}</p>
                                </div>
                                {i < arr.length - 1 && (
                                    <div className="hidden md:block text-[#00FF66] text-xl">→</div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="text-center mt-12 mb-4">
                        <p className="text-3xl font-black text-[#16A349] uppercase tracking-widest">
                            Short sessions. High replay. Clear mastery curve.
                        </p>
                    </div>
                </div>
            )
        },
        {
            title: "Retention Drivers",
            content: (
                <div className="space-y-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            'Infinite Prestige scaling',
                            'Weekly leaderboard resets',
                            'Rotating modifiers',
                            'Unlockable Kernels (playstyle classes)',
                            'Achievement badges',
                            'Seasonal cosmetic drops',
                            'Daily coin resets'
                        ].map((driver, i) => (
                            <div key={i} className="border-2 border-[#16A349] p-6 flex items-center justify-center text-center bg-black relative group hover:bg-[#16A349] transition-colors">
                                <p className="text-[#F2F2F2] font-medium group-hover:text-black transition-colors">{driver}</p>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-[#16A349] pt-8 text-center">
                        <p className="text-2xl font-black text-[#00FF66] uppercase tracking-wider">This is built for long-term replayability.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Target Player",
            content: (
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="border border-[#16A349] p-6 bg-[#111]">
                            <h4 className="text-[#16A349] font-black text-sm uppercase mb-2">Primary</h4>
                            <p className="text-2xl text-[#F2F2F2] font-black uppercase">Competitive arcade players (18–35)</p>
                        </div>
                        <div className="border border-[#16A349] p-6 bg-[#111]">
                            <h4 className="text-[#16A349] font-black text-sm uppercase mb-2">Secondary</h4>
                            <p className="text-2xl text-[#F2F2F2] font-black uppercase">Crypto-native players who value provable competition</p>
                        </div>
                    </div>
                    <div className="border-4 border-[#16A349] p-8 bg-black mt-8">
                        <h4 className="text-[#00FF66] font-black text-2xl uppercase mb-6 text-center">UX Philosophy</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00FF66]"></div><span className="text-[#F2F2F2] text-lg">Wallet optional at entry</span></div>
                            <div className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00FF66]"></div><span className="text-[#F2F2F2] text-lg">Guest mode supported</span></div>
                            <div className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00FF66]"></div><span className="text-[#F2F2F2] text-lg">No forced Web3 friction</span></div>
                            <div className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00FF66]"></div><span className="text-[#F2F2F2] font-black text-lg text-[#16A349]">Web3 enhances, it does not interrupt</span></div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Build Games Plan (6 Weeks)",
            content: (
                <div className="space-y-6">
                    <div className="relative border-l-2 border-[#16A349] ml-4 md:ml-8 pl-8 space-y-8">
                        <div className="relative">
                            <div className="absolute w-4 h-4 bg-[#16A349] -left-[41px] top-1"></div>
                            <h4 className="text-[#00FF66] font-black text-xl uppercase mb-2">Week 1</h4>
                            <p className="text-[#F2F2F2] text-lg">Finalize Avalanche contract architecture</p>
                        </div>
                        <div className="relative">
                            <div className="absolute w-4 h-4 bg-[#16A349] -left-[41px] top-1"></div>
                            <h4 className="text-[#00FF66] font-black text-xl uppercase mb-2">Weeks 2–3</h4>
                            <p className="text-[#F2F2F2] text-lg">Deploy leaderboard anchoring contracts & Implement score submission logic</p>
                        </div>
                        <div className="relative">
                            <div className="absolute w-4 h-4 bg-[#16A349] -left-[41px] top-1"></div>
                            <h4 className="text-[#00FF66] font-black text-xl uppercase mb-2">Weeks 4–5</h4>
                            <p className="text-[#F2F2F2] text-lg">Mint seasonal cosmetic NFTs, Integrate prestige milestone anchoring, Launch Season 1 beta</p>
                        </div>
                        <div className="relative">
                            <div className="absolute w-4 h-4 bg-[#16A349] -left-[41px] top-1"></div>
                            <h4 className="text-[#00FF66] font-black text-xl uppercase mb-2">Week 6</h4>
                            <p className="text-[#F2F2F2] text-lg">Live competitive season & Public leaderboard demonstration</p>
                        </div>
                    </div>
                    <div className="mt-8 border-2 border-[#16A349] bg-[#16A349] text-black p-4 text-center mx-auto max-w-2xl font-black uppercase">
                        Deliverable: Fully Avalanche-integrated competitive MVP.
                    </div>
                </div>
            )
        },
        {
            title: "Long-Term Vision",
            content: (
                <div className="space-y-8">
                    <p className="text-xl text-[#F2F2F2] mb-6">Neon Sentinel evolves into:</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {[
                            'Seasonal competitive format',
                            'On-chain tournament events',
                            'Limited-time challenge runs',
                            'Cross-season prestige archives',
                            'Potential arcade framework other devs can plug into'
                        ].map((vision, i) => (
                            <div key={i} className="border border-[#16A349] px-6 py-3 bg-[#111] text-[#F2F2F2] font-medium text-lg text-center">
                                {vision}
                            </div>
                        ))}
                    </div>
                    <div className="pt-12 text-center">
                        <p className="text-2xl font-medium text-[#F2F2F2]">The vision is not one game.</p>
                        <p className="text-4xl font-black text-[#00FF66] uppercase mt-2">It is the competitive arcade layer for Avalanche.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Why We Win",
            content: (
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            'Fully built playable product',
                            'Structured economy already live',
                            'Clear blockchain use-case (integrity + ownership)',
                            'No speculative token dependency',
                            'Real execution roadmap within 6 weeks',
                            'Skill-first design philosophy'
                        ].map((win, i) => (
                            <div key={i} className="border-l-4 border-[#16A349] pl-4 py-2 bg-[#111] flex items-center">
                                <span className="text-[#F2F2F2] text-lg font-medium">{win}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-4 border-[#16A349] p-8 text-center bg-black relative mt-8 pt-12">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 border-l-2 border-r-2 border-[#16A349]">
                            <span className="text-[#16A349] font-black uppercase tracking-widest text-sm">THE BOTTOM LINE</span>
                        </div>
                        <p className="text-2xl font-medium text-[#F2F2F2] mb-2">We are not building to farm prizes.</p>
                        <p className="text-3xl font-black text-[#00FF66] uppercase">We are building a sustainable competitive system on Avalanche.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Closing",
            content: (
                <div className="text-center py-20 flex flex-col items-center justify-center min-h-[40vh]">
                    <h2 className="text-6xl md:text-8xl font-black mb-8 text-[#16A349] uppercase glitch-text leading-none">
                        Neon Sentinel
                    </h2>
                    <div className="space-y-4 text-3xl md:text-5xl font-black uppercase text-[#F2F2F2]">
                        <p>Skill is <span className="text-[#16A349]">permanent.</span></p>
                        <p>Integrity is <span className="text-[#16A349]">verifiable.</span></p>
                        <p>Competition lives on <span className="text-[#00FF66]">Avalanche.</span></p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-black font-sans selection:bg-[#16A349] selection:text-black">
            {/* Nav overlay */}
            <div className="fixed top-0 left-0 w-full p-4 z-50 pointer-events-none">
                <div className="container-responsive flex justify-between items-center">
                    <a href="/" className="pointer-events-auto border-2 border-[#16A349] px-4 py-2 bg-black text-[#16A349] font-black text-sm uppercase glitch-button relative group overflow-hidden inline-flex items-center gap-2">
                        <span className="relative z-10">← BACK TO GAMES</span>
                    </a>
                </div>
            </div>

            {/* Content Body */}
            <div className="relative py-24 z-10">
                <div className="container max-w-5xl mx-auto px-4 space-y-24 md:space-y-32">
                    {slides.map((slide, index) => (
                        <div key={index} className="border-2 border-[#16A349] bg-black p-8 md:p-12 glitch-box relative overflow-hidden slide-in-bottom">
                            <div className="absolute inset-0 glitch-scan opacity-20"></div>
                            <div className="absolute top-0 right-0 p-4 opacity-50 text-[#16A349] font-black text-2xl">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            
                            {index !== 0 && index !== slides.length - 1 && (
                                <h2 className="text-3xl md:text-4xl font-black mb-8 text-[#16A349] uppercase relative z-10 glitch-text inline-block">
                                    {slide.title}
                                </h2>
                            )}
                            
                            <div className="relative z-10">
                                {slide.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Glitch Grid Background Overlay */}
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(#16A349 1px, transparent 1px),
                        linear-gradient(90deg, #16A349 1px, transparent 1px)
                    `,
                    backgroundSize: "64px 64px",
                    opacity: 0.04,
                }}
            ></div>
        </div>
    );
};

export default NeonSentinelPitchDeck;
