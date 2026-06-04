import Reveal from "./Reveal";
import TeamCard from "./TeamCard";
import { team } from "../data/team";

const Team = () => {
    return (
        <section id="team" className="section-block">
            <div className="site-shell">
                <Reveal>
                    <div className="section-heading">
                        <p className="section-label">The Humans</p>
                        <h2>Small team. Massive output.</h2>
                    </div>
                </Reveal>

                <div className="team-grid">
                    {team.map((member, index) => (
                        <Reveal key={member.name} delay={index * 70}>
                            <TeamCard member={member} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
