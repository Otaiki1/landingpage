export interface TeamMember {
    name: string;
    title: string;
    bio: string;
    chains: string[];
    initials: string;
}

export const team: TeamMember[] = [
    {
        name: "Abdulsamad Sadiq",
        title: "Founder · Product & Community",
        bio: "Shipped Tweetle and Blokaz. ETHGlobal hackathon winner. Grew Cracked Studios' community from zero. Mentor to 100+ developers across Africa via bootcamps, YouTube, and live workshops.",
        chains: ["Celo", "Starknet", "Base"],
        initials: "AS",
    },
    {
        name: "Onanike Samuel Chisom",
        title: "Co-Founder · Smart Contracts & Security",
        bio: "Smart contract developer and security researcher with live deployments on Starknet Mainnet (Otterpay), Celo (Blokaz), and Avalanche (Noah). Led Noah to 7th Place at Starknet Re{define} 2025 and Top 100 on Avalanche Build Game for Founders. Started in data analytics, sharpened through manual audit and ZK development.",
        chains: ["Starknet", "Celo", "Avalanche", "Somnia"],
        initials: "OS",
    },
];
