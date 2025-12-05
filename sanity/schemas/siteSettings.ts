import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'siteSettings',
    title: 'Настройки сайта',
    type: 'document',
    fields: [
        defineField({
            name: 'siteName',
            title: 'Название сайта',
            type: 'string',
            initialValue: 'BEIBARYS',
        }),
        defineField({
            name: 'tagline',
            title: 'Слоган',
            type: 'string',
            initialValue: 'Территория комфорта',
        }),
        defineField({
            name: 'description',
            title: 'Описание',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'phone',
            title: 'Телефон',
            type: 'string',
        }),
        defineField({
            name: 'whatsapp',
            title: 'WhatsApp',
            type: 'string',
            description: 'Номер без + и пробелов, например: 77001234567',
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram',
            type: 'string',
            description: '@username',
        }),
        defineField({
            name: 'address',
            title: 'Адрес',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'workHours',
            title: 'Часы работы',
            type: 'string',
            description: 'Например: 09:00 — 23:00',
        }),
        defineField({
            name: 'checkInTime',
            title: 'Время заезда',
            type: 'string',
            description: 'Например: с 14:00',
        }),
        defineField({
            name: 'heroVideo',
            title: 'Видео для главного экрана',
            type: 'file',
            options: {
                accept: 'video/*',
            },
        }),
        defineField({
            name: 'heroImage',
            title: 'Картинка для главного экрана (если нет видео)',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'logo',
            title: 'Логотип',
            type: 'image',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Настройки сайта',
            };
        },
    },
});
