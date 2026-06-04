import { useEffect } from "react";
import whitepaper from "../../cracked-studios-whitepaper.md?raw";

interface WhitepaperModalProps {
    open: boolean;
    onClose: () => void;
}

const WhitepaperModal = ({ open, onClose }: WhitepaperModalProps) => {
    useEffect(() => {
        if (!open) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [onClose, open]);

    if (!open) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 md:p-8"
            role="presentation"
            onClick={onClose}
        >
            <div
                className="border-4 border-[#16A349] bg-black max-w-5xl mx-auto h-full overflow-hidden glitch-box relative"
                role="dialog"
                aria-modal="true"
                aria-labelledby="whitepaper-title"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="absolute inset-0 glitch-scan"></div>
                <div className="relative z-10 flex items-start justify-between gap-4 p-6 border-b-2 border-[#16A349]">
                    <div>
                        <p className="text-[#16A349] text-sm font-black uppercase tracking-[0.2em]">
                            Whitepaper
                        </p>
                        <h2 id="whitepaper-title" className="text-3xl md:text-4xl font-black text-[#F2F2F2] uppercase">
                            Cracked Studios Business Whitepaper v1.0
                        </h2>
                    </div>
                    <button
                        type="button"
                        className="border-2 border-[#16A349] bg-black text-[#00FF66] w-12 h-12 text-2xl font-black"
                        onClick={onClose}
                        aria-label="Close whitepaper"
                    >
                        ×
                    </button>
                </div>

                <div className="relative z-10 h-[calc(100%-104px)] overflow-y-auto p-6">
                    <pre className="text-[#F2F2F2] text-sm md:text-base leading-7 whitespace-pre-wrap font-mono">
                        {whitepaper}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default WhitepaperModal;
