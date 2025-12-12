'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
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

// Mobile Menu Portal Component
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div className={styles.mobileMenuOverlay}>
            <button className={styles.closeMenuBtn} onClick={onClose} aria-label="Закрыть меню">
                <X size={28} />
            </button>
            <nav className={styles.mobileNav}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={styles.mobileNavLink}
                        onClick={onClose}
                    >
                        {link.name}
                    </a>
                ))}
                <a href="/#booking" className={styles.mobileBookBtn} onClick={onClose}>
                    Забронировать
                </a>
            </nav>
        </div>,
        document.body
    );
}

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isInnerPage = pathname !== '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const showScrolledStyle = isScrolled || isInnerPage;

    return (
        <>
            <header className={`${styles.header} ${showScrolledStyle ? styles.scrolled : ''}`}>
                <div className={styles.container}>
                    <a href="/" className={styles.logo}>
                        <span className={styles.logoIcon}>B</span>
                        <div className={styles.logoText}>
                            <span className={styles.logoName}>BEIBARYS</span>
                            <span className={styles.logoTagline}>территория комфорта</span>
                        </div>
                    </a>

                    {/* Desktop nav */}
                    <nav className={styles.desktopNav}>
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className={styles.navLink}>
                                {link.name}
                            </a>
                        ))}
                    </nav>

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
            </header>

            {/* Mobile menu rendered via portal outside of header */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    );
}
