import React, { useState } from 'react';
import {
    Star,
    ArrowRight,
    Camera,
    CheckCircle,
    Search,
    MessageSquare
} from 'lucide-react';
import { TALENT_DATA } from './constants';
import cheriLogo from './assets/cheri.png';
import cheriFullBlack from './assets/cheri-full-black.png';
import cheriFullRed from './assets/cheri-full-red.png';
import CardNav from './CardNav';

// --- TOP VIEWPORT: Minimalist / Jellypepper Style ---

// Navbar removed in favor of CardNav


const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-40 px-6 bg-neutral-cream">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                <div className="mb-16 animate-float">
                    <img
                        src={cheriLogo}
                        alt="Cheri Logo"
                        className="w-16 h-auto invert"
                    />
                </div>

                <h1 className="text-4xl md:text-7xl font-outfit text-neutral-dark mb-8 leading-[1.1] tracking-tight">
                    Vetted on-screen <br className="hidden md:block" /> talent for bright ideas
                </h1>

                <p className="max-w-lg mx-auto text-base md:text-lg text-neutral-dark/80 mb-16 leading-relaxed font-medium">
                    We source and vet beautiful female presence for startups looking to build high-performance marketing content.
                </p>

                <button className="group flex items-center gap-3 text-sm font-bold text-neutral-dark hover:text-brand transition-all duration-300">
                    <div className="w-10 h-10 bg-neutral-dark rounded-full flex items-center justify-center text-white group-hover:bg-brand transition-colors duration-300">
                        <ArrowRight size={16} />
                    </div>
                    <span>Get started with us</span>
                </button>
            </div>
        </section>
    );
};

// --- REST OF THE SITE: Original Agency Design ---

const QuickStats: React.FC = () => {
    return (
        <section className="px-6 py-12 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-y-2 border-brand/5 py-12">
                <div className="text-center">
                    <span className="block text-4xl md:text-5xl font-black text-neutral-dark mb-1">100+</span>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-neutral-dark/30">Vetted Talent</span>
                </div>
                <div className="text-center">
                    <span className="block text-4xl md:text-5xl font-black text-neutral-dark mb-1">24hr</span>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-neutral-dark/30">Fast Turnaround</span>
                </div>
                <div className="text-center">
                    <span className="block text-4xl md:text-5xl font-black text-neutral-dark mb-1">500+</span>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-neutral-dark/30">Startups Served</span>
                </div>
                <div className="text-center">
                    <span className="block text-4xl md:text-5xl font-black text-neutral-dark mb-1">15k+</span>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-neutral-dark/30">Assets Delivered</span>
                </div>
            </div>
        </section>
    );
};

