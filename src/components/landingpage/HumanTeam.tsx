import { team } from "../../data/team";

const HumanTeam = () => {
    return (
        <section id="team" className="py-20 lg:py-32 bg-black relative overflow-hidden">
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
                <div className="border-2 border-[#16A349] p-8 mb-12 bg-black text-center relative glitch-box overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <p className="text-[#16A349] text-sm md:text-base font-black uppercase tracking-[0.2em] mb-4 relative z-10">
                        THE HUMANS
                    </p>
                    <h2 className="text-5xl md:text-6xl font-black mb-4 text-[#F2F2F2] relative z-10 glitch-text">
                        SMALL TEAM. <span className="text-[#16A349] glitch-word" data-text="MASSIVE OUTPUT">MASSIVE OUTPUT</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {team.map((member, index) => (
                        <div
                            key={member.name}
                            className={`border-2 ${index % 2 === 0 ? "border-[#16A349]" : "border-[#00FF66]"} p-6 bg-black glitch-box relative overflow-hidden`}
                        >
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="relative z-10 flex items-start gap-4 mb-5">
                                <div className={`border-2 ${index % 2 === 0 ? "border-[#16A349] bg-[#16A349]" : "border-[#00FF66] bg-[#00FF66]"} text-black w-14 h-14 flex items-center justify-center font-black text-lg flex-shrink-0`}>
                                    {member.initials}
                                </div>
                                <div>
                                    <h3 className={`text-3xl font-black uppercase ${index % 2 === 0 ? "text-[#16A349]" : "text-[#00FF66]"}`}>
                                        {member.name}
                                    </h3>
                                    <p className="text-[#F2F2F2] text-sm font-mono uppercase tracking-wide mt-1">
                                        {member.title}
                                    </p>
                                </div>
                            </div>

                            <p className="text-[#F2F2F2] text-base font-medium leading-relaxed mb-5 relative z-10">
                                {member.bio}
                            </p>

                            {member.chains.length > 0 ? (
                                <div className="relative z-10 flex flex-wrap gap-3">
                                    {member.chains.map((chain) => (
                                        <span
                                            key={chain}
                                            className="border border-[#16A349] px-3 py-2 text-[#F2F2F2] text-xs font-mono uppercase tracking-wider"
                                        >
                                            {chain}
                                        </span>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HumanTeam;
