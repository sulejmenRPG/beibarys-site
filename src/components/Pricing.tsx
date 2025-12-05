import styles from './Pricing.module.css';

interface PricingItem {
    name: string;
    price: string;
    period: string;
}

interface PricingCategory {
    category: string;
    items: PricingItem[];
}

interface PricingProps {
    pricing?: PricingCategory[];
}

const defaultPricing = [
    {
        category: 'Беседки',
        items: [
            { name: 'Малая беседка (до 10 чел)', price: '15 000 ₸', period: '/ день' },
            { name: 'Средняя беседка (до 20 чел)', price: '25 000 ₸', period: '/ день' },
            { name: 'Большая беседка (до 30 чел)', price: '40 000 ₸', period: '/ день' },
        ]
    },
    {
        category: 'VIP залы',
        items: [
            { name: 'VIP зал "Шахристан"', price: '80 000 ₸', period: '/ день' },
            { name: 'VIP зал "Султан"', price: '100 000 ₸', period: '/ день' },
            { name: 'Банкетный зал (до 100 чел)', price: '150 000 ₸', period: '/ день' },
        ]
    },
    {
        category: 'Активности',
        items: [
            { name: 'Стрельба из лука (1 час)', price: '3 000 ₸', period: '/ чел' },
            { name: 'Бампербол (1 час)', price: '5 000 ₸', period: '/ чел' },
            { name: 'Скалолазный стенд (1 час)', price: '4 000 ₸', period: '/ чел' },
            { name: 'Стендовая стрельба (25 выстрелов)', price: '10 000 ₸', period: '' },
            { name: 'Страйкбол (2 часа)', price: '8 000 ₸', period: '/ чел' },
            { name: 'Караоке (1 час)', price: '5 000 ₸', period: '' },
        ]
    },
    {
        category: 'Бассейн',
        items: [
            { name: 'Взрослый', price: '3 000 ₸', period: '/ чел' },
            { name: 'Детский (до 12 лет)', price: '1 500 ₸', period: '/ чел' },
            { name: 'VIP-зона у бассейна', price: '20 000 ₸', period: '/ день' },
        ]
    },
];

export default function Pricing({ pricing }: PricingProps) {
    const data = pricing || defaultPricing;

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

                <div className={styles.grid}>
                    {data.map((category, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.categoryTitle}>{category.category}</h3>
                            <ul className={styles.list}>
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className={styles.item}>
                                        <span className={styles.itemName}>{item.name}</span>
                                        <span className={styles.itemPrice}>
                                            {item.price}
                                            <span className={styles.itemPeriod}>{item.period}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className={styles.note}>
                    <p>* Цены актуальны на сезон 2024-2025. В праздничные дни возможна наценка.</p>
                    <a href="#booking" className="btn btn-primary">
                        Получить точный расчёт
                    </a>
                </div>
            </div>
        </section>
    );
}
