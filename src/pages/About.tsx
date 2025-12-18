import React from 'react';

const About: React.FC = () => {
    return (
        <div className="pt-32 px-6 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-outfit text-neutral-dark mb-8">About Cheri</h1>
                <p className="text-lg text-neutral-dark/60 max-w-2xl">
                    Our mission is to bridge the gap between bright ideas and beautiful on-screen presence.
                </p>
            </div>
        </div>
    );
};

export default About;
