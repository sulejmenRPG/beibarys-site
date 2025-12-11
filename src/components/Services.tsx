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
    Leaf,
    Dog,
    Cable,
    CircleDot,
    Presentation,
} from 'lucide-react';

// Маппинг названий иконок на компоненты
const iconMap: { [key: string]: LucideIcon } = {
    Target,
    Mountain,
    Crosshair,
    Swords,
    Mic2,
    Waves,
    Flame,
    Home,
    UtensilsCrossed,
    Users,
    Monitor,
    Gamepad2,
    Zap,
    Snowflake,
    Sun,
    Leaf,
    Dog,
    Cable,
    CircleDot,
    Presentation,
};

// Главные услуги
const mainServices = [
    { id: '1', title: '22 гостиничных номера', description: 'Комфортные номера для вашего отдыха', icon: 'Home' },
    { id: '2', title: '6 гостевых домов', description: 'Уютные дома для семейного отдыха', icon: 'Home' },
    { id: '3', title: 'Большой охотничий дом', description: 'Для компаний до 20 человек', icon: 'Home' },
    { id: '4', title: 'Ресторан на 140 мест', description: 'С детской комнатой', icon: 'UtensilsCrossed' },
    { id: '5', title: 'Банкетный зал на 350 человек', description: 'Для торжеств и мероприятий', icon: 'Users' },
    { id: '6', title: 'Караоке', description: 'Современная караоке-система', icon: 'Mic2' },
    { id: '7', title: 'Крытый бассейн', description: 'С подогревом воды', icon: 'Waves' },
    { id: '8', title: 'Русская баня', description: 'Традиционная парная', icon: 'Flame' },
    { id: '9', title: 'Беседки', description: 'Крытые и открытые', icon: 'Home' },
    { id: '10', title: 'Конференц-зал', description: 'Для деловых встреч', icon: 'Presentation' },
];

// Активности круглый год
const activities = [
    { id: 'a1', title: 'Интерактивный тир', description: 'Современная стрелковая система', icon: 'Target' },
    { id: 'a2', title: 'Пейнтбольный тир', description: 'Для любителей стрельбы', icon: 'Crosshair' },
    { id: 'a3', title: 'Виртуальная реальность', description: 'VR-игры и аттракционы', icon: 'Monitor' },
    { id: 'a4', title: 'Sony PlayStation', description: 'Консольные игры', icon: 'Gamepad2' },
    { id: 'a5', title: 'Пейнтбол', description: 'Полноценный полигон', icon: 'Target' },
    { id: 'a6', title: 'Страйкбол', description: 'Тактические игры', icon: 'Swords' },
    { id: 'a7', title: 'Лазертаг', description: 'Безопасные лазерные бои', icon: 'Zap' },
    { id: 'a8', title: 'Настольный теннис', description: 'Для активного отдыха', icon: 'CircleDot' },
];

// Зимние развлечения
const winterActivities = [
    { id: 'w1', title: 'Ватрушки и горка', description: 'Катание для всей семьи', icon: 'Snowflake' },
    { id: 'w2', title: 'Коньки и каток', description: 'Ледовые развлечения', icon: 'Snowflake' },
    { id: 'w3', title: 'Катание на маламутах', description: 'Незабываемые впечатления', icon: 'Dog' },
];

// Весна-осень
const springFallActivities = [
    { id: 'sf1', title: 'Верёвочный парк', description: 'Приключения на высоте', icon: 'Cable' },
    { id: 'sf2', title: 'Скалодром', description: 'Покорите вершины', icon: 'Mountain' },
    { id: 'sf3', title: 'Тарзанка', description: 'Адреналин и эмоции', icon: 'Zap' },
];

// Летние развлечения
const summerActivities = [
    { id: 's1', title: 'Открытый бассейн', description: 'С подогревом воды', icon: 'Sun' },
    { id: 's2', title: 'Шезлонги и зона отдыха', description: 'У воды', icon: 'Sun' },
    { id: 's3', title: 'Барбекю на природе', description: 'В беседках', icon: 'Flame' },
];

export default function Services() {
    return (
        <section id="services" className={`section ${styles.services}`}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Комплекс площадью 1700 кв.м.</span>
                    <h2 className="section-title">Наши услуги</h2>
                    <p className="section-subtitle">
                        Гостинично-ресторанный комплекс для любого формата отдыха
                    </p>
                </div>

                {/* Главные услуги */}
                <div className={styles.grid}>
                    {mainServices.map((service, index) => {
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

                {/* Активности круглый год */}
                <div className={styles.categoryHeader}>
                    <Target size={24} className={styles.categoryIcon} />
                    <h3 className={styles.categoryTitle}>Активности круглый год</h3>
                </div>
                <div className={styles.grid}>
                    {activities.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || Target;
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

                {/* Сезонные услуги */}
                <div className={styles.seasonalWrapper}>
                    {/* Зима */}
                    <div className={styles.seasonalBlock}>
                        <div className={styles.seasonHeader}>
                            <Snowflake size={24} className={styles.seasonIcon} />
                            <h4>Зимой</h4>
                        </div>
                        <div className={styles.seasonGrid}>
                            {winterActivities.map((item) => {
                                const IconComponent = iconMap[item.icon] || Snowflake;
                                return (
                                    <div key={item.id} className={styles.seasonCard}>
                                        <IconComponent size={20} />
                                        <span>{item.title}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Весна-осень */}
                    <div className={styles.seasonalBlock}>
                        <div className={styles.seasonHeader}>
                            <Leaf size={24} className={styles.seasonIcon} />
                            <h4>Весна — Осень</h4>
                        </div>
                        <div className={styles.seasonGrid}>
                            {springFallActivities.map((item) => {
                                const IconComponent = iconMap[item.icon] || Leaf;
                                return (
                                    <div key={item.id} className={styles.seasonCard}>
                                        <IconComponent size={20} />
                                        <span>{item.title}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Лето */}
                    <div className={styles.seasonalBlock}>
                        <div className={styles.seasonHeader}>
                            <Sun size={24} className={styles.seasonIcon} />
                            <h4>Летом</h4>
                        </div>
                        <div className={styles.seasonGrid}>
                            {summerActivities.map((item) => {
                                const IconComponent = iconMap[item.icon] || Sun;
                                return (
                                    <div key={item.id} className={styles.seasonCard}>
                                        <IconComponent size={20} />
                                        <span>{item.title}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
