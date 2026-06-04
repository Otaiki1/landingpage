const productLinks = [
    { label: "Blokaz", href: "https://blokaz.xyz" },
    { label: "Uzoza", href: "https://uzoza.xyz" },
    { label: "Otterpay", href: "https://otterpay.xyz" },
    { label: "BitDrum", href: "https://bitdrum.xyz" },
    { label: "Noah Protocol", href: "https://noahprotocol.xyz" },
];

const connectLinks = [
    { label: "Twitter/X", href: "https://x.com/TweetleHQ" },
    { label: "GitHub", href: "https://github.com/Crackedstudio/" },
    { label: "Telegram", href: "https://t.me/+sRQ1KKINUzlhZjc8" },
];

interface FooterProps {
    onOpenWhitepaper: () => void;
}

const Footer = ({ onOpenWhitepaper }: FooterProps) => {
    return (
        <footer className="site-footer">
            <div className="site-shell footer-grid">
                <div className="footer-column">
                    <p className="footer-brand">CRACKED STUDIOS</p>
                    <p className="footer-tagline">Play. Build. Belong.</p>
                    <p className="footer-copy">Lagos, Nigeria · Global Products</p>
                    <button type="button" className="footer-link" onClick={onOpenWhitepaper}>
                        View Whitepaper
                    </button>
                </div>

                <div className="footer-column">
                    <p className="footer-heading">Products</p>
                    {productLinks.map((link) => (
                        <a key={link.label} className="footer-link" href={link.href} target="_blank" rel="noreferrer">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="footer-column">
                    <p className="footer-heading">Connect</p>
                    {connectLinks.map((link) => (
                        <a key={link.label} className="footer-link" href={link.href} target="_blank" rel="noreferrer">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="footer-bottom">
                <div className="site-shell footer-bottom-inner">
                    <span>© 2026 Cracked Studios</span>
                    <span>Built with The Rig</span>
                    <span>All products are live or in active development</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
