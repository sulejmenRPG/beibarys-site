'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
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

export default function Gallery({ id, title, subtitle, label, items }: GalleryProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const closeVideo = useCallback(() => {
        setActiveVideo(null);
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
    }, []);

    // Close modal on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeVideo();
            }
        };
        if (activeVideo) {
            window.addEventListener('keydown', handleEsc);
            return () => window.removeEventListener('keydown', handleEsc);
        }
    }, [activeVideo, closeVideo]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const openVideo = (videoUrl: string) => {
        // Save scroll position and lock body
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
        setActiveVideo(videoUrl);
    };

    const handleCloseClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        // Restore scroll position
        const scrollY = document.body.style.top;
        closeVideo();
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleCloseClick(e);
        }
    };

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
                                onClick={() => item.video && openVideo(item.video)}
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
                                <div className={styles.overlay}>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {activeVideo && (
                <div className={styles.modal} onClick={handleBackdropClick}>
                    <button
                        className={styles.closeBtn}
                        onClick={handleCloseClick}
                        type="button"
                        aria-label="Закрыть"
                    >
                        <X size={32} />
                    </button>
                    <div className={styles.modalContent}>
                        <video
                            src={activeVideo}
                            controls
                            autoPlay
                            playsInline
                            className={styles.modalVideo}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
