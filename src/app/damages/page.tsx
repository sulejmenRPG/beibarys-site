import styles from './damages.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Прейскурант на порчу имущества | BEIBARYS',
    description: 'Приложение №1 к договору-оферте - прейскурант цен на порчу имущества базы отдыха BEIBARYS',
};

interface DamageItem {
    name: string;
    category: string;
    replacement: string;
    repair: string;
}

const textileItems: DamageItem[] = [
    { name: 'Полотенце серия "Hotel" 70-140см', category: 'Утеря, невосполнимый ущерб/порча', replacement: '6 000', repair: '2 600' },
    { name: 'Полотенце серия "Hotel" 50-100см', category: 'Утеря, невосполнимый ущерб/порча', replacement: '3 500', repair: '2 000' },
    { name: 'Полотенце для ног серия "HotelPro" 70-50см', category: 'Утеря, невосполнимый ущерб/порча', replacement: '3 500', repair: '2 600' },
    { name: 'Халат махровый белый серия "HotelPro" (размер 48-54)', category: 'Утеря, невосполнимый ущерб/порча', replacement: '15 600', repair: '3 900' },
    { name: 'Хаммамник 110-140', category: 'Утеря, невосполнимый ущерб/порча', replacement: '5 200', repair: '2 600' },
    { name: 'ПБ Страйп - простынь 1.5сп белое', category: 'Невосполнимый ущерб/порча', replacement: '7 800', repair: '2 600' },
    { name: 'Халат вафельный, 40-58', category: 'Невосполнимый ущерб/порча', replacement: '9 100', repair: '3 900' },
    { name: 'ПБ Страйп - простынь 2.0сп белое', category: 'Невосполнимый ущерб/порча', replacement: '7 800', repair: '2 600' },
    { name: 'ПБ Страйп - пододеяльник 1.5 сп белое', category: 'Утеря, невосполнимый ущерб/порча', replacement: '6 500', repair: '2 600' },
    { name: 'ПБ Страйп - пододеяльник 2сп белое', category: 'Утеря, невосполнимый ущерб/порча', replacement: '7 800', repair: '2 600' },
    { name: 'ПБ Страйп - наволочка 1.5 сп белое', category: 'Утеря, невосполнимый ущерб/порча', replacement: '5 200', repair: '2 600' },
    { name: 'ПБ Страйп - наволочка 2сп белое', category: 'Невосполнимый ущерб/порча', replacement: '7 800', repair: '2 600' },
    { name: 'Наматрасник 160*200 бамбук/микрофибра белый', category: 'Невосполнимый ущерб/порча', replacement: '10 400', repair: '5 200' },
    { name: 'Наматрасник 90*200 бамбук/микрофибра белый', category: 'Невосполнимый ущерб/порча', replacement: '7 800', repair: '5 200' },
    { name: 'Покрывало на кровать', category: 'Невосполнимый ущерб/порча', replacement: '7 800', repair: '5 200' },
    { name: 'Топпер 180-200', category: 'Невосполнимый ущерб/порча', replacement: '32 500', repair: '13 000' },
    { name: 'Одеяло «Стандарт» 1.5 сп', category: 'Невосполнимый ущерб/порча', replacement: '10 500', repair: '5 200' },
    { name: 'Одеяло «Стандарт» Евро', category: 'Невосполнимый ущерб/порча', replacement: '14 500', repair: '5 200' },
    { name: 'Шторы, тюль', category: 'Невосполнимый ущерб/порча', replacement: '97 500', repair: '19 500' },
    { name: 'Подушка «Люкс»', category: 'Невосполнимый ущерб/порча', replacement: '7 800', repair: '5 200' },
];

