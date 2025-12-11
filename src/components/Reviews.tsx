'use client';

import { useState } from 'react';
import styles from './Reviews.module.css';
import { ExternalLink } from 'lucide-react';

interface Review {
    id: string;
    name: string;
    rating: number;
    text: string;
}

const reviews: Review[] = [
    {
        id: '1',
        name: 'Дастан Кузербаев',
        rating: 5,
        text: 'Отдыхали с семьей, все понравилось, вежливый персонал, в номерах чисто и уютно, бассейн большой и теплый. Придем еще.',
    },
    {
        id: '2',
        name: 'Мереке Касенов',
        rating: 5,
        text: 'Приехали отдохнуть в это прекрасное место. Персонал очень внимательный! В комнатах тепло, уютно, территория обустроенная, бассейн и бани так и манят. Все на высшем уровне! И такая тишина природа, хотя город рядом. Готовят очень вкусно, сытно, разнообразие блюд.',
    },
    {
        id: '3',
        name: 'Руслан Шамкенов',
        rating: 5,
        text: 'Турнир "Жирный Гусь" успешно состоялся! Хочу выразить огромную благодарность всем, кто принял участие, поддержал, приехал и сделал этот день по-настоящему ярким! Ваш азарт, спортивный дух и хорошее настроение создали неповторимую атмосферу праздника!',
    },
    {
        id: '4',
        name: 'Асылбек Даулетжанов',
        rating: 5,
        text: 'Сегодня заехали с семьей на денек, посетили крытый бассейн, сауну и хаммам. Все классно, хороший сервис. А завершили день в ресторане, кухня очень вкусная, атмосфера уютная, персонал вежливый и доброжелательный! Очень понравилось все, приедем еще много раз!',
    },
    {
        id: '5',
        name: 'Зауре Тулепбергенова',
        rating: 5,
        text: 'Спасибо большое, всё супер. Отличная кухня, обслуживание на высоте! Рекомендую.',
    },
    {
        id: '6',
        name: 'Бауржан Мусин',
        rating: 5,
        text: 'Сегодня принимал участие в соревновании по стендовой стрельбе. Организация на высшем уровне, атмосфера всего комплекса супер. Кухня вкусная. Одним словом всем советую!',
    },
    {
        id: '7',
        name: 'Асемгуль Жанбуршина',
        rating: 5,
        text: 'Кухня приятно удивила, шеф повар Маруф очень профессиональный. Салат сельдь под шубой был чудесный. Новинка — блюдо с курицей, рататуй под сырной корочкой интересное и сытное блюдо. Официанты и обслуживание также на отличном уровне. Большое спасибо руководству и коллективу Бейбарыс.',
    },
];

export default function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleReviews = 3;

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + 1 >= reviews.length - visibleReviews + 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev - 1 < 0 ? reviews.length - visibleReviews : prev - 1
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
                            Рейтинг 4.7 на основе 1000+ отзывов в 2ГИС
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
                        {reviews.map((review) => (
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
                                        <span className={styles.date}>2ГИС</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.dots}>
                    {reviews.slice(0, reviews.length - visibleReviews + 1).map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Отзыв ${index + 1}`}
                        />
                    ))}
                </div>

                <div className={styles.moreLink}>
                    <a
                        href="https://2gis.kz/nur_sultan/firm/70000001032462175?m=71.766869%2C51.086376%2F16"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.gisLink}
                    >
                        <span>Все отзывы на 2ГИС</span>
                        <ExternalLink size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}
