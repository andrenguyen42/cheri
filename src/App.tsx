import React from 'react';
import {
    ArrowRight,
    Accessibility,
    Activity,
    HeartHandshake,
    Fingerprint,
    Settings,
    PieChart
} from 'lucide-react';
import cheriLogo from './assets/cheri.png';
import cheriFullBlack from './assets/cheri-full-black.png';
import CardNav from './CardNav';
import { FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

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

const Services: React.FC = () => {
    const services = [
        {
            title: "Branding",
            description: "Clarify your story and stand out in the market with advanced strategic precision."
        },
        {
            title: "Websites",
            description: "Design frictionless digital journeys that consistently convert higher-quality buyers."
        },
        {
            title: "Search Marketing",
            description: "Build fast, scalable search systems that reliably power sustainable long-term growth."
        },
        {
            title: "Paid Ads",
            description: "Increase qualified demand through highly targeted, high-intent acquisition campaigns."
        }
    ];

    return (
        <section id="services" className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex gap-1">
                            <span className="w-0.5 h-3 bg-neutral-dark/20 -skew-x-12"></span>
                            <span className="w-0.5 h-3 bg-neutral-dark/20 -skew-x-12"></span>
                            <span className="w-0.5 h-3 bg-neutral-dark/20 -skew-x-12"></span>
                        </div>
                        <span className="text-xs font-bold tracking-[0.2em] text-neutral-dark/40 uppercase font-sans">Solutions</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-outfit leading-[1.1] tracking-tight max-w-4xl">
                        <span className="text-neutral-dark font-medium">All things considered </span>
                        <span className="text-brand font-medium">to drive exponential growth</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-brand/10">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col pt-12 pb-12 px-4 md:px-8 border-brand/10 ${idx < services.length - 1 ? 'lg:border-r' : ''
                                } ${idx % 2 === 0 ? 'md:border-r lg:border-r-0' : ''} ${idx < 2 ? 'md:border-b lg:border-b-0' : ''
                                } ${idx < services.length - 1 ? 'border-b md:border-b-0' : ''}`}
                        >
                            <div className="aspect-[4/3] mb-10 bg-neutral-cream rounded-sm overflow-hidden relative group w-full grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Placeholder for user to replace */}
                                <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
                                    <div className="text-neutral-dark/10 font-outfit font-bold text-sm uppercase tracking-widest border-2 border-dashed border-neutral-dark/10 px-4 py-2 rounded">
                                        Image Placeholder
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-outfit font-semibold text-neutral-dark mb-4">
                                {service.title}
                            </h3>
                            <p className="text-neutral-dark/60 font-medium leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Approach: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState(0);

    const tabs = [
        {
            id: 'accessible',
            label: 'Accessible',
            icon: <Accessibility size={24} />,
            content: {
                title: 'Accessible',
                description: 'We build with inclusivity in mind, ensuring your site is usable by everyone, regardless of ability or device.',
                deliverables: [
                    'WCAG 2.1 AA Compliance',
                    'Screen reader optimization',
                    'Keyboard navigation support',
                    'Semantic HTML structure'
                ]
            }
        },
        {
            id: 'performant',
            label: 'Performant',
            icon: <Activity size={24} />,
            content: {
                title: 'Performant',
                description: 'A high-performance website loads instantly, responds smoothly, and never gets in the way of the user. By optimizing code, images, and infrastructure from the ground up, we [placeholder text matching image context].',
                deliverables: [
                    '90+ Google PageSpeed Score',
                    'Optimized asset delivery',
                    'Efficient caching strategies',
                    'Minimal main-thread work'
                ]
            }
        },
        {
            id: 'supported',
            label: 'Supported',
            icon: <HeartHandshake size={24} />,
            content: {
                title: 'Supported',
                description: 'We remain an active partner long after launch. Our team provides guidance, updates, documentation, and ongoing improvements so your website continues to operate reliably and evolve with your business needs—without creating extra work for your internal team.',
                deliverables: [
                    'Dedicated project support channel',
                    'Monthly check-ins and priority updates',
                    'Issue monitoring and quick resolution',
                    'Documentation for workflows and components',
                    'Analytics and performance review',
                    'Roadmap planning for future improvements'
                ]
            }
        },
        {
            id: 'secure',
            label: 'Secure',
            icon: <Fingerprint size={24} />,
            content: {
                title: 'Secure',
                description: 'Security is not an afterthought. We implement industry-standard practices to protect your data and your users.',
                deliverables: [
                    'Regular security audits',
                    'Data encryption at rest and transit',
                    'Secure authentication flows',
                    'GDPR & CCPA compliance'
                ]
            }
        },
        {
            id: 'optimized',
            label: 'Optimized',
            icon: <Settings size={24} />,
            content: {
                title: 'Optimized',
                description: 'We fine-tune every aspect of your digital presence for maximum efficiency and conversion.',
                deliverables: [
                    'SEO best practices',
                    'Conversion rate optimization',
                    'Clean code architecture',
                    'Scalable infrastructure'
                ]
            }
        },
        {
            id: 'insightful',
            label: 'Insightful',
            icon: <PieChart size={24} />,
            content: {
                title: 'Insightful',
                description: 'Data-driven decisions lead to better results. We provide deep insights into user behavior and site performance.',
                deliverables: [
                    'Custom analytics dashboards',
                    'User behavior tracking',
                    'Performance reporting',
                    'A/B testing capabilities'
                ]
            }
        }
    ];

    return (
        <section id="approach" className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex gap-1">
                            <span className="w-0.5 h-3 bg-neutral-dark/20 -skew-x-12"></span>
                            <span className="w-0.5 h-3 bg-neutral-dark/20 -skew-x-12"></span>
                            <span className="w-0.5 h-3 bg-neutral-dark/20 -skew-x-12"></span>
                        </div>
                        <span className="text-xs font-bold tracking-[0.2em] text-neutral-dark/40 uppercase font-sans">Approach</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-outfit leading-[1.1] tracking-tight max-w-5xl mb-8">
                        <span className="text-neutral-dark font-medium">All things considered </span>
                        <span className="text-brand font-medium">for your peace of mind</span>
                    </h2>

                    <p className="max-w-2xl text-lg text-neutral-dark/70 leading-relaxed font-medium">
                        We are your full-service digital marketing partner, committed to getting it right, in every detail, every time. To do this, we embrace a <span className="underline decoration-brand decoration-2 underline-offset-4">holistic approach</span>, rooted in purposeful strategy and advanced through expert website design, meticulous engineering and strategic marketing.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left Column: Menu */}
                    <div className="lg:w-1/3">
                        <div className="flex flex-col">
                            {tabs.map((tab, idx) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={`group flex items-center gap-6 py-6 border-b transition-all duration-300 text-left ${idx === 0 ? 'border-t' : ''
                                        } ${activeTab === idx
                                            ? 'border-brand/30 text-neutral-dark'
                                            : 'border-neutral-dark/10 text-neutral-dark/40 hover:text-neutral-dark/70'
                                        }`}
                                >
                                    <div className={`p-3 rounded-full border transition-all duration-300 ${activeTab === idx
                                        ? 'bg-neutral-cream border-brand text-brand'
                                        : 'bg-transparent border-neutral-dark/20 text-current group-hover:border-neutral-dark/40'
                                        }`}>
                                        {tab.icon}
                                    </div>
                                    <span className={`text-xl font-bold font-outfit ${activeTab === idx ? 'text-neutral-dark' : 'text-current'
                                        }`}>{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:w-2/3">
                        <div className="bg-neutral-cream/30 rounded-3xl p-8 md:p-12 border border-brand/5 min-h-[500px] flex flex-col justify-center transition-all duration-500">
                            <h3 className="text-3xl font-outfit font-bold text-neutral-dark mb-6">
                                {tabs[activeTab].content.title}:
                            </h3>
                            <p className="text-neutral-dark/70 text-lg leading-relaxed mb-10">
                                {tabs[activeTab].content.description}
                            </p>

                            <div className="bg-white rounded-2xl p-8 border border-brand/5 shadow-sm">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-dark/40 mb-6 font-sans">Deliverables</h4>
                                <ul className="space-y-3">
                                    {tabs[activeTab].content.deliverables.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-neutral-dark/80 font-medium">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
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
        <footer className="bg-neutral-dark text-white pt-32 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="mb-32">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="flex gap-1">
                            <span className="w-0.5 h-3 bg-white/20 -skew-x-12"></span>
                            <span className="w-0.5 h-3 bg-white/20 -skew-x-12"></span>
                            <span className="w-0.5 h-3 bg-white/20 -skew-x-12"></span>
                        </div>
                        <span className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase font-sans">Start the conversation</span>
                    </div>

                    <a href="mailto:hello@cheri.com" className="text-[8vw] md:text-[9vw] font-outfit font-medium tracking-tight hover:text-brand transition-colors duration-300 leading-none block -ml-[0.5vw]">
                        hello@cheri.com
                    </a>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-end border-t border-white/10 pt-12">
                    {/* Links Columns */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase font-sans mb-6">Agency</h4>
                        <ul className="space-y-3">
                            {['Case Studies', 'Methodology', 'About Us', 'Contact'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-lg font-medium hover:text-brand transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase font-sans mb-6">Socials</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Twitter / X', icon: <FaXTwitter /> },
                                { name: 'Instagram', icon: <FaInstagram /> },
                                { name: 'LinkedIn', icon: <FaLinkedinIn /> }
                            ].map(item => (
                                <li key={item.name}>
                                    <a href="#" className="text-lg font-medium hover:text-brand transition-colors flex items-center gap-2">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Logo & Address - Right Aligned */}
                    <div className="lg:col-span-6 lg:text-right flex flex-col lg:items-end justify-between h-full">
                        <div className="mb-8 lg:mb-0">
                            <div className="flex items-center gap-2 lg:justify-end mb-4">
                                <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">C</span>
                                </div>
                                <span className="text-2xl font-black tracking-tighter text-white uppercase">cheri</span>
                            </div>
                        </div>

                        <div className="text-white/40 font-medium text-sm leading-relaxed">
                            <p>1234 Sunset Blvd, Los Angeles CA 90026</p>
                            <p className="hover:text-white transition-colors"><a href="mailto:hello@cheri.com">hello@cheri.com</a></p>
                            <p>+1 (555) 012-3456</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-24 text-xs font-bold tracking-widest text-white/20 uppercase">
                    <p>© 2026 CHERI. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-brand transition-colors">PRIVACY POLICY</a>
                        <a href="#" className="hover:text-brand transition-colors">COOKIE POLICY</a>
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
            <Services />
            <Approach />
            <CTA />
            <Footer />
        </div>
    );
};

export default App;
