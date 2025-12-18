import React from 'react';
import { ScrollReveal } from '../App';
import { Target, ShieldCheck, Zap } from 'lucide-react';

const Criteria: React.FC = () => {
    return (
        <div className="pt-32 pb-24 px-6 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="flex items-center gap-2 mb-8 text-brand font-medium tracking-widest text-xs uppercase">
                        <span>Quality Control</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-outfit font-medium text-neutral-dark mb-12 leading-[0.9] tracking-tight">
                        Our selection <br /><span className="text-neutral-dark/40">criteria.</span>
                    </h1>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
                    {[
                        { title: "Visual Identity", icon: <Target className="text-brand" />, desc: "We look for a unique and versatile presence that aligns with modern startup aesthetics." },
                        { title: "Professionalism", icon: <ShieldCheck className="text-brand" />, desc: "Reliability is key. Every talent in our pool is vetted for their on-set etiquette." },
                        { title: "Adaptability", icon: <Zap className="text-brand" />, desc: "From high-fashion to casual lifestyle, our talent can pivot to any brand voice." }
                    ].map((item, idx) => (
                        <ScrollReveal key={idx} delay={0.2 * idx}>
                            <div className="flex flex-col gap-6">
                                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-outfit font-medium text-neutral-dark">{item.title}</h3>
                                <p className="text-neutral-dark/60 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Criteria;
