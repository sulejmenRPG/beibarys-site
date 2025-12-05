'use client';

import { useRef } from 'react';
import styles from './Gallery.module.css';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface GalleryProps {
    id: string;
    title: string;
    subtitle: string;
    label: string;
    items: {
        title: string;
        image: string;
    }[];
}

export default function Gallery({ id, title, subtitle, label, items }: GalleryProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
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
                        >
                            <div className={styles.imageWrapper}>
                                <div
                                    className={styles.image}
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                            </div>
                            <div className={styles.playBtn}>
                                <Play size={24} fill="currentColor" />
                            </div>
                            <div className={styles.overlay}>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
