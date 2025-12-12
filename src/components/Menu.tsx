'use client';

import { useState } from 'react';
import styles from './Menu.module.css';

interface MenuItem {
    name: string;
    price: string;
}

interface MenuCategory {
    name: string;
    items: MenuItem[];
}

// Основное меню
const foodMenu: MenuCategory[] = [
    {
        name: 'Завтраки',
        items: [
            { name: 'Завтрак «Beibarys»', price: '3 400' },
            { name: 'Яичница с ветчиной и сыром', price: '3 200' },
            { name: 'Блинчики домашние', price: '1 700' },
            { name: 'Каша рисовая/овсяная', price: '1 500' },
        ]
    },
    {
        name: 'Горячие блюда',
        items: [
            { name: 'Лосось на Шабе', price: '7 000' },
            { name: 'Бараньи котлеты + картофель', price: '5 200' },
            { name: 'Ассорти на мангале', price: '9 200' },
            { name: 'Стейк из мраморной говядины', price: '6 400' },
        ]
    },
    {
        name: 'Салаты',
        items: [
            { name: 'Салат «Beibarys»', price: '4 900' },
            { name: 'Мимо-салат с крабом', price: '5 500' },
            { name: 'Оливье уйгурский', price: '4 200' },
            { name: 'Цезарь с курицей', price: '3 900' },
        ]
    },
    {
        name: 'Супы',
        items: [
            { name: 'Шурпа', price: '4 700' },
            { name: 'Сорпа из баранины', price: '3 100' },
            { name: 'Солянка', price: '3 200' },
            { name: 'Лагман', price: '2 600' },
        ]
    },
    {
        name: 'Мангал',
        items: [
            { name: 'Шашлык из баранины', price: '4 900' },
            { name: 'Шашлык из говядины', price: '5 100' },
            { name: 'Шашлык куриный', price: '4 500' },
            { name: 'Кебаб', price: '3 200' },
        ]
    },
    {
        name: 'Восточная кухня',
        items: [
            { name: 'Казан-кебаб', price: '4 200' },
            { name: 'Тальтики', price: '3 000' },
            { name: 'Лагман на домашней лапше', price: '3 500' },
            { name: 'Димлама', price: '5 000' },
        ]
    },
];

// Барное меню
const barMenu: MenuCategory[] = [
    {
        name: 'Напитки',
        items: [
            { name: 'Домашний лимонад', price: '3 000' },
            { name: 'Coca-Cola 0.33л', price: '800' },
            { name: 'Сок Gracio 0.2л', price: '700' },
            { name: 'Вода Turan 0.5л', price: '800' },
        ]
    },
    {
        name: 'Кофе',
        items: [
            { name: 'Эспрессо', price: '1 300' },
            { name: 'Американо', price: '1 500' },
            { name: 'Латте', price: '1 800' },
            { name: 'Капучино', price: '1 600' },
        ]
    },
    {
        name: 'Чай',
        items: [
            { name: 'Сенча', price: '2 250' },
            { name: 'Ташкентский чай', price: '2 250' },
            { name: 'Ягодный закат', price: '2 250' },
        ]
    },
    {
        name: 'Алкоголь',
        items: [
            { name: 'Водка (50г)', price: 'от 1 300' },
            { name: 'Виски (50г)', price: 'от 2 500' },
            { name: 'Коньяк (50г)', price: 'от 4 600' },
            { name: 'Пиво 0.5л', price: 'от 2 400' },
        ]
    },
];

type MenuTab = 'food' | 'bar';

export default function Menu() {
    const [activeTab, setActiveTab] = useState<MenuTab>('food');
    const data = activeTab === 'food' ? foodMenu : barMenu;

    return (
        <section id="menu" className={`section ${styles.menu}`}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Ресторан</span>
                    <h2 className="section-title">Наше меню</h2>
                    <p className="section-subtitle">
                        Блюда казахской и европейской кухни
                    </p>
                </div>

                {/* Tabs */}
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${activeTab === 'food' ? styles.active : ''}`}
                        onClick={() => setActiveTab('food')}
                    >
                        Основное меню
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'bar' ? styles.active : ''}`}
                        onClick={() => setActiveTab('bar')}
                    >
                        Бар
                    </button>
                </div>

                <div className={styles.grid}>
                    {data.map((category, index) => (
                        <div key={index} className={styles.category}>
                            <h3 className={styles.categoryTitle}>{category.name}</h3>
                            <div className={styles.items}>
                                {category.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className={styles.item}>
                                        <span className={styles.itemName}>{item.name}</span>
                                        <span className={styles.itemPrice}>{item.price} ₸</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.note}>
                    <p>Также в меню: пицца, паста, бургеры, гарниры, детское меню, блюда на компанию. Для банкетов — меню по индивидуальному заказу.</p>
                </div>
            </div>
        </section>
    );
}
