import React, { useState } from 'react';
import { ScrollReveal } from '../App';
import { ArrowRight, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import cheriLogo from '../assets/cheri.png';

const Pricing: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

    const plans = [
        {
            name: "Seed",
            price: billingCycle === 'monthly' ? "2,450" : "1,950",
            description: "Perfect for seed-stage startups building their first core content engine.",
            features: [
                "1 Dedicated Creator Stream",
                "Product & Social Content",
                "Framer / Webflow support",
                "Unlimited Requests",
                "4-day avg. turn-around",
                "Slack communications",
                "Pause or cancel anytime"
            ],
            buttonText: "Get Started",
            featured: false
        },
        {
            name: "Growth",
            price: billingCycle === 'monthly' ? "4,800" : "3,950",
            description: "High-throughput marketing engine for scaling brands.",
            features: [
                "2 Dedicated Creator Streams",
                "Ads & Performance Content",
                "Full Identity Design",
                "Brand Strategy Support",
                "2-day avg. turn-around",
                "Priority Slack + Email",
                "1 Monthly Strategy Sync"
            ],
            buttonText: "Build with us",
            featured: true
        },
        {
            name: "Scale",
            price: "Custom",
            description: "Bespoke solutions for high-growth enterprises and large agencies.",
            features: [
                "Unlimited Creator Streams",
                "On-site shoot coordination",
                "Full 360 Content Pipeline",
                "Global Usage Rights",
                "Instant turnaround team",
                "Dedicated Account Manager",
                "Quarterly Planning Workshops"
            ],
            buttonText: "Book discovery call",
            featured: false
        }
    ];

    return (
        <div className="pt-32 pb-24 px-6 relative overflow-hidden">
            {/* Noise Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] contrast-150 z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[160px] -mr-80 -mt-80 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-light/5 rounded-full blur-[140px] -ml-60 -mb-60 pointer-events-none"></div>

            {/* Abstract Decorative Circles - Inspired by Image 1 */}
            <div className="absolute top-20 left-10 opacity-20 pointer-events-none hidden lg:block">
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border border-white/40 rounded-full"></div>
                    <div className="absolute inset-0 border border-white/40 rounded-full translate-x-4"></div>
                    <div className="absolute inset-0 border border-white/80 rounded-full translate-x-8"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <div className="flex items-center justify-center mb-10 overflow-hidden">
                            <img src={cheriLogo} alt="Cheri" className="w-12 h-auto opacity-100 hover:opacity-66 transition-opacity duration-500" />
                        </div>
                        <h1 className="text-5xl md:text-8xl font-outfit font-medium mb-6 leading-[0.9] tracking-tight max-w-4xl mx-auto text-white/25">
                            Transparent pricing with <span className="text-white/100 italic">flexible terms.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
                            Scale your marketing output with high-performance content. No hiring overhead, no hidden fees.
                        </p>
                    </ScrollReveal>

                    {/* Billing Toggle - Inspired by Image 2 */}
                    <ScrollReveal delay={0.2}>
                        <div className="flex items-center justify-center gap-4 mb-16">
                            <span className={`text-sm font-medium transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-white/40'}`}>Monthly</span>
                            <button
                                onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'quarterly' : 'monthly')}
                                className="w-14 h-7 bg-white/10 rounded-full p-1 relative transition-colors hover:bg-white/20"
                            >
                                <motion.div
                                    layout
                                    className="w-5 h-5 bg-brand rounded-full"
                                    animate={{ x: billingCycle === 'monthly' ? 0 : 28 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            </button>
                            <span className={`text-sm font-medium transition-colors ${billingCycle === 'quarterly' ? 'text-white' : 'text-white/40'}`}>
                                Quarterly
                                <span className="ml-2 bg-brand/20 text-brand text-[10px] px-2 py-0.5 rounded-full border border-brand/30">SAVE 20%</span>
                            </span>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
                    {plans.map((plan, idx) => (
                        <ScrollReveal key={plan.name} delay={0.1 * idx}>
                            <div className={`relative group p-8 md:p-10 rounded-3xl border transition-all duration-500 hover:-translate-y-2 h-full flex flex-col ${plan.featured
                                ? 'bg-white text-neutral-dark border-transparent scale-100 md:scale-105 z-20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]'
                                : 'bg-white/5 text-white border-white/10 hover:border-white/20 z-10'
                                }`}>
                                {plan.featured && (
                                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-sm font-bold uppercase tracking-widest mb-2 opacity-60">
                                        {plan.name}
                                    </h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl md:text-6xl font-outfit font-medium">
                                            {plan.price !== "Custom" ? `$${plan.price}` : plan.price}
                                        </span>
                                        {plan.price !== "Custom" && (
                                            <span className="text-lg opacity-40">/mo</span>
                                        )}
                                    </div>
                                    <p className={`text-sm mt-4 leading-relaxed ${plan.featured ? 'text-neutral-dark/70' : 'text-white/50'}`}>
                                        {plan.description}
                                    </p>
                                </div>

                                <button className={`w-full py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-3 mb-10 ${plan.featured
                                    ? 'bg-neutral-dark text-white hover:bg-neutral-dark/90'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}>
                                    <span>{plan.buttonText}</span>
                                    <ArrowRight size={16} />
                                </button>

                                <div className="space-y-4 mt-auto">
                                    <div className={`text-[10px] font-black uppercase tracking-widest pb-2 border-b ${plan.featured ? 'border-neutral-dark/10 opacity-40' : 'border-white/10 opacity-30'}`}>
                                        What's included
                                    </div>
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className={`mt-1 flex-shrink-0 ${plan.featured ? 'text-brand' : 'text-white/40'}`}>
                                                <div className={`w-1.5 h-1.5 rounded-full bg-current`} />
                                            </div>
                                            <span className={`text-sm ${plan.featured ? 'text-neutral-dark/80' : 'text-white/70'}`}>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {plan.featured && (
                                    <div className="mt-8 flex items-center gap-2 text-xs font-medium text-brand">
                                        <Info size={14} />
                                        <span>Limited slots available this month</span>
                                    </div>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom CTA / Quote - Inspired by Image 3 */}
                <ScrollReveal delay={0.5}>
                    <div className="mt-24 p-8 md:p-16 rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-outfit font-medium mb-6">
                            Looking for a different approach?
                        </h2>
                        <p className="text-white/60 mb-10 text-lg">
                            Understandably, subscription-based isn't for everyone. We'd love to chat about your unique project and build a tailored plan for you.
                        </p>
                        <button className="inline-flex items-center gap-3 font-bold text-brand hover:text-white transition-all duration-300 group">
                            <span className="border-b-2 border-brand/30 group-hover:border-white pb-1">Book a discovery call</span>
                            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </ScrollReveal>
            </div>

            {/* Footer space adjustment */}
            <div className="h-20"></div>
        </div>
    );
};

export default Pricing;
