import styles from './Rooms.module.css';
import { Users } from 'lucide-react';

interface Room {
    _id?: string;
    id?: string;
    name: string;
    description: string;
    capacity: string;
    price: string;
    features: string | string[];
    image?: string;
    badge: string;
}

interface RoomsProps {
    rooms?: Room[];
}

const defaultRooms: Room[] = [
    {
        id: '1',
        name: 'Номер Стандарт',
        description: 'Уютный номер для двоих с завтраком',
        capacity: '2 гостя',
        price: '38 000',
        features: 'Двуспальная кровать,Завтрак на 2 персоны,Wi-Fi,ТВ',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
        badge: '',
    },
    {
        id: '2',
        name: 'Номер Стандарт+',
        description: 'Просторный номер для семьи или компании с завтраком',
        capacity: '4 гостя',
        price: '48 000',
        features: 'Две спальни,Завтрак на 4 персоны,Wi-Fi,ТВ',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
        badge: 'popular',
    },
    {
        id: '3',
        name: 'Гостевой дом (дуплекс)',
        description: 'Отдельный дом с мангалом и завтраком на 4 персоны',
        capacity: '4 гостя',
        price: '105 000',
        features: '4 спальных места,Мангал,Завтрак,Отдельная территория',
        image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&h=600&fit=crop',
        badge: '',
    },
    {
        id: '4',
        name: 'Охотничий дом',
        description: 'Просторный дом премиум-класса с мангалом и караоке',
        capacity: '8 гостей',
        price: '180 000',
        features: '8 спальных мест,Мангал,Завтрак на 8 чел,Караоке (35 000 ₸)',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        badge: 'premium',
    },
];

export default function Rooms({ rooms }: RoomsProps) {
    const data = rooms || defaultRooms;

    return (
        <section id="rooms" className={`section ${styles.rooms}`}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Размещение</span>
                    <h2 className="section-title">Номера и домики</h2>
                    <p className="section-subtitle">
                        Выберите идеальный вариант для вашего отдыха
                    </p>
                </div>

                <div className={styles.grid}>
                    {data.map((room, index) => {
                        // Features can be string (from defaults) or array (from Sanity)
                        const features = Array.isArray(room.features)
                            ? room.features
                            : (typeof room.features === 'string' ? room.features.split(',').map(f => f.trim()) : []);
                        const isPremium = room.badge === 'premium';
                        const isPopular = room.badge === 'popular';
                        const imageUrl = room.image || 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop';

                        return (
                            <div
                                key={room._id || room.id || index}
                                className={`${styles.card} ${isPremium ? styles.premium : ''} ${isPopular ? styles.popular : ''}`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {isPopular && <span className={styles.badge}>Популярный</span>}
                                {isPremium && <span className={`${styles.badge} ${styles.badgePremium}`}>VIP</span>}

                                <div
                                    className={styles.image}
                                    style={{ backgroundImage: `url(${imageUrl})` }}
                                />

                                <div className={styles.content}>
                                    <h3 className={styles.name}>{room.name}</h3>
                                    <p className={styles.description}>{room.description}</p>

                                    <div className={styles.capacity}>
                                        <Users size={16} />
                                        <span>{room.capacity}</span>
                                    </div>

                                    <ul className={styles.features}>
                                        {features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>

                                    <div className={styles.footer}>
                                        <div className={styles.price}>
                                            <span className={styles.priceValue}>{room.price}</span>
                                            <span className={styles.priceCurrency}>₸</span>
                                            <span className={styles.priceLabel}>/ сутки</span>
                                        </div>
                                        <a href="/#booking" className={styles.bookBtn}>
                                            Забронировать
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Правила проживания */}
                <div className={styles.rules}>
                    <h3 className={styles.rulesTitle}>Правила проживания</h3>
                    <div className={styles.rulesGrid}>
                        <div className={styles.ruleItem}>
                            <strong>Заезд:</strong> 14:00
                        </div>
                        <div className={styles.ruleItem}>
                            <strong>Выезд:</strong> 12:00
                        </div>
                        <div className={styles.ruleItem}>
                            <strong>Ранний заезд (00:00–14:00):</strong> +50% от стоимости
                        </div>
                        <div className={styles.ruleItem}>
                            <strong>Поздний выезд (12:00–18:00):</strong> +50% от стоимости
                        </div>
                    </div>
                    <p className={styles.rulesNote}>
                        Проживание менее суток — оплата за полные сутки. В праздничные и выходные дни возможна наценка.
                        Вход со своими продуктами и напитками запрещён (кроме детского и медицинского питания).
                    </p>
                </div>
            </div>
        </section>
    );
}