const furnitureItems: DamageItem[] = [
    { name: 'Кровать 920*2050*90', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '67 600', repair: '32 500' },
    { name: 'Кровать 1620*2050*90', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '130 000', repair: '45 500' },
    { name: 'Тумба прикроватная', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '19 500', repair: '11 700' },
    { name: 'Тумба под телевизор в дуплексе', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '52 000', repair: '19 500' },
    { name: 'Стол под ТВ с тумбой', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '104 000', repair: '39 000' },
    { name: 'Шкаф для белья с отсеком под багаж 900*500*2100', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '110 500', repair: '39 000' },
    { name: 'Шкаф универсальный 900*500*2100', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '110 500', repair: '39 000' },
    { name: 'Пуф', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '26 000', repair: '15 600' },
    { name: 'Кухонный гарнитур 1800*600*2170 дуплекс', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '390 000', repair: '65 000' },
    { name: 'Комплект диван Стандарт +', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '150 000', repair: '40 000' },
    { name: 'Диван Дуплекс', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '351 000', repair: '104 000' },
    { name: 'Туалетный столик с ящиками', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '32 500', repair: '13 000' },
    { name: 'Стол обеденный круглый 1200*1200*750', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '78 000', repair: '39 000' },
    { name: 'Стол журнальный 900*600*460', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '58 500', repair: '32 500' },
    { name: 'Стул пластиковый «Квитри»', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '11 700', repair: '6 500' },
    { name: 'Диван терраса', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '39 000', repair: '13 000' },
    { name: 'Стол стеклянный терраса', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '26 000', repair: '13 000' },
    { name: 'Терраса перегородка деревянная', category: 'Ремонт', replacement: '39 000', repair: '13 000' },
    { name: 'Изгородь деревянная в дуплексе', category: 'Ремонт', replacement: '10 400', repair: '3 500' },
    { name: 'Матрац классик 900*2000', category: 'Невосполнимый ущерб/порча', replacement: '32 500', repair: '13 000' },
    { name: 'Матрац классик 1600*2000', category: 'Невосполнимый ущерб/порча', replacement: '58 500', repair: '18 200' },
];

const applianceItems: DamageItem[] = [
    { name: 'TB LED LG 43 LJ510V', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '221 000', repair: '104 000' },
    { name: 'TB LED Samsung UE 49 M 5000', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '260 000', repair: '130 000' },
    { name: 'Пульт', category: 'Утеря, невосполнимый ущерб', replacement: '6 500', repair: '3 300' },
    { name: 'Минибар', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '93 600', repair: '32 500' },
    { name: 'Торшер Hotel 14751', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '67 600', repair: '19 500' },
    { name: 'Микроволновая печь', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '58 500', repair: '19 500' },
    { name: 'Чайник электрический', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '20 800', repair: '9 100' },
    { name: 'Самовар', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '52 000', repair: '19 500' },
    { name: 'Настольная лампа Hotel 13751', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '23 400', repair: '9 100' },
    { name: 'Люстра Hotel 1*60Вт E27', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '45 500', repair: '18 200' },
    { name: 'Телефон стандартный', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '9 100', repair: '4 600' },
    { name: 'Телефон дуплекс', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '32 500', repair: '15 600' },
    { name: 'Сейф', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '24 000', repair: '10 000' },
    { name: 'Модем дуплекс', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '26 000', repair: '13 000' },
    { name: 'Водонагреватель Royal', category: 'Невосполнимый ущерб/ремонт', replacement: '156 000', repair: '65 000' },
    { name: 'Холодильник в Охотничьем домике', category: 'Невосполнимый ущерб/ремонт', replacement: '260 000', repair: '104 000' },
    { name: 'Профессиональная караоке система Evolution Lite 2 Premium', category: 'Невосполнимый ущерб/ремонт', replacement: '1 655 000', repair: '390 000' },
    { name: 'Профессиональная караоке система Evolution Lite 2 Premium +', category: 'Невосполнимый ущерб/ремонт', replacement: '1 300 000', repair: '390 000' },
    { name: 'Пульт от караоке системы Evolution Lite 2 Premium', category: 'Невосполнимый ущерб/ремонт', replacement: '65 000', repair: '32 500' },
    { name: 'Микшерный пульт PM 502 Dynacord', category: 'Невосполнимый ущерб/ремонт', replacement: '559 000', repair: '279 500' },
];

const bathroomItems: DamageItem[] = [
    { name: 'Картина', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '65 000', repair: '19 900' },
    { name: 'Вешалка', category: 'Невосполнимый ущерб/порча', replacement: '2 600', repair: '800' },
    { name: 'Умывальник НЕО - 60', category: 'Невосполнимый ущерб/порча', replacement: '26 000', repair: '19 500' },
    { name: 'Постамент под умывальник НЕО', category: 'Невосполнимый ущерб/порча', replacement: '19 500', repair: '13 000' },
    { name: 'Смеситель', category: 'Невосполнимый ущерб/ремонт, замена', replacement: '26 000', repair: '19 500' },
    { name: 'Душевой смеситель', category: 'Невосполнимый ущерб/ремонт, замена', replacement: '32 500', repair: '15 600' },
    { name: 'Лейка душевая', category: 'Невосполнимый ущерб/ремонт, замена', replacement: '6 500', repair: '3 500' },
    { name: 'Дверь душевая', category: 'Невосполнимый ущерб', replacement: '130 000', repair: '-' },
    { name: 'Перегородка душевая стеклянная', category: 'Невосполнимый ущерб', replacement: '130 000', repair: '-' },
    { name: 'Унитаз стандартный номер', category: 'Невосполнимый ущерб/ремонт', replacement: '45 500', repair: '19 500' },
    { name: 'Унитаз Bocal A - дуплекс', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '58 500', repair: '26 000' },
    { name: 'Шезлонги пластиковые', category: 'Невосполнимый ущерб/ремонт', replacement: '32 500', repair: '19 500' },
    { name: 'Крышка унитаза', category: 'Невосполнимый ущерб/ремонт, замена', replacement: '15 600', repair: '6 500' },
    { name: 'Ведро мусорное', category: 'Невосполнимый ущерб/ремонт, замена', replacement: '6 500', repair: '4 000' },
    { name: 'Держатели для мыла, душа', category: 'Невосполнимый ущерб/ремонт, замена', replacement: '6 500', repair: '-' },
];

