'use client';

import { useState } from 'react';
import styles from './Pricing.module.css';

type DayType = 'weekday' | 'weekend';

interface PricingItem {
    name: string;
    weekdayPrice: string;
    weekendPrice?: string;
    period?: string;
    note?: string;
}

interface PricingCategory {
    category: string;
    items: PricingItem[];
}

const pricingData: PricingCategory[] = [
    {
        category: 'Беседки',
        items: [
            { name: 'Беседки крытые (до 15 чел)', weekdayPrice: '50 000', weekendPrice: '60 000', period: '/ день', note: 'мангал' },
            { name: 'Беседки открытые', weekdayPrice: '20 000', weekendPrice: '30 000', period: '/ день', note: 'мангал' },
        ]
    },
    {
        category: 'Залы',
        items: [
            { name: 'VIP-зал (до 12 гостей)', weekdayPrice: '120 000', period: 'депозит' },
            { name: 'VIP-зал (до 30 гостей)', weekdayPrice: '600 000', period: 'депозит' },
            { name: 'Караоке (до 15 чел)', weekdayPrice: '9 000', weekendPrice: '12 000', period: '/ час' },
            { name: 'Банкетный зал (350 чел)', weekdayPrice: '500 000', period: 'аренда' },
            { name: 'Конференц-зал (30 чел)', weekdayPrice: '150 000', period: '/ день' },
        ]
    },
    {
        category: 'Бассейн и баня',
        items: [
            { name: 'Бассейн + сауна + хамам', weekdayPrice: '8 000', period: '/ 3 часа', note: 'взрослый' },
            { name: 'Бассейн детский', weekdayPrice: '5 000', period: '/ 3 часа', note: 'до 12 лет' },
            { name: 'Баня на дровах (до 6 чел)', weekdayPrice: '10 000', weekendPrice: '12 000', period: '/ час' },
        ]
    },
    {
        category: 'Активности',
        items: [
            { name: 'Футбольное поле', weekdayPrice: '10 000', period: '/ час' },
            { name: 'PlayStation', weekdayPrice: '5 000', period: '/ час' },
            { name: 'Пейнтбол (от 6 чел)', weekdayPrice: '6 000', period: '/ 100 патр.' },
            { name: 'Стрельба из лука', weekdayPrice: '2 000', period: '/ 10 выстр.' },
            { name: 'Верёвочный парк', weekdayPrice: '2 000', period: '1 уровень' },
            { name: 'Скалодром', weekdayPrice: '3 000', period: '/ 3 подъема' },
        ]
    },
];

export default function Pricing() {
    const [dayType, setDayType] = useState<DayType>('weekday');

    const getPrice = (item: PricingItem) => {
        if (dayType === 'weekend' && item.weekendPrice) {
            return item.weekendPrice;
        }
        return item.weekdayPrice;
    };

    return (
        <section id="pricing" className={`section ${styles.pricing}`}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Прайс-лист</span>
                    <h2 className="section-title">Наши цены</h2>
                    <p className="section-subtitle">
                        Прозрачные цены без скрытых платежей
                    </p>
                </div>

                {/* Day Type Toggle */}
                <div className={styles.toggle}>
                    <button
                        className={`${styles.toggleBtn} ${dayType === 'weekday' ? styles.active : ''}`}
                        onClick={() => setDayType('weekday')}
                    >
                        Будние дни
                    </button>
                    <button
                        className={`${styles.toggleBtn} ${dayType === 'weekend' ? styles.active : ''}`}
                        onClick={() => setDayType('weekend')}
                    >
                        Выходные
                    </button>
                </div>

                <div className={styles.grid}>
                    {pricingData.map((category, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.categoryTitle}>{category.category}</h3>
                            <ul className={styles.list}>
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className={styles.item}>
                                        <div className={styles.itemInfo}>
                                            <span className={styles.itemName}>{item.name}</span>
                                            {item.note && (
                                                <span className={styles.itemNote}>{item.note}</span>
                                            )}
                                        </div>
                                        <span className={styles.itemPrice}>
                                            {getPrice(item)} ₸
                                            {item.period && (
                                                <span className={styles.itemPeriod}> {item.period}</span>
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className={styles.note}>
                    <p>* Заезд 14:00, выезд 12:00. В праздничные дни возможна наценка.</p>
                    <a href="#contacts" className="btn btn-primary">
                        Забронировать
                    </a>
                </div>
            </div>
        </section>
    );
}
