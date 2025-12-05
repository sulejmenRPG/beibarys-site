'use client';

import { useState } from 'react';
import styles from './Reviews.module.css';

interface Review {
    id: string;
    name: string;
    date: string;
    rating: number;
    text: string;
}

interface ReviewsProps {
    reviews?: Review[];
}

const defaultReviews = [
    {
        id: '1',
        name: 'Алия М.',
        date: 'Ноябрь 2024',
        rating: 5,
        text: 'Провели корпоратив на 50 человек. Всё было на высшем уровне! Вкусная кухня, отличный сервис, дети в восторге от бассейна и активностей. Обязательно вернёмся!',
    },
    {
        id: '2',
        name: 'Ержан К.',
        date: 'Октябрь 2024',
        rating: 5,
        text: 'Снимали VIP-коттедж на выходные всей семьёй. Сауна, бассейн, мангал — всё что нужно для отдыха. Территория ухоженная, персонал очень приветливый.',
    },
    {
        id: '3',
        name: 'Динара С.',
        date: 'Сентябрь 2024',
        rating: 5,
        text: 'Отмечали свадьбу в банкетном зале. Красивое оформление, отличный звук, вкусное меню. Гости до сих пор вспоминают!',
    },
    {
        id: '4',
        name: 'Нурлан Б.',
        date: 'Август 2024',
        rating: 4,
        text: 'Взяли беседку на день рождения. Стрельба из лука и бампербол — это что-то! Рекомендую для активного отдыха с друзьями.',
    },
    {
        id: '5',
        name: 'Айгуль Т.',
        date: 'Июль 2024',
        rating: 5,
        text: 'Идеальное место для семейного отдыха. Дети купались в бассейне, мы отдыхали в беседке. Чисто, уютно, еда вкусная.',
    },
];

export default function Reviews({ reviews }: ReviewsProps) {
    const data = reviews || defaultReviews;
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleReviews = 3;

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + 1 >= data.length - visibleReviews + 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev - 1 < 0 ? data.length - visibleReviews : prev - 1
        );
    };

    return (
        <section id="reviews" className={`section ${styles.reviews}`}>
            <div className="container">
                <div className={styles.header}>
                    <div>
                        <span className="section-label">Отзывы</span>
                        <h2 className="section-title">Что говорят гости</h2>
                        <p className="section-subtitle">
                            Реальные отзывы наших посетителей
                        </p>
                    </div>
                    <div className={styles.controls}>
                        <button className={styles.controlBtn} onClick={prevSlide} aria-label="Назад">
                            ←
                        </button>
                        <button className={styles.controlBtn} onClick={nextSlide} aria-label="Вперёд">
                            →
                        </button>
                    </div>
                </div>

                <div className={styles.carousel}>
                    <div
                        className={styles.track}
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleReviews)}%)` }}
                    >
                        {data.map((review) => (
                            <div key={review.id} className={styles.card}>
                                <div className={styles.stars}>
                                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                </div>
                                <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
                                <div className={styles.author}>
                                    <div className={styles.avatar}>
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <span className={styles.name}>{review.name}</span>
                                        <span className={styles.date}>{review.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.dots}>
                    {data.slice(0, data.length - visibleReviews + 1).map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Отзыв ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
