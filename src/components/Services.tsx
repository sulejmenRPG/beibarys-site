'use client';

import { useState } from 'react';
import styles from './Services.module.css';
import {
    Target,
    Mountain,
    Crosshair,
    Swords,
    Mic2,
    Waves,
    Flame,
    LucideIcon,
    Home,
    UtensilsCrossed,
    Users,
    Monitor,
    Gamepad2,
    Zap,
    Snowflake,
    Sun,
    Dog,
    Cable,
    CircleDot,
    Presentation,
    Leaf,
} from 'lucide-react';

// Icon mapping
const iconMap: { [key: string]: LucideIcon } = {
    Target, Mountain, Crosshair, Swords, Mic2, Waves, Flame, Home,
    UtensilsCrossed, Users, Monitor, Gamepad2, Zap, Snowflake, Sun,
    Leaf, Dog, Cable, CircleDot, Presentation,
};

interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: string;
}

// Категории услуг
const categories = {
    main: {
        label: 'Размещение и залы',
        items: [
            { id: '1', title: '22 гостиничных номера', description: 'Комфортные номера', icon: 'Home' },
            { id: '2', title: '6 гостевых домов', description: 'Для семейного отдыха', icon: 'Home' },
            { id: '3', title: 'Охотничий дом', description: 'До 20 человек', icon: 'Home' },
            { id: '4', title: 'Ресторан на 140 мест', description: 'С детской комнатой', icon: 'UtensilsCrossed' },
            { id: '5', title: 'Банкетный зал', description: 'До 350 человек', icon: 'Users' },
            { id: '6', title: 'Конференц-зал', description: 'Для деловых встреч', icon: 'Presentation' },
        ],
    },
    relax: {
        label: 'Отдых',
        items: [
            { id: 'r1', title: 'Крытый бассейн', description: 'С подогревом воды', icon: 'Waves' },
            { id: 'r2', title: 'Русская баня', description: 'Традиционная парная', icon: 'Flame' },
            { id: 'r3', title: 'Караоке', description: 'Современная система', icon: 'Mic2' },
            { id: 'r4', title: 'Беседки', description: 'Крытые и открытые', icon: 'Home' },
        ],
    },
    activities: {
        label: 'Активности',
        items: [
            { id: 'a1', title: 'Интерактивный тир', description: 'Стрелковая система', icon: 'Target' },
            { id: 'a2', title: 'Пейнтбол / Страйкбол', description: 'Полигон', icon: 'Crosshair' },
            { id: 'a3', title: 'Лазертаг', description: 'Лазерные бои', icon: 'Zap' },
            { id: 'a4', title: 'PlayStation / VR', description: 'Игровая зона', icon: 'Gamepad2' },
            { id: 'a5', title: 'Настольный теннис', description: 'Активный отдых', icon: 'CircleDot' },
            { id: 'a6', title: 'Верёвочный парк', description: 'Приключения на высоте', icon: 'Cable' },
            { id: 'a7', title: 'Скалодром', description: 'Покорите вершины', icon: 'Mountain' },
            { id: 'a8', title: 'Тарзанка', description: 'Адреналин', icon: 'Zap' },
        ],
    },
    seasonal: {
        label: 'Сезонные',
        items: [
            { id: 's1', title: 'Открытый бассейн', description: 'Летом', icon: 'Sun' },
            { id: 's2', title: 'Барбекю на природе', description: 'В беседках', icon: 'Flame' },
            { id: 's3', title: 'Ватрушки и горка', description: 'Зимой', icon: 'Snowflake' },
            { id: 's4', title: 'Каток', description: 'Зимой', icon: 'Snowflake' },
            { id: 's5', title: 'Катание на маламутах', description: 'Зимой', icon: 'Dog' },
        ],
    },
};

type CategoryKey = keyof typeof categories;

export default function Services() {
    const [activeTab, setActiveTab] = useState<CategoryKey>('main');
    const currentCategory = categories[activeTab];

    return (
        <section id="services" className={`section ${styles.services}`}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Комплекс 1700 м²</span>
                    <h2 className="section-title">Наши услуги</h2>
                    <p className="section-subtitle">
                        Гостинично-ресторанный комплекс для любого формата отдыха
                    </p>
                </div>

                {/* Tabs */}
                <div className={styles.tabs}>
                    {(Object.keys(categories) as CategoryKey[]).map((key) => (
                        <button
                            key={key}
                            className={`${styles.tab} ${activeTab === key ? styles.active : ''}`}
                            onClick={() => setActiveTab(key)}
                        >
                            {categories[key].label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className={styles.grid}>
                    {currentCategory.items.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || Home;
                        return (
                            <div
                                key={service.id}
                                className={styles.card}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className={styles.iconWrapper}>
                                    <IconComponent className={styles.icon} size={28} />
                                </div>
                                <h3 className={styles.title}>{service.title}</h3>
                                <p className={styles.description}>{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
