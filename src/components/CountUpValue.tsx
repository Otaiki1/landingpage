import { useEffect, useRef, useState } from "react";

interface CountUpValueProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
}

const CountUpValue = ({
    end,
    duration = 1400,
    prefix = "",
    suffix = "",
    decimals = 0,
}: CountUpValueProps) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const [value, setValue] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const node = ref.current;

        if (!node || hasStarted) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    return;
                }

                setHasStarted(true);
                observer.disconnect();
            },
            { threshold: 0.35 },
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) {
            return;
        }

        let frame = 0;
        const start = performance.now();

        const tick = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setValue(end * eased);

            if (progress < 1) {
                frame = window.requestAnimationFrame(tick);
            }
        };

        frame = window.requestAnimationFrame(tick);

        return () => window.cancelAnimationFrame(frame);
    }, [duration, end, hasStarted]);

    return (
        <span ref={ref}>
            {prefix}
            {value.toFixed(decimals)}
            {suffix}
        </span>
    );
};

export default CountUpValue;
