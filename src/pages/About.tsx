import React from 'react';
import { ScrollReveal } from '../App';
import { Users, Sparkles, Globe } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="pt-32 pb-24 px-6 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="flex items-center gap-2 mb-8 text-brand font-medium tracking-widest text-xs uppercase">
                        <span>Our Mission</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-outfit font-medium text-neutral-dark mb-12 leading-[0.9] tracking-tight">
                        Bridging the <br /><span className="text-neutral-dark/40">presence gap.</span>
                    </h1>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-20">
                    <ScrollReveal delay={0.2}>
                        <div className="space-y-6">
                            <p className="text-2xl text-neutral-dark leading-relaxed font-outfit">
                                Cheri was founded on the belief that every bright idea deserves a beautiful and professional on-screen presence.
                            </p>
                            <p className="text-lg text-neutral-dark/60 leading-relaxed font-medium">
                                We've simplified the traditionally complex process of talent sourcing and production, allowing startups and agencies to focus on what they do best: building the future.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {[
                            { label: "Community", val: "5k+", icon: <Users size={20} className="text-brand" /> },
                            { label: "Projects", val: "12k+", icon: <Sparkles size={20} className="text-brand" /> },
                            { label: "Regions", val: "24+", icon: <Globe size={20} className="text-brand" /> }
                        ].map((stat, idx) => (
                            <ScrollReveal key={idx} delay={0.1 * idx}>
                                <div className="p-8 bg-neutral-dark/5 rounded-3xl">
                                    <div className="mb-4">{stat.icon}</div>
                                    <p className="text-4xl font-outfit font-medium text-neutral-dark">{stat.val}</p>
                                    <p className="text-sm text-neutral-dark/40 font-bold uppercase tracking-widest mt-1">{stat.label}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
