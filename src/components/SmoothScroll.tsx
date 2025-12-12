'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
    useEffect(() => {
        // Intercept all anchor clicks for smooth scrolling
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');

            if (!anchor) return;

            const href = anchor.getAttribute('href');
            if (!href) return;

            // Handle both /#section and #section formats
            let hash = '';
            if (href.startsWith('/#')) {
                hash = href.substring(1); // Remove leading /
            } else if (href.startsWith('#')) {
                hash = href;
            } else {
                return; // Not an anchor link
            }

            const elementId = hash.substring(1); // Remove #
            const element = document.getElementById(elementId);

            if (element) {
                e.preventDefault();

                // Calculate offset for fixed header
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // Smooth scroll with easing
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update URL without scroll
                if (window.location.pathname === '/') {
                    window.history.pushState(null, '', hash);
                }
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return null;
}
