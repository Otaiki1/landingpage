import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;

        if (!node) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.18 },
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal${isVisible ? " is-visible" : ""} ${className}`.trim()}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default Reveal;
