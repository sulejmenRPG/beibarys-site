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

// Video Thumbnail Component - extracts first frame
function VideoThumbnail({ src, className }: { src: string; className?: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const handleLoadedData = () => {
            // Seek to first second for better thumbnail
            video.currentTime = 1;
        };

        const handleSeeked = () => {
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            try {
                const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
                setThumbnail(dataUrl);
                setIsLoading(false);
            } catch {
                // CORS error - show placeholder
                setIsLoading(false);
            }
        };

        const handleError = () => {
            setIsLoading(false);
        };

        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('seeked', handleSeeked);
        video.addEventListener('error', handleError);

        return () => {
            video.removeEventListener('loadeddata', handleLoadedData);
            video.removeEventListener('seeked', handleSeeked);
            video.removeEventListener('error', handleError);
        };
    }, [src]);

    return (
        <>
            {/* Hidden video for extraction */}
            <video
                ref={videoRef}
                src={src}
                crossOrigin="anonymous"
                muted
                playsInline
                preload="metadata"
                style={{ display: 'none' }}
            />
            <canvas ref={canvasRef} style={{ display: 'none' }} />

            {/* Show thumbnail or placeholder */}
            {thumbnail ? (
                <img src={thumbnail} alt="Video preview" className={className} />
            ) : (
                <div className={styles.videoPlaceholder}>
                    {isLoading && <div className={styles.loadingSpinner} />}
                    <div className={styles.videoPlayIcon}>
                        <Play size={32} fill="currentColor" />
                    </div>
                </div>
            )}
        </>
    );
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
        const target = e.target as HTMLElement;
        if (target.closest('button')) return;
        touchStartX.current = e.touches[0].clientX;
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('button')) return;
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;
        const threshold = 80;
        if (Math.abs(diff) > threshold && touchStartX.current !== 0) {
            if (diff > 0) {
                onNext();
            } else {
                onPrev();
            }
        }
        touchStartX.current = 0;
        touchEndX.current = 0;
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
                onTouchEnd={(e) => { e.stopPropagation(); onClose(); }}
                type="button"
                aria-label="Закрыть"
                style={{ touchAction: 'manipulation' }}
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
                                        <VideoThumbnail
                                            src={item.video}
                                            className={styles.image}
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

            {/* Modal rendered via portal */}
            {mounted && activeIndex !== null && (
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
