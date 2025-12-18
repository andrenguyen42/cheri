import React from 'react';
import { ScrollReveal } from '../App';

const Browse: React.FC = () => {
    return (
        <div className="pt-32 pb-24 px-6 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="flex items-center gap-2 mb-8 text-brand font-medium tracking-widest text-xs uppercase">
                        <span>Directory</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-outfit font-medium text-neutral-dark mb-12 leading-[0.9] tracking-tight">
                        Browse our <br /><span className="text-neutral-dark/40">curated talent.</span>
                    </h1>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <ScrollReveal key={i} delay={0.1 * i}>
                            <div className="aspect-[3/4] bg-neutral-dark/5 rounded-3xl relative overflow-hidden group cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <p className="text-white text-xl font-outfit">Talent Model #{i}</p>
                                    <p className="text-white/60 text-sm">Los Angeles, CA</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Browse;
