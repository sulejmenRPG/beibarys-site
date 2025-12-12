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
    const pathname = usePathname();

    // На внутренних страницах (offer, damages) всегда показываем scrolled стиль
    const isInnerPage = pathname !== '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // На внутренних страницах или при скролле — показываем белый фон
    const showScrolledStyle = isScrolled || isInnerPage;

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

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={styles.navLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
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

            {isMobileMenuOpen && (
                <div className={styles.mobileOverlay} onClick={() => setIsMobileMenuOpen(false)} />
            )}
        </header>
    );
}
