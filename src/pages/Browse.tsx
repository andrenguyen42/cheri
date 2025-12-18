import React from 'react';
import { ScrollReveal } from '../App';

const Browse: React.FC = () => {
    return (
        <div className="pt-32 px-6 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <h1 className="text-5xl md:text-7xl font-outfit text-neutral-dark mb-8">Browse Talent</h1>
                    <p className="text-lg text-neutral-dark/60 max-w-2xl">
                        Discover our vetted selection of on-screen talent ready for your next project.
                    </p>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Browse;
