'use client';

import { useRef, useState, useEffect } from 'react';
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
    }, [activeVideo]);

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
        setActiveVideo(videoUrl);
        document.body.style.overflow = 'hidden';
    };

    const closeVideo = () => {
        setActiveVideo(null);
        document.body.style.overflow = '';
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
                <div className={styles.modal} onClick={closeVideo}>
                    <button className={styles.closeBtn} onClick={closeVideo}>
                        <X size={32} />
                    </button>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <video
                            src={activeVideo}
                            controls
                            autoPlay
                            className={styles.modalVideo}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
