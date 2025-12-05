import styles from './Services.module.css';
import {
    Target,
    CircleDot,
    Mountain,
    Crosshair,
    Swords,
    Mic2,
    Waves,
    Flame,
    LucideIcon,
    Bike,
    PartyPopper,
    TreePine,
    Tent,
    Gamepad2,
} from 'lucide-react';

// Маппинг названий иконок на компоненты
const iconMap: { [key: string]: LucideIcon } = {
    Target,
    CircleDot,
    Mountain,
    Crosshair,
    Swords,
    Mic2,
    Waves,
    Flame,
    Bike,
    PartyPopper,
    TreePine,
    Tent,
    Gamepad2,
};

interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}

interface ServicesProps {
    services?: Service[];
}

const defaultServices = [
    { id: '1', title: 'Стрельба из лука', description: 'Профессиональный тир для любителей активного отдыха', icon: 'Target' },
    { id: '2', title: 'Бампербол', description: 'Весёлые командные игры в надувных шарах', icon: 'CircleDot' },
    { id: '3', title: 'Скалолазный стенд', description: 'Покорите вершины на нашем безопасном стенде', icon: 'Mountain' },
    { id: '4', title: 'Стендовая стрельба', description: 'Стрельба по тарелкам для настоящих ценителей', icon: 'Crosshair' },
    { id: '5', title: 'Страйкбол', description: 'Полноценный полигон для тактических игр', icon: 'Swords' },
    { id: '6', title: 'Караоке', description: 'Современная караоке-система с тысячами песен', icon: 'Mic2' },
    { id: '7', title: 'Бассейн', description: 'Открытый бассейн с подогревом воды', icon: 'Waves' },
    { id: '8', title: 'Банный комплекс', description: 'Русская баня и сауна для релаксации', icon: 'Flame' },
];

export default function Services({ services }: ServicesProps) {
    const data = services || defaultServices;

    return (
        <section id="services" className={`section ${styles.services}`}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Развлечения</span>
                    <h2 className="section-title">Активный отдых</h2>
                    <p className="section-subtitle">
                        Уникальные развлечения и активности для всей семьи
                    </p>
                </div>

                <div className={styles.grid}>
                    {data.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || Target;
                        return (
                            <div
                                key={service.id}
                                className={styles.card}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={styles.iconWrapper}>
                                    <IconComponent className={styles.icon} size={32} />
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
