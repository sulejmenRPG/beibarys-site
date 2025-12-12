'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './Gallery.module.css';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import Image from 'next/image';

interface GalleryItem {
    title: string;
    image?: string;
    video?: string;
}

interface GalleryProps {
    id: string;
    title: string;
    subtitle: string;
    label: string;
    items: GalleryItem[];
}

// Modal Component with navigation and swipe (supports both videos and images)
function MediaModal({
    items,
    currentIndex,
    onClose,
    onPrev,
    onNext,
}: {
    items: GalleryItem[];
    currentIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}) {
    const currentItem = items[currentIndex];
    const hasMultiple = items.length > 1;
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose, onPrev, onNext]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;
        const threshold = 50;
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                onNext();
            } else {
                onPrev();
            }
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <div
            className={styles.modal}
            onClick={handleBackdropClick}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Close button */}
            <button
                className={styles.closeBtn}
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                type="button"
                aria-label="Закрыть"
            >
                <X size={32} />
            </button>

            {/* Previous button */}
            {hasMultiple && (
                <button
                    className={`${styles.navBtn} ${styles.navBtnPrev}`}
                    onClick={(e) => { e.stopPropagation(); onPrev(); }}
                    type="button"
                    aria-label="Предыдущее"
                >
                    <ChevronLeft size={32} />
                </button>
            )}

            {/* Content - Video or Image */}
            <div className={styles.modalContent}>
                {currentItem.video ? (
                    <video
                        key={currentItem.video}
                        src={currentItem.video}
                        controls
                        autoPlay
                        playsInline
                        className={styles.modalVideo}
                        onClick={(e) => e.stopPropagation()}
                    />
                ) : currentItem.image ? (
                    <img
                        key={currentItem.image}
                        src={currentItem.image}
                        alt={currentItem.title || 'Gallery image'}
                        className={styles.modalImage}
                        onClick={(e) => e.stopPropagation()}
                    />
                ) : null}
            </div>

            {/* Next button */}
            {hasMultiple && (
                <button
                    className={`${styles.navBtn} ${styles.navBtnNext}`}
                    onClick={(e) => { e.stopPropagation(); onNext(); }}
                    type="button"
                    aria-label="Следующее"
                >
                    <ChevronRight size={32} />
                </button>
            )}

            {/* Counter */}
            {hasMultiple && (
                <div className={styles.counter}>
                    {currentIndex + 1} / {items.length}
                </div>
            )}
        </div>,
        document.body
    );
}

export default function Gallery({ id, title, subtitle, label, items }: GalleryProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (activeIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [activeIndex]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const openItem = (index: number) => {
        setActiveIndex(index);
    };

    const closeModal = useCallback(() => {
        setActiveIndex(null);
    }, []);

    const prevItem = useCallback(() => {
        setActiveIndex((prev) =>
            prev !== null ? (prev - 1 + items.length) % items.length : 0
        );
    }, [items.length]);

    const nextItem = useCallback(() => {
        setActiveIndex((prev) =>
            prev !== null ? (prev + 1) % items.length : 0
        );
    }, [items.length]);

    return (
        <>
            <section id={id} className={`section ${styles.gallery}`}>
                <div className="container">
                    <div className={styles.header}>
                        <div>
                            <span className="section-label">{label}</span>
                            <h2 className="section-title">{title}</h2>
                            <p className="section-subtitle">{subtitle}</p>
                        </div>
                        <div className={styles.controls}>
                            <button
                                className={styles.controlBtn}
                                onClick={() => scroll('left')}
                                aria-label="Назад"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                className={styles.controlBtn}
                                onClick={() => scroll('right')}
                                aria-label="Вперёд"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    <div className={styles.carousel} ref={scrollRef}>
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={styles.item}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => openItem(index)}
                            >
                                <div className={styles.imageWrapper}>
                                    {item.video ? (
                                        <video
                                            className={styles.videoThumb}
                                            src={item.video}
                                            muted
                                            playsInline
                                            preload="metadata"
                                        />
                                    ) : item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.title || 'Gallery image'}
                                            fill
                                            className={styles.image}
                                            sizes="(max-width: 768px) 280px, 320px"
                                        />
                                    ) : (
                                        <div className={styles.placeholder} />
                                    )}
                                </div>
                                {item.video && (
                                    <div className={styles.playBtn}>
                                        <Play size={24} fill="currentColor" />
                                    </div>
                                )}
                                {item.title && !/^\d+$/.test(item.title) && (
                                    <div className={styles.overlay}>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal via Portal */}
            {mounted && activeIndex !== null && items.length > 0 && (
                <MediaModal
                    items={items}
                    currentIndex={activeIndex}
                    onClose={closeModal}
                    onPrev={prevItem}
                    onNext={nextItem}
                />
            )}
        </>
    );
}
