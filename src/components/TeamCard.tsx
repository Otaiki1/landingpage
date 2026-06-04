import type { TeamMember } from "../data/team";

interface TeamCardProps {
    member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
    return (
        <article className="team-card">
            <div className="team-card-top">
                <div className="avatar-badge" aria-hidden="true">
                    {member.initials}
                </div>
                <div>
                    <h3>{member.name}</h3>
                    <p className="team-title">{member.title}</p>
                </div>
            </div>

            <p className="team-bio">{member.bio}</p>

            {member.chains.length > 0 ? (
                <div className="chain-pill-row">
                    {member.chains.map((chain) => (
                        <span key={chain} className="team-chain-pill">
                            {chain}
                        </span>
                    ))}
                </div>
            ) : null}
        </article>
    );
};

export default TeamCard;
