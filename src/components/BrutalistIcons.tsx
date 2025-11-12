// Brutalist Icon Components - Geometric, Sharp, Bold

interface IconProps {
    className?: string;
    color?: string;
}

export const GamesIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="3" y="3" width="18" height="18" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="15" x2="15" y2="15" />
        <line x1="12" y1="3" x2="12" y2="21" />
    </svg>
);

export const AppsIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="2" y="2" width="8" height="8" />
        <rect x="14" y="2" width="8" height="8" />
        <rect x="2" y="14" width="8" height="8" />
        <rect x="14" y="14" width="8" height="8" />
    </svg>
);

export const ToolsIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="4" y="4" width="16" height="16" />
        <line x1="12" y1="4" x2="12" y2="20" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="8" y1="8" x2="16" y2="16" />
        <line x1="16" y1="8" x2="8" y2="16" />
    </svg>
);

export const InnovationIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <polygon points="12,2 15,9 22,10 17,15 18,22 12,18 6,22 7,15 2,10 9,9" />
    </svg>
);

export const CommunityIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <circle cx="9" cy="7" r="4" />
        <circle cx="15" cy="7" r="4" />
        <rect x="3" y="13" width="12" height="8" />
        <rect x="13" y="13" width="8" height="8" />
    </svg>
);

export const AccessibilityIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="3" y="11" width="18" height="10" />
        <line x1="12" y1="11" x2="12" y2="21" />
        <line x1="7" y1="16" x2="17" y2="16" />
        <polygon points="12,3 8,7 16,7" />
    </svg>
);

export const FunIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="3" y="3" width="18" height="18" />
        <circle cx="9" cy="9" r="2" />
        <circle cx="15" cy="9" r="2" />
        <line x1="9" y1="15" x2="15" y2="15" />
    </svg>
);

export const ScalabilityIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <rect x="4" y="4" width="16" height="16" />
    </svg>
);

export const DecentralizationIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);

export const OnboardingIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <polygon points="12,2 22,7 12,12 2,7" />
        <polygon points="2,17 12,22 22,17" />
        <polygon points="2,12 12,17 22,12" />
    </svg>
);

export const RewardsIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="6" y="6" width="12" height="12" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
    </svg>
);

export const StarknetIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="2" y="2" width="20" height="20" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="6" y1="6" x2="18" y2="18" />
        <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
);

export const CairoIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="3" y="3" width="18" height="18" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
);

export const Web3Icon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="2" y="2" width="20" height="20" />
        <circle cx="8" cy="8" r="2" />
        <circle cx="16" cy="8" r="2" />
        <circle cx="8" cy="16" r="2" />
        <circle cx="16" cy="16" r="2" />
    </svg>
);

export const SecurityIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="4" y="8" width="16" height="12" />
        <line x1="12" y1="2" x2="12" y2="8" />
        <line x1="8" y1="4" x2="8" y2="8" />
        <line x1="16" y1="4" x2="16" y2="8" />
        <line x1="8" y1="14" x2="16" y2="14" />
    </svg>
);

export const DiscordIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="3" y="5" width="18" height="14" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
    </svg>
);

export const TwitterIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M23 3 L16 10 L23 17 L20 20 L13 13 L6 20 L3 17 L10 10 L3 3 L6 0 L13 7 L20 0 Z" />
    </svg>
);

export const ContactIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="3" y="4" width="18" height="16" />
        <line x1="3" y1="8" x2="21" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="12" y2="16" />
    </svg>
);

export const ChainIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="2" y="6" width="6" height="6" />
        <rect x="16" y="6" width="6" height="6" />
        <rect x="9" y="12" width="6" height="6" />
        <line x1="8" y1="9" x2="9" y2="15" />
        <line x1="15" y1="15" x2="16" y2="9" />
    </svg>
);

export const TournamentIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <polygon points="12,2 15,8 22,9 17,13 18,20 12,17 6,20 7,13 2,9 9,8" />
        <line x1="12" y1="2" x2="12" y2="17" />
    </svg>
);

export const SDKIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="3" y="3" width="8" height="8" />
        <rect x="13" y="3" width="8" height="8" />
        <rect x="3" y="13" width="8" height="8" />
        <rect x="13" y="13" width="8" height="8" />
        <line x1="11" y1="7" x2="13" y2="7" />
        <line x1="11" y1="17" x2="13" y2="17" />
        <line x1="7" y1="11" x2="7" y2="13" />
        <line x1="17" y1="11" x2="17" y2="13" />
    </svg>
);

export const LightningIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <polygon points="12,2 16,10 8,10 12,18 4,10 12,10" />
    </svg>
);

export const VerifiedIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="2" y="2" width="20" height="20" />
        <line x1="8" y1="12" x2="12" y2="16" />
        <line x1="12" y1="16" x2="16" y2="8" />
    </svg>
);

export const NFTIcon = ({ className = "w-8 h-8", color = "currentColor" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="4" y="4" width="16" height="16" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="12" y1="4" x2="12" y2="20" />
        <rect x="6" y="6" width="4" height="4" />
        <rect x="14" y="6" width="4" height="4" />
        <rect x="6" y="14" width="4" height="4" />
        <rect x="14" y="14" width="4" height="4" />
    </svg>
);

