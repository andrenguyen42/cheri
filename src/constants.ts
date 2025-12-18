export interface Talent {
    id: string | number;
    name: string;
    image: string;
    rating: string | number;
    specialties: string[];
    priceRange: string;
    vibe: string;
    experience: string;
}

export const TALENT_DATA: Talent[] = [
    {
        id: 1,
        name: "Sarah Jenkins",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
        rating: "4.9",
        specialties: ["Tech", "SaaS", "Explainer"],
        priceRange: "$200-400",
        vibe: "Corporate Chic",
        experience: "5y Exp"
    },
    {
        id: 2,
        name: "Mia Wong",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
        rating: "5.0",
        specialties: ["Lifestyle", "Beauty", "Vlog"],
        priceRange: "$300-500",
        vibe: "Gen-Z Energy",
        experience: "3y Exp"
    },
    {
        id: 3,
        name: "Alex Rivera",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop",
        rating: "4.8",
        specialties: ["Fitness", "Health", "Energy"],
        priceRange: "$150-300",
        vibe: "Bold & Direct",
        experience: "2y Exp"
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        rating: "4.9",
        specialties: ["Fashion", "Luxury", "Editorial"],
        priceRange: "$400-700",
        vibe: "Minimalist",
        experience: "6y Exp"
    },
    {
        id: 5,
        name: "Chloe Kim",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
        rating: "5.0",
        specialties: ["App Demo", "Software", "Professional"],
        priceRange: "$350-600",
        vibe: "Tech Focused",
        experience: "4y Exp"
    },
    {
        id: 6,
        name: "Jordan Smith",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop",
        rating: "4.7",
        specialties: ["UGC", "TikTok", "Trendy"],
        priceRange: "$150-250",
        vibe: "Gen-Z Energy",
        experience: "1y Exp"
    }
];
