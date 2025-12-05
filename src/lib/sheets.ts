/**
 * Google Sheets Integration
 * 
 * Использует публичную Google таблицу для хранения контента сайта.
 * Данные получаются через CSV экспорт - не требует API ключей!
 * 
 * Как настроить:
 * 1. Создайте Google Таблицу
 * 2. Добавьте листы: services, rooms, pricing, menu, reviews, contacts
 * 3. Опубликуйте: Файл → Опубликовать в интернете → Весь документ → CSV
 * 4. Скопируйте ID таблицы из URL и вставьте в SHEET_ID ниже
 */

// ID вашей Google таблицы (из URL: docs.google.com/spreadsheets/d/[SHEET_ID]/edit)
const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID || 'YOUR_SHEET_ID_HERE';

// Названия листов в таблице
const SHEETS = {
    services: 'services',
    rooms: 'rooms',
    pricing: 'pricing',
    menu: 'menu',
    reviews: 'reviews',
    contacts: 'contacts',
};

/**
 * Получает данные из листа Google таблицы в формате CSV
 */
async function fetchSheetData(sheetName: string): Promise<string[][]> {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

    try {
        const response = await fetch(url, {
            next: { revalidate: 300 } // Кэш на 5 минут
        });

        if (!response.ok) {
            console.error(`Failed to fetch ${sheetName}: ${response.status}`);
            return [];
        }

        const csv = await response.text();
        return parseCSV(csv);
    } catch (error) {
        console.error(`Error fetching ${sheetName}:`, error);
        return [];
    }
}

/**
 * Парсит CSV строку в массив массивов
 */
function parseCSV(csv: string): string[][] {
    const lines = csv.split('\n');
    return lines.map(line => {
        const values: string[] = [];
        let current = '';
        let inQuotes = false;

        for (let i = 0; i < line.length; i++) {
            const char = line[i];

            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        values.push(current.trim());

        return values.map(v => v.replace(/^"|"$/g, ''));
    });
}

/**
 * Получает услуги
 * Формат таблицы: id, title, description, icon
 */
export async function getServices() {
    const data = await fetchSheetData(SHEETS.services);
    if (data.length <= 1) return null; // Только заголовок или пусто

    return data.slice(1).map(row => ({
        id: row[0] || '',
        title: row[1] || '',
        description: row[2] || '',
        icon: row[3] || 'Target',
    }));
}

/**
 * Получает номера и домики
 * Формат: id, name, description, capacity, price, features, image, badge
 */
export async function getRooms() {
    const data = await fetchSheetData(SHEETS.rooms);
    if (data.length <= 1) return null;

    return data.slice(1).map(row => ({
        id: row[0] || '',
        name: row[1] || '',
        description: row[2] || '',
        capacity: row[3] || '',
        price: row[4] || '',
        features: row[5] || '',
        image: row[6] || '/images/room-default.jpg',
        badge: row[7] || '',
    }));
}

/**
 * Получает прайс-лист
 * Формат: category, name, price, period
 */
export async function getPricing() {
    const data = await fetchSheetData(SHEETS.pricing);
    if (data.length <= 1) return null;

    // Группируем по категориям
    const categories: { [key: string]: { name: string; price: string; period: string }[] } = {};

    data.slice(1).forEach(row => {
        const category = row[0] || 'Другое';
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push({
            name: row[1] || '',
            price: row[2] || '',
            period: row[3] || '',
        });
    });

    return Object.entries(categories).map(([category, items]) => ({
        category,
        items,
    }));
}

/**
 * Получает меню ресторана
 * Формат: category, name, description, price
 */
export async function getMenu() {
    const data = await fetchSheetData(SHEETS.menu);
    if (data.length <= 1) return null;

    // Группируем по категориям
    const categories: { [key: string]: { name: string; description: string; price: string }[] } = {};

    data.slice(1).forEach(row => {
        const category = row[0] || 'Другое';
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push({
            name: row[1] || '',
            description: row[2] || '',
            price: row[3] || '',
        });
    });

    return Object.entries(categories).map(([name, items]) => ({
        name,
        items,
    }));
}

/**
 * Получает отзывы
 * Формат: id, name, date, rating, text
 */
export async function getReviews() {
    const data = await fetchSheetData(SHEETS.reviews);
    if (data.length <= 1) return null;

    return data.slice(1).map(row => ({
        id: row[0] || String(Math.random()),
        name: row[1] || '',
        date: row[2] || '',
        rating: parseInt(row[3]) || 5,
        text: row[4] || '',
    }));
}

/**
 * Получает контактную информацию
 * Формат: key, value (одна строка на каждый параметр)
 */
export async function getContacts() {
    const data = await fetchSheetData(SHEETS.contacts);
    if (data.length <= 1) return null;

    const contacts: { [key: string]: string } = {};
    data.slice(1).forEach(row => {
        contacts[row[0]] = row[1] || '';
    });

    return {
        phone: contacts['phone'] || '+7 700 123 45 67',
        whatsapp: contacts['whatsapp'] || '+77001234567',
        instagram: contacts['instagram'] || '@beibarys.resort',
        address: contacts['address'] || 'с. Жибек Жолы, Акмолинская область',
        workHours: contacts['workHours'] || '09:00 — 23:00',
        checkIn: contacts['checkIn'] || 'с 14:00',
    };
}
