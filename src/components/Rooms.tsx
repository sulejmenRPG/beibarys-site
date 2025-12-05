import styles from './Rooms.module.css';
import { Users } from 'lucide-react';

interface Room {
    id: string;
    name: string;
    description: string;
    capacity: string;
    price: string;
    features: string;
    image: string;
    badge: string;
}

interface RoomsProps {
    rooms?: Room[];
}

const defaultRooms = [
    {
        id: '1',
        name: 'Номер Стандарт',
        description: 'Уютный номер с необходимыми удобствами для комфортного отдыха',
        capacity: '2 гостя',
        price: '15 000',
        features: 'Двуспальная кровать,Wi-Fi,ТВ,Мини-холодильник',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
        badge: '',
    },
    {
        id: '2',
        name: 'Номер Комфорт',
        description: 'Просторный номер с видом на территорию и расширенными удобствами',
        capacity: '2-3 гостя',
        price: '25 000',
        features: 'Кондиционер,Мини-кухня,Балкон,Сейф',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
        badge: 'popular',
    },
    {
        id: '3',
        name: 'Домик у озера',
        description: 'Отдельный домик с террасой и всеми удобствами для семейного отдыха',
        capacity: '4-6 гостей',
        price: '45 000',
        features: '2 спальни,Гостиная,Кухня,Терраса',
        image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&h=600&fit=crop',
        badge: '',
    },
    {
        id: '4',
        name: 'VIP Коттедж',
        description: 'Просторный коттедж премиум-класса с сауной и бассейном',
        capacity: '6-8 гостей',
        price: '85 000',
        features: '3 спальни,Сауна,Бассейн,Камин',
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
                        const features = room.features.split(',').map(f => f.trim());
                        const isPremium = room.badge === 'premium';
                        const isPopular = room.badge === 'popular';

                        return (
                            <div
                                key={room.id}
                                className={`${styles.card} ${isPremium ? styles.premium : ''} ${isPopular ? styles.popular : ''}`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {isPopular && <span className={styles.badge}>Популярный</span>}
                                {isPremium && <span className={`${styles.badge} ${styles.badgePremium}`}>VIP</span>}

                                <div
                                    className={styles.image}
                                    style={{ backgroundImage: `url(${room.image})` }}
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
                                        <a href="#booking" className={styles.bookBtn}>
                                            Забронировать
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