const doorWindowItems: DamageItem[] = [
    { name: 'Дверь межкомнатная', category: 'Невосполнимый ущерб/ремонт', replacement: '54 600', repair: '19 500' },
    { name: 'Дверь входная в гостиничные номера стандарт', category: 'Невосполнимый ущерб/ремонт', replacement: '54 600', repair: '19 500' },
    { name: 'Дверь входная дуплекс', category: 'Невосполнимый ущерб/ремонт', replacement: '91 000', repair: '19 500' },
    { name: 'Дверной замок электронный', category: 'Невосполнимый ущерб/ремонт', replacement: '58 500', repair: '26 000' },
    { name: 'Ручка дверная', category: 'Невосполнимый ущерб/ремонт', replacement: '10 400', repair: '5 200' },
    { name: 'Окно со стеклопакетом', category: 'Невосполнимый ущерб/ремонт, замена', replacement: '75 000', repair: '35 000' },
    { name: 'Ламинат стандарт 1м2', category: 'Ремонт', replacement: '10 400', repair: '-' },
    { name: 'Покрытие стена дуплекс номер 1 м2', category: 'Ремонт', replacement: '32 500', repair: '-' },
    { name: 'Покрытие стена 1 м2 стандартный номер', category: 'Ремонт', replacement: '13 000', repair: '-' },
];

const miscItems: DamageItem[] = [
    { name: 'Чашка, тарелка', category: 'Невосполнимый ущерб/ремонт, порча', replacement: '1 900', repair: '6 500' },
    { name: 'Стакан для воды', category: 'Невосполнимый ущерб', replacement: '2 600', repair: '-' },
    { name: 'Столовые приборы за 1 шт.', category: 'Утеря, невосполнимый ущерб', replacement: '2 600', repair: '-' },
    { name: 'Чучело животных', category: 'Невосполнимый ущерб/ремонт', replacement: '260 000', repair: '65 000' },
    { name: 'Шкура животных', category: 'Невосполнимый ущерб/ремонт', replacement: '195 000', repair: '97 500' },
    { name: 'Инвентарный пульт MR5 22 Х1', category: 'Невосполнимый ущерб/ремонт', replacement: '208 000', repair: '104 000' },
    { name: 'Инвентарный пульт MR5 19 Х1', category: 'Невосполнимый ущерб/ремонт', replacement: '195 000', repair: '97 500' },
];

export default function DamagesPage() {
    const renderTable = (items: DamageItem[], title: string) => (
        <div className={styles.tableSection}>
            <h3 className={styles.tableTitle}>{title}</h3>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Категория ущерба</th>
                            <th>Замена (₸)</th>
                            <th>Ремонт (₸)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td className={styles.category}>{item.category}</td>
                                <td className={styles.price}>{item.replacement}</td>
                                <td className={styles.price}>{item.repair}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <>
            <Header />
            <main className={styles.damages}>
                <div className="container">
                    <p className={styles.meta}>Приложение №1 к договору-оферте на оказание гостиничных услуг от 01.01.2021 года</p>
                    <h1 className={styles.title}>Прейскурант цен на порчу имущества</h1>
                    <p className={styles.subtitle}>Базы Отдыха «Бейбарыс»</p>

                    <div className={styles.note}>
                        <p><strong>Внимание!</strong> При невосполнимом ущербе или утере имущества взимается полная стоимость замены. При возможности ремонта — стоимость ремонта.</p>
                    </div>

                    {renderTable(textileItems, 'Текстиль и постельное бельё')}
                    {renderTable(furnitureItems, 'Мебель')}
                    {renderTable(applianceItems, 'Техника и оборудование')}
                    {renderTable(bathroomItems, 'Санузел и декор')}
                    {renderTable(doorWindowItems, 'Двери, окна, покрытия')}
                    {renderTable(miscItems, 'Посуда и прочее')}

                    <div className={styles.footer}>
                        <p>Утверждено Генеральным Директором ТОО «Жаңа Өмір KZ» Шамкенов Р.Ж.</p>
                        <p>Дата: 01.01.2021</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
