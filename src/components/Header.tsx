'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navLinks = [
    { name: 'Главная', href: '/#hero' },
    { name: 'Услуги', href: '/#services' },
    { name: 'Размещение', href: '/#rooms' },
    { name: 'Прайс', href: '/#pricing' },
    { name: 'Меню', href: '/#menu' },
    { name: 'Отзывы', href: '/#reviews' },
    { name: 'Контакты', href: '/#contacts' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();

    const isInnerPage = pathname !== '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const showScrolledStyle = isScrolled || isInnerPage;

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`${styles.header} ${showScrolledStyle ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <a href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>B</span>
                    <div className={styles.logoText}>
                        <span className={styles.logoName}>BEIBARYS</span>
                        <span className={styles.logoTagline}>территория комфорта</span>
                    </div>
                </a>

                {/* Desktop nav - always visible on desktop */}
                {!isMobile && (
                    <nav className={styles.desktopNav}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={styles.navLink}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                )}

                <a href="/#booking" className={styles.bookBtn}>
                    Забронировать
                </a>

                <button
                    className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.active : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Меню"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile nav - only rendered when open */}
            {isMobile && isMobileMenuOpen && (
                <nav className={styles.mobileNav}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={styles.mobileNavLink}
                            onClick={handleNavClick}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