const Marketplace: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const vibes = ['All', 'Corporate Chic', 'Gen-Z Energy', 'Tech Focused', 'Minimalist', 'Bold & Direct'];

    const filteredTalent = filter === 'All'
        ? TALENT_DATA
        : TALENT_DATA.filter(t => t.vibe === filter);

    return (
        <section id="talent" className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-neutral-dark mb-4 uppercase">Browse the Pool</h2>
                        <p className="text-neutral-dark/60 font-medium max-w-md">
                            Filtered by vibe, look, and performance ratings. No negotiation needed - fixed pricing for results.
                        </p>
                    </div>
                    <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
                        {vibes.map(v => (
                            <button
                                key={v}
                                onClick={() => setFilter(v)}
                                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === v
                                    ? 'bg-brand text-white shadow-lg shadow-brand/20'
                                    : 'bg-neutral-cream text-neutral-dark/50 hover:bg-brand/10'
                                    }`}
                            >
                                {v}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTalent.map(talent => (
                        <div key={talent.id} className="group relative bg-neutral-cream rounded-3xl overflow-hidden border border-brand/5 hover:border-brand/20 transition-all duration-500">
                            <div className="aspect-[4/5] overflow-hidden relative">
                                <img
                                    src={talent.image}
                                    alt={talent.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                                    <Star className="fill-brand stroke-brand" size={12} />
                                    <span className="text-xs font-extrabold text-neutral-dark">{talent.rating}</span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-neutral-dark/80 via-neutral-dark/40 to-transparent">
                                    <div className="flex flex-wrap gap-2">
                                        {talent.specialties.map(s => (
                                            <span key={s} className="text-[10px] font-bold uppercase tracking-widest text-white/80 bg-white/10 px-2 py-1 rounded">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-neutral-dark">{talent.name}</h3>
                                    <span className="text-brand font-black">{talent.priceRange}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-neutral-dark/50 font-semibold uppercase tracking-wider">
                                    <span>{talent.vibe}</span>
                                    <span className="w-1 h-1 bg-brand/30 rounded-full"></span>
                                    <span>{talent.experience}</span>
                                </div>
                                <button className="w-full mt-6 py-3 border-2 border-brand/10 rounded-xl text-sm font-bold text-brand hover:bg-brand hover:text-white hover:border-brand transition-all">
                                    Book Session
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Features: React.FC = () => {
    const steps = [
        {
            icon: <Search className="text-brand" />,
            title: "Discover & Filter",
            desc: "Browse our vetted pool using filters like 'look', 'vibe', and 'expertise' level."
        },
        {
            icon: <MessageSquare className="text-brand" />,
            title: "Submit Brief",
            desc: "Paste your script or outline. Cheri manages the talent alignment for you."
        },
        {
            icon: <Camera className="text-brand" />,
            title: "Ready-to-use Content",
            desc: "Receive high-quality, conversion-optimized raw footage or edited clips in 48 hours."
        }
    ];

    return (
        <section id="how-it-works" className="py-24 px-6 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-neutral-dark mb-6 tracking-tight uppercase">The Anti-Agency Model</h2>
                    <p className="max-w-xl mx-auto text-neutral-dark/60 font-medium">
                        We sit right between traditional casting and influencer marketing. No follower requirements, just professionalism and performance.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-brand/20 -z-10"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-white border-4 border-brand/5 rounded-3xl flex items-center justify-center shadow-lg mb-8 group hover:border-brand/30 hover:-rotate-6 transition-all duration-300">
                                {React.cloneElement(step.icon as any, { size: 36 })}
                            </div>
                            <h3 className="text-xl font-black text-neutral-dark mb-4 uppercase">{step.title}</h3>
                            <p className="text-neutral-dark/50 leading-relaxed px-4">{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 grid md:grid-cols-2 gap-8">
                    <div className="bg-brand p-12 rounded-[2.5rem] text-white">
                        <h3 className="text-3xl font-black mb-6 uppercase">For Startups</h3>
                        <ul className="space-y-4">
                            {['No influencer negotiations', 'Fixed, predictable pricing', 'Commercial usage rights included', 'Vetted for camera presence'].map(item => (
                                <li key={item} className="flex items-center gap-3 font-bold">
                                    <CheckCircle size={20} className="text-brand-light" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-neutral-dark p-12 rounded-[2.5rem] text-white">
                        <h3 className="text-3xl font-black mb-6 uppercase">For Talent</h3>
                        <ul className="space-y-4">
                            {['Low-barrier entry to paid work', 'Transparent rating system', 'Repeat work with top startups', 'No follower minimums'].map(item => (
                                <li key={item} className="flex items-center gap-3 font-bold">
                                    <CheckCircle size={20} className="text-brand" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CTA: React.FC = () => {
    return (
        <section className="px-6 py-24 bg-white">
            <div className="max-w-7xl mx-auto relative bg-brand-light/30 rounded-[3rem] p-12 md:p-24 overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

                <h2 className="text-5xl md:text-7xl font-black text-neutral-dark mb-8 leading-tight tracking-tighter uppercase">
                    Ready to scale <br /> your presence?
                </h2>
                <p className="max-w-xl mx-auto text-xl font-medium text-neutral-dark/60 mb-12">
                    Join the top 1% of startups sourcing high-performing content today. No monthly fees. No bullshit.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="w-full sm:w-auto bg-neutral-dark text-white px-12 py-6 rounded-2xl text-xl font-black hover:scale-105 transition-all shadow-2xl">
                        Get Started
                    </button>
                    <button className="w-full sm:w-auto bg-brand text-white px-12 py-6 rounded-2xl text-xl font-black hover:scale-105 transition-all shadow-2xl">
                        Talk to Sales
                    </button>
                </div>
            </div>
        </section>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-white pt-24 pb-12 px-6 border-t border-brand/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img src={cheriFullRed} alt="Cheri" className="h-8" />
                        </div>
                        <p className="text-neutral-dark/40 font-medium mb-8 leading-relaxed">
                            Redefining visual presence as a measurable marketing input rather than a vanity asset.
                        </p>
                        <div className="flex gap-4">
                            {['TW', 'IG', 'LI', 'FB'].map(social => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full bg-neutral-cream flex items-center justify-center text-xs font-black text-brand hover:bg-brand hover:text-white transition-all">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black text-xs uppercase tracking-widest text-brand mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm font-bold text-neutral-dark/60">
                            <li><a href="#" className="hover:text-brand">Talent Pool</a></li>
                            <li><a href="#" className="hover:text-brand">Pricing</a></li>
                            <li><a href="#" className="hover:text-brand">Submit Brief</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-xs uppercase tracking-widest text-brand mb-6">Company</h4>
                        <ul className="space-y-4 text-sm font-bold text-neutral-dark/60">
                            <li><a href="#" className="hover:text-brand">About Us</a></li>
                            <li><a href="#" className="hover:text-brand">Contact</a></li>
                            <li><a href="#" className="hover:text-brand">Terms</a></li>
                        </ul>
                    </div>

                    <div className="col-span-2">
                        <h4 className="font-black text-xs uppercase tracking-widest text-brand mb-6">Updates</h4>
                        <div className="flex p-1 bg-neutral-cream rounded-2xl border border-brand/10">
                            <input
                                type="email"
                                placeholder="you@startup.com"
                                className="bg-transparent px-4 py-3 text-sm font-medium w-full focus:outline-none"
                            />
                            <button className="bg-brand text-white px-6 py-3 rounded-xl text-sm font-black shadow-lg shadow-brand/20 hover:scale-[1.02] transition-all">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-brand/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-bold text-neutral-dark/30">© 2024 CHERI MARKETPLACE. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <a href="#" className="text-xs font-bold text-neutral-dark/30 hover:text-brand">PRIVACY POLICY</a>
                        <a href="#" className="text-xs font-bold text-neutral-dark/30 hover:text-brand">COOKIE POLICY</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const App: React.FC = () => {
    const navItems = [
        {
            label: "Talent",
            bgColor: "#fcece9", // Neutral Cream
            textColor: "#2d1b1e", // Neutral Dark
            links: [
                { label: "Browse Pool", href: "#talent", ariaLabel: "Browse Talent Pool" },
                { label: "Vibe Check", href: "#talent", ariaLabel: "Filter by Vibe" }
            ]
        },
        {
            label: "Process",
            bgColor: "#f4b8c7", // Brand Light
            textColor: "#2d1b1e", // Neutral Dark
            links: [
                { label: "How it Works", href: "#how-it-works", ariaLabel: "Our Process" },
                { label: "Pricing", href: "#pricing", ariaLabel: "View Pricing" }
            ]
        },
        {
            label: "Contact",
            bgColor: "#e06b88", // Brand
            textColor: "#fff", // White
            links: [
                { label: "Book Call", href: "#", ariaLabel: "Book a Call" },
                { label: "Email Us", href: "#", ariaLabel: "Email Us" }
            ]
        }
    ];

    return (
        <div className="min-h-screen selection:bg-brand/20 selection:text-brand bg-white font-sans text-neutral-dark">
            {/* Top Left Logo */}
            <div className="absolute left-4 md:left-6 top-4 md:top-6 z-[99]">
                <img src={cheriFullBlack} alt="Cheri" className="h-6 md:h-8" />
            </div>

            <CardNav
                logo={cheriLogo}
                logoAlt="Cheri Logo"
                items={navItems}
                baseColor="#ffffff"
                menuColor="#2d1b1e"
                buttonBgColor="#2d1b1e"
                buttonTextColor="#ffffff"
            />
            <Hero />
            <QuickStats />
            <Marketplace />
            <Features />
            <CTA />
            <Footer />
        </div>
    );
};

export default App;
