import styles from './Menu.module.css';

interface MenuItem {
    name: string;
    description: string;
    price: string;
}

interface MenuCategory {
    name: string;
    items: MenuItem[];
}

interface MenuProps {
    menu?: MenuCategory[];
}

const defaultMenu = [
    {
        name: 'Закуски',
        items: [
            { name: 'Ассорти мясное', description: 'Казы, шужук, жая', price: '4 500 ₸' },
            { name: 'Овощная тарелка', description: 'Свежие овощи с зеленью', price: '2 500 ₸' },
            { name: 'Сырная тарелка', description: 'Ассорти европейских сыров', price: '4 000 ₸' },
        ]
    },
    {
        name: 'Горячее',
        items: [
            { name: 'Бешбармак', description: 'Традиционное казахское блюдо', price: '5 500 ₸' },
            { name: 'Шашлык из баранины', description: 'Порция 200г', price: '3 500 ₸' },
            { name: 'Плов по-узбекски', description: 'С бараниной', price: '3 000 ₸' },
            { name: 'Куырдак', description: 'Из телятины', price: '4 000 ₸' },
            { name: 'Стейк рибай', description: '300г, медиум', price: '8 500 ₸' },
        ]
    },
    {
        name: 'Супы',
        items: [
            { name: 'Сорпа', description: 'Бульон с мясом', price: '2 000 ₸' },
            { name: 'Лагман', description: 'Домашняя лапша', price: '2 500 ₸' },
            { name: 'Шурпа', description: 'С бараниной', price: '2 500 ₸' },
        ]
    },
    {
        name: 'Напитки',
        items: [
            { name: 'Кумыс', description: '0.5л', price: '800 ₸' },
            { name: 'Шубат', description: '0.5л', price: '700 ₸' },
            { name: 'Чай казахский', description: 'Чайник', price: '500 ₸' },
            { name: 'Компот домашний', description: '1л', price: '600 ₸' },
        ]
    },
];

export default function Menu({ menu }: MenuProps) {
    const data = menu || defaultMenu;

    return (
        <section id="menu" className={`section ${styles.menu}`}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Ресторан</span>
                    <h2 className="section-title">Наше меню</h2>
                    <p className="section-subtitle">
                        Блюда казахской и европейской кухни из свежих продуктов
                    </p>
                </div>

                <div className={styles.grid}>
                    {data.map((category, index) => (
                        <div key={index} className={styles.category}>
                            <h3 className={styles.categoryTitle}>{category.name}</h3>
                            <div className={styles.items}>
                                {category.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className={styles.item}>
                                        <div className={styles.itemInfo}>
                                            <span className={styles.itemName}>{item.name}</span>
                                            <span className={styles.itemDesc}>{item.description}</span>
                                        </div>
                                        <span className={styles.itemPrice}>{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.note}>
                    <p>📋 Полное меню доступно в ресторане. Возможно приготовление для банкетов по индивидуальному заказу.</p>
                </div>
            </div>
        </section>
    );
}
