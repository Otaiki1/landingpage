import type { Signal } from "../data/signals";

interface SignalCardProps {
    signal: Signal;
    delay: number;
}

const SignalCard = ({ signal, delay }: SignalCardProps) => {
    return (
        <article className="signal-card" style={{ animationDelay: `${delay}ms` }}>
            <div className="signal-dot" aria-hidden="true" />
            <p className="signal-name">{signal.name}</p>
            <p className="signal-function">{signal.function}</p>
        </article>
    );
};

export default SignalCard;
