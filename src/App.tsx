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
import cheriCat from './assets/cheri-cat.png';
import CardNav from './CardNav';
import { FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);
    return null;
};

// Page Imports
import Browse from './pages/Browse';
import Criteria from './pages/Criteria';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import About from './pages/About';
import GetInTouch from './pages/GetInTouch';

// --- ANIMATION COMPONENTS ---

export const ScrollReveal: React.FC<{ children: React.ReactNode; delay?: number; direction?: 'up' | 'down' | 'left' | 'right' }> = ({ children, delay = 0, direction = 'up' }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
                x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            {children}
        </motion.div>
    );
};

// --- TOP VIEWPORT: Minimalist / Jellypepper Style ---

// Navbar removed in favor of CardNav


import CircularGallery from './CircularGallery';


const Hero: React.FC = () => {
    return (
        <section
            className="min-h-[85vh] flex flex-col items-center justify-center pt-20 pb-0 relative overflow-hidden bg-[radial-gradient(circle_at_center,_var(--color-neutral-cream)_0%,_var(--color-brand-light)_100%)] isolate"
        >
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center z-10 relative px-6">
                <ScrollReveal delay={0.1}>
                    <div className="mb-12 animate-float transform-gpu will-change-transform" style={{ backfaceVisibility: 'hidden' }}>
                        <img
                            src={cheriLogo}
                            alt="Cheri Logo"
                            className="w-16 h-auto invert"
                        />
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <h1 className="text-4xl md:text-7xl font-outfit text-neutral-dark mb-8 leading-[0.95] tracking-tight">
                        Vetted on-screen <br className="hidden md:block" /> talent for bright ideas
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <p className="max-w-lg mx-auto text-base md:text-lg text-neutral-dark/80 mb-8 leading-relaxed font-medium">
                        We source and vet beautiful female presence for startups looking to build high-performance marketing content.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-0 z-20 relative">
                        <button className="group flex items-center gap-3 text-sm font-bold text-neutral-dark hover:text-brand transition-all duration-300 bg-white/80 backdrop-blur-sm py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform-gpu backface-hidden will-change-transform" style={{ backfaceVisibility: 'hidden' }}>
                            <div className="w-10 h-10 bg-neutral-dark rounded-full flex items-center justify-center text-white group-hover:bg-brand transition-colors duration-300">
                                <ArrowRight size={16} />
                            </div>
                            <span>Get started with us</span>
                        </button>
                    </div>
                </ScrollReveal>
            </div>

            <div style={{ height: '600px', position: 'relative', width: '100%', marginTop: '-80px', zIndex: 1 }}>
                <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
            </div>
        </section>
    );
};

// --- REST OF THE SITE: Original Agency Design ---

