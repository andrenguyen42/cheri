import React from 'react';
import { ScrollReveal } from '../App';
import { Mail, Calendar, ArrowRight } from 'lucide-react';

const GetInTouch: React.FC = () => {
    return (
        <div className="pt-32 pb-24 px-6 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="flex items-center gap-2 mb-8 text-brand font-medium tracking-widest text-xs uppercase">
                        <span>Contact</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-outfit font-medium text-neutral-dark mb-12 leading-[0.9] tracking-tight">
                        Start the <br /><span className="text-neutral-dark/40">conversation.</span>
                    </h1>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                    <ScrollReveal delay={0.2}>
                        <a href="mailto:hello@cheri.com" className="group p-10 bg-neutral-dark text-white rounded-[40px] flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px] transition-all duration-500 hover:bg-brand">
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-4xl font-outfit font-medium mb-4 italic transition-all group-hover:pl-4">Email Us</h3>
                                <p className="text-white/60 group-hover:text-white/80 font-medium">hello@cheri.com</p>
                            </div>
                        </a>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="group p-10 bg-brand/10 border border-brand/20 text-neutral-dark rounded-[40px] flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px] transition-all duration-500 hover:bg-brand/20">
                            <div className="w-14 h-14 bg-brand rounded-full flex items-center justify-center text-white">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <h3 className="text-4xl font-outfit font-medium mb-4 italic transition-all group-hover:pl-4">Book a Discovery</h3>
                                <p className="text-neutral-dark/60 font-medium mb-8">Schedule a 15-min intro call with our team.</p>
                                <button className="flex items-center gap-2 font-bold text-brand uppercase tracking-widest text-sm border-b-2 border-brand/20 pb-1">
                                    View Calendar <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
