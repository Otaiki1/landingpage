import { useEffect, useState } from "react";

interface NavProps {
    onOpenWhitepaper: () => void;
}

const links = [
    { label: "Products", href: "#products" },
    { label: "The Rig", href: "#rig" },
    { label: "Team", href: "#team" },
];

const Nav = ({ onOpenWhitepaper }: NavProps) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 36);

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`site-nav${scrolled ? " is-scrolled" : ""}`}>
            <div className="site-shell nav-inner">
                <a className="brand-mark" href="#top" aria-label="Cracked Studios home">
                    <span className="brand-wordmark">CRACKED STUDIOS</span>
                </a>

                <nav className="nav-links" aria-label="Primary">
                    {links.map((link) => (
                        <a key={link.label} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                    <button type="button" className="nav-link-button" onClick={onOpenWhitepaper}>
                        Whitepaper
                    </button>
                </nav>

                <div className="nav-actions">
                    <span className={`nav-tagline${scrolled ? " is-visible" : ""}`}>
                        Play. Build. Belong.
                    </span>
                    <button type="button" className="outline-button" onClick={onOpenWhitepaper}>
                        View Whitepaper
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Nav;