const QuickStats: React.FC = () => {
    return (
        <section className="px-6 py-12 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-y-2 border-brand/5 py-12">
                {[
                    { val: "100+", label: "Vetted Talent" },
                    { val: "24hr", label: "Fast Turnaround" },
                    { val: "500+", label: "Startups Served" },
                    { val: "15k+", label: "Assets Delivered" }
                ].map((stat, i) => (
                    <ScrollReveal key={i} delay={i * 0.1}>
                        <div className="text-center">
                            <span className="block text-4xl md:text-5xl font-black text-neutral-dark mb-1">{stat.val}</span>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-neutral-dark/30">{stat.label}</span>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

const Services: React.FC = () => {
    const services = [
        {
            title: "Presence",
            description: "Faces built for modern digital storytelling, designed to capture attention and communicate brand value on screen."
        },
        {
            title: "Access",
            description: "Talent on demand, ready for production, without the delays, negotiations, or overhead of traditional casting."
        },
        {
            title: "Performance",
            description: "Selection driven by proven on-camera performance and professionalism, not follower counts or vanity metrics."
        },
        {
            title: "Ample",
            description: "A steady, scalable supply of on-screen talent to support consistent content creation as your company grows."
        }
    ];

    return (
        <section id="services" className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
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
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-brand/10">
                    {services.map((service, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <div
                                className={`flex flex-col pt-12 pb-12 px-4 md:px-8 border-brand/10 ${idx < services.length - 1 ? 'lg:border-r' : ''
                                    } ${idx % 2 === 0 ? 'md:border-r lg:border-r-0' : ''} ${idx < 2 ? 'md:border-b lg:border-b-0' : ''
                                    } ${idx < services.length - 1 ? 'border-b md:border-b-0' : ''}`}
                            >
                                <div className="aspect-[4/3] mb-10 bg-neutral-cream rounded-sm overflow-hidden relative group w-full grayscale hover:grayscale-0 transition-all duration-500">
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
                        </ScrollReveal>
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
            id: 'curated',
            label: 'Curated',
            icon: <Fingerprint size={24} />,
            content: {
                title: 'Curated',
                description: 'Every talent on Cheri is intentionally selected. We focus on on-camera presence, professionalism, and brand adaptability to ensure startups are choosing from a pool that meets a clear standard.',
                deliverables: [
                    'Vetted talent onboarding',
                    'On-camera presence evaluation',
                    'Brand and tone alignment review',
                    'Ongoing talent quality checks'
                ]
            }
        },
        {
            id: 'accessible',
            label: 'Accessible',
            icon: <Accessibility size={24} />,
            content: {
                title: 'Accessible',
                description: 'Cheri lowers the barrier to sourcing on-screen talent. Startups gain immediate access to capable female talent without influencer contracts, long casting cycles, or unnecessary gatekeeping.',
                deliverables: [
                    'No follower minimums',
                    'Simple booking workflow',
                    'Transparent pricing structure',
                    'Clear usage rights'
                ]
            }
        },
        {
            id: 'performant',
            label: 'Performant',
            icon: <Activity size={24} />,
            content: {
                title: 'Performant',
                description: 'Talent selection is driven by real outcomes. Cheri prioritizes performance indicators over popularity, helping startups choose talent that delivers clarity, engagement, and consistency on screen.',
                deliverables: [
                    'Performance-based ratings',
                    'Client feedback loops',
                    'Talent tiering by effectiveness',
                    'Repeatability tracking'
                ]
            }
        },
        {
            id: 'scalable',
            label: 'Scalable',
            icon: <PieChart size={24} />, // PieChart works for scalable/growth
            content: {
                title: 'Scalable',
                description: 'As startups grow, content demands increase. Cheri is built to support volume—ensuring brands always have access to a steady supply of on-screen talent.',
                deliverables: [
                    'Expanding talent pool',
                    'Support for recurring campaigns',
                    'Multi-talent sourcing for growth teams',
                    'Ongoing availability management'
                ]
            }
        },
        {
            id: 'supported',
            label: 'Supported',
            icon: <HeartHandshake size={24} />,
            content: {
                title: 'Supported',
                description: 'Cheri stays involved throughout the process, ensuring talent delivery remains smooth and expectations are met on both sides.',
                deliverables: [
                    'Talent coordination and matching',
                    'Delivery oversight',
                    'Issue resolution and support',
                    'Clear communication between parties'
                ]
            }
        },
        {
            id: 'aligned',
            label: 'Aligned',
            icon: <Settings size={24} />,
            content: {
                title: 'Aligned',
                description: 'We prioritize alignment between brand intent and on-screen execution. Talent is matched not just on appearance, but on tone, comfort, and communication style.',
                deliverables: [
                    'Brand brief review',
                    'Talent-to-brand fit guidance',
                    'Role-specific recommendations',
                    'Consistency across deliverables'
                ]
            }
        }
    ];

    return (
        <section id="approach" className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
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
                            <span className="text-neutral-dark font-medium">Designed for growth. </span>
                            <span className="text-brand font-medium">Built around presence.</span>
                        </h2>

                        <p className="max-w-3xl text-lg text-neutral-dark/70 leading-relaxed font-medium">
                            Cheri exists to make sourcing on-screen female talent simple, reliable, and effective for modern startups. Our approach prioritizes speed, quality, and performance—connecting brands with talent that is ready to show up on camera and deliver results. Every part of our process is designed to reduce friction, maintain consistency, and support scalable content production.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left Column: Menu */}
                    <div className="lg:w-1/3">
                        <div className="flex flex-col">
                            {tabs.map((tab, idx) => (
                                <ScrollReveal key={tab.id} delay={idx * 0.05} direction="right">
                                    <button
                                        onClick={() => setActiveTab(idx)}
                                        className={`group flex items-center gap-6 py-6 border-b transition-all duration-300 text-left w-full ${idx === 0 ? 'border-t' : ''
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
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:w-2/3">
                        <ScrollReveal delay={0.2}>
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="bg-neutral-cream/30 rounded-3xl p-8 md:p-12 border border-brand/5 min-h-[500px] flex flex-col justify-center transition-all duration-500"
                            >
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
                            </motion.div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CTA: React.FC = () => {
    return (
        <section className="px-6 pt-16 pb-0 bg-white flex flex-col items-center justify-center min-h-[40vh] relative overflow-visible isolate -mb-1 z-30">
            {/* Background Gradients - Wrapped to prevent overflow while keeping Cat visible */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-light/10 rounded-full blur-[120px] -ml-40 -mb-40 pointer-events-none"></div>
            </div>

            <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center justify-center h-full pb-0 mb-32">
                {/* Heading with Inline Logo */}
                <ScrollReveal delay={0.1}>
                    <h2 className="text-4xl md:text-7xl font-outfit font-medium text-neutral-dark mb-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 leading-tight tracking-tight">
                        <span>Book with</span>
                        <span className="inline-flex items-center justify-center px-2">
                            <img src={cheriLogo} alt="Cheri" className="h-8 md:h-12 w-auto invert" />
                        </span>
                        <span>today.</span>
                    </h2>
                </ScrollReveal>
            </div>

            {/* Cheri Cat - Kilroy style */}
            <div className="absolute bottom-30 md:bottom-26 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none z-40">
                <div className="relative pointer-events-auto translate-y-[150px]">
                    <img
                        src={cheriCat}
                        alt="Cheri Cat"
                        className="w-80 md:w-[600px] h-auto block select-none"
                    />
                </div>
            </div>
        </section>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-neutral-dark text-white pt-32 pb-12 px-6 overflow-hidden z-20 pointer-events-none">
            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#ee9ca7] rounded-full blur-[120px] opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto pointer-events-auto">
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
                <ScrollReveal delay={0.1}>
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
                                    <img src={cheriFullBlack} alt="Cheri" className="h-10 invert brightness-0 opacity-100" />
                                </div>
                            </div>

                            <div className="text-white/60 font-medium text-sm leading-relaxed">
                                <p>1234 Sunset Blvd, Los Angeles CA 90026</p>
                                <p className="hover:text-white transition-colors"><a href="mailto:hello@cheri.com">hello@cheri.com</a></p>
                                <p>+1 (555) 012-3456</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

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

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <QuickStats />
            <Services />
            <Approach />
            <CTA />
        </>
    );
};

const AppContent: React.FC = () => {
    const location = useLocation();
    const isDarkPage = location.pathname === '/process/pricing';

    const navItems = [
        {
            label: "Talent",
            bgColor: "#fcece9", // Neutral Cream
            textColor: "#2d1b1e", // Neutral Dark
            links: [
                { label: "Browse", href: "/talent/browse", ariaLabel: "Browse Talent Pool" },
                { label: "Criteria", href: "/talent/criteria", ariaLabel: "Selection Criteria" }
            ]
        },
        {
            label: "Process",
            bgColor: "#f4b8c7", // Brand Light
            textColor: "#2d1b1e", // Neutral Dark
            links: [
                { label: "How it Works", href: "/process/how-it-works", ariaLabel: "Our Process" },
                { label: "Pricing", href: "/process/pricing", ariaLabel: "View Pricing" }
            ]
        },
        {
            label: "Contact",
            bgColor: "#e06b88", // Brand
            textColor: "#fff", // White
            links: [
                { label: "About", href: "/contact/about", ariaLabel: "About Cheri" },
                { label: "Get in Touch", href: "/contact/get-in-touch", ariaLabel: "Get in Touch" }
            ]
        }
    ];

    return (
        <div className={`min-h-screen overflow-x-hidden selection:bg-brand/20 selection:text-brand font-sans text-neutral-dark ${isDarkPage ? 'bg-[#120b0d]' : 'bg-white'}`}>
            <ScrollToTop />
            {/* Top Left Logo - Link to Home */}
            <div className="absolute left-4 md:left-6 top-4 md:top-6 z-[99]">
                <Link to="/">
                    <img
                        src={cheriFullBlack}
                        alt="Cheri"
                        className={`h-6 md:h-8 transition-all duration-500 ${isDarkPage ? 'invert brightness-0 opacity-100' : ''}`}
                    />
                </Link>
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

            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial={{ y: "20px", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-20px", opacity: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/talent/browse" element={<Browse />} />
                        <Route path="/talent/criteria" element={<Criteria />} />
                        <Route path="/process/how-it-works" element={<HowItWorks />} />
                        <Route path="/process/pricing" element={<Pricing />} />
                        <Route path="/contact/about" element={<About />} />
                        <Route path="/contact/get-in-touch" element={<GetInTouch />} />
                    </Routes>
                </motion.div>
            </AnimatePresence>

            <Footer />
        </div>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
};

export default App;
