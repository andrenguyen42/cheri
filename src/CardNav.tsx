import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

type CardNavLink = {
    label: string;
    href: string;
    ariaLabel: string;
};

export type CardNavItem = {
    label: string;
    bgColor: string;
    textColor: string;
    links: CardNavLink[];
};

export interface CardNavProps {
    logo: string;
    logoAlt?: string;
    items: CardNavItem[];
    className?: string;
    ease?: string;
    baseColor?: string;
    menuColor?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
    logo,
    logoAlt = 'Logo',
    items,
    className = '',
    ease = 'power3.out',
    baseColor = '#fff',
    menuColor
}) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const mobileNavRef = useRef<HTMLDivElement | null>(null);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const calculateHeight = () => {
        const navEl = navRef.current;
        if (!navEl) return 260;

        const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
        if (contentEl) {
            const wasVisible = contentEl.style.visibility;
            const wasPointerEvents = contentEl.style.pointerEvents;
            const wasPosition = contentEl.style.position;
            const wasHeight = contentEl.style.height;

            contentEl.style.visibility = 'visible';
            contentEl.style.pointerEvents = 'auto';
            contentEl.style.position = 'static';
            contentEl.style.height = 'auto';
            contentEl.offsetHeight;

            const topBar = 60;
            const padding = 16;
            const contentHeight = contentEl.scrollHeight;

            contentEl.style.visibility = wasVisible;
            contentEl.style.pointerEvents = wasPointerEvents;
            contentEl.style.position = wasPosition;
            contentEl.style.height = wasHeight;

            return topBar + contentHeight + padding;
        }
        return 260;
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;

        gsap.set(navEl, { height: 60, width: 60, overflow: 'hidden' });
        gsap.set(cardsRef.current, { y: 50, opacity: 0 });
        gsap.set('.logo-container', { opacity: 0, x: -20 });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
            height: calculateHeight(),
            width: '800px',
            maxWidth: '90vw',
            duration: 0.5,
            ease
        });

        tl.to('.logo-container', { opacity: 1, x: 0, duration: 0.3 }, 0.1);
        tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.3, stagger: 0.1 }, '-=0.3');

        return tl;
    };

    useLayoutEffect(() => {
        if (isMobile) return; // Skip desktop animation setup on mobile
        const tl = createTimeline();
        tlRef.current = tl;

        return () => {
            tl?.kill();
            tlRef.current = null;
        };
    }, [ease, items, isMobile]);

    useLayoutEffect(() => {
        if (isMobile) return;
        const handleResize = () => {
            if (!tlRef.current) return;

            if (isExpanded) {
                const newHeight = calculateHeight();
                gsap.set(navRef.current, { height: newHeight });

                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    newTl.progress(1);
                    tlRef.current = newTl;
                }
            } else {
                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    tlRef.current = newTl;
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isExpanded, isMobile]);

    const toggleMenu = () => {
        if (isMobile) {
            // Mobile: Simply toggle state, CSS handles animation
            setIsHamburgerOpen(!isHamburgerOpen);
            setIsExpanded(!isExpanded);
        } else {
            // Desktop: Use GSAP animation
            const tl = tlRef.current;
            if (!tl) return;
            if (!isExpanded) {
                setIsHamburgerOpen(true);
                setIsExpanded(true);
                tl.play(0);
            } else {
                setIsHamburgerOpen(false);
                tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
                tl.reverse();
            }
        }
    };

    const closeMenu = () => {
        setIsHamburgerOpen(false);
        setIsExpanded(false);
        if (!isMobile && tlRef.current) {
            tlRef.current.reverse();
        }
    };

    const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
        if (el) cardsRef.current[i] = el;
    };

    // Render Mobile Nav
    if (isMobile) {
        return (
            <>
                {/* Mobile Hamburger Button */}
                <div className={`fixed right-4 top-4 z-[100] ${className}`}>
                    <div
                        className="w-[50px] h-[50px] rounded-xl shadow-md flex items-center justify-center cursor-pointer"
                        style={{ backgroundColor: baseColor }}
                        onClick={toggleMenu}
                        role="button"
                        aria-label={isExpanded ? 'Close menu' : 'Open menu'}
                        tabIndex={0}
                    >
                        <div className="flex flex-col items-center justify-center gap-[6px]" style={{ color: menuColor || '#000' }}>
                            <div
                                className={`w-[24px] h-[2px] bg-current transition-transform duration-300 ${isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''}`}
                            />
                            <div
                                className={`w-[24px] h-[2px] bg-current transition-transform duration-300 ${isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''}`}
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile Full-Screen Overlay */}
                <div
                    className={`fixed inset-0 z-[98] transition-opacity duration-300 ${isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    onClick={closeMenu}
                    aria-hidden={!isExpanded}
                />

                {/* Mobile Side Panel */}
                <div
                    ref={mobileNavRef}
                    className={`fixed top-0 right-0 h-full w-[85vw] max-w-[320px] z-[99] transform transition-transform duration-300 ease-out ${isExpanded ? 'translate-x-0' : 'translate-x-full'}`}
                    style={{ backgroundColor: baseColor }}
                >
                    <div className="p-6 pt-20 h-full overflow-y-auto flex flex-col gap-4">
                        {/* Logo */}
                        <div className="mb-4">
                            <img src={logo} alt={logoAlt} className="h-[32px]" />
                        </div>

                        {/* Nav Items */}
                        {(items || []).slice(0, 3).map((item, idx) => (
                            <div
                                key={`${item.label}-${idx}`}
                                className="nav-card select-none relative flex flex-col gap-3 p-4 rounded-xl"
                                style={{ backgroundColor: item.bgColor, color: item.textColor }}
                            >
                                <div className="nav-card-label font-medium tracking-[-0.5px] text-lg">
                                    {item.label}
                                </div>
                                <div className="nav-card-links flex flex-col gap-1">
                                    {item.links?.map((lnk, i) => (
                                        <a
                                            key={`${lnk.label}-${i}`}
                                            className="nav-card-link inline-flex items-center gap-2 no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-sm"
                                            href={lnk.href}
                                            aria-label={lnk.ariaLabel}
                                        >
                                            <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                                            {lnk.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }

    // Render Desktop Nav
    return (
        <div
            className={`card-nav-container fixed right-6 top-6 z-[99] flex justify-end ${className}`}
        >
            <nav
                ref={navRef}
                className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height]`}
                style={{ backgroundColor: baseColor }}
            >
                <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] z-[2] w-full">
                    <div className="logo-container absolute left-4 top-0 h-full flex items-center opacity-0">
                        <img src={logo} alt={logoAlt} className="logo h-[28px]" />
                    </div>

                    <div
                        className={`hamburger-menu absolute right-0 top-0 w-[60px] h-[60px] ${isHamburgerOpen ? 'open' : ''} group flex flex-col items-center justify-center cursor-pointer gap-[6px]`}
                        onClick={toggleMenu}
                        role="button"
                        aria-label={isExpanded ? 'Close menu' : 'Open menu'}
                        tabIndex={0}
                        style={{ color: menuColor || '#000' }}
                    >
                        <div
                            className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
                                } group-hover:opacity-75`}
                        />
                        <div
                            className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
                                } group-hover:opacity-75`}
                        />
                    </div>
                </div>

                <div
                    className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
                        } md:flex-row md:items-end md:gap-[12px]`}
                    aria-hidden={!isExpanded}
                >
                    {(items || []).slice(0, 3).map((item, idx) => (
                        <div
                            key={`${item.label}-${idx}`}
                            className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
                            ref={setCardRef(idx)}
                            style={{ backgroundColor: item.bgColor, color: item.textColor }}
                        >
                            <div className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
                                {item.label}
                            </div>
                            <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                                {item.links?.map((lnk, i) => (
                                    <a
                                        key={`${lnk.label}-${i}`}
                                        className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
                                        href={lnk.href}
                                        aria-label={lnk.ariaLabel}
                                    >
                                        <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                                        {lnk.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default CardNav;
