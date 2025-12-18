import React from 'react';
import { ScrollReveal } from '../App';

const HowItWorks: React.FC = () => {
    return (
        <div className="pt-32 pb-24 px-6 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="flex items-center gap-2 mb-8 text-brand font-medium tracking-widest text-xs uppercase">
                        <span>Workflow</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-outfit font-medium text-neutral-dark mb-12 leading-[0.9] tracking-tight">
                        How it <br /><span className="text-neutral-dark/40">works.</span>
                    </h1>
                </ScrollReveal>

                <div className="space-y-12 mt-20">
                    {[
                        { step: "01", title: "Discovery & Briefing", desc: "We start by understanding your brand vision and the specific presence you need for your content." },
                        { step: "02", title: "Talent Matching", desc: "Our team curates a selection of vetted talent that matches your criteria and project scope." },
                        { step: "03", title: "Production Sync", desc: "We coordinate with your team to ensure the talent is briefed and ready for your shoot day." },
                        { step: "04", title: "Delivery & Feedback", desc: "High-quality content delivered. We gather feedback to ensure perfection every time." }
                    ].map((item, idx) => (
                        <ScrollReveal key={idx} delay={0.1 * idx}>
                            <div className="flex flex-col md:flex-row gap-8 items-start pb-12 border-b border-brand/10">
                                <span className="text-6xl font-outfit font-medium text-brand/20 italic">{item.step}</span>
                                <div className="max-w-xl">
                                    <h3 className="text-2xl md:text-3xl font-outfit font-medium text-neutral-dark mb-4">{item.title}</h3>
                                    <p className="text-neutral-dark/60 text-lg leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
