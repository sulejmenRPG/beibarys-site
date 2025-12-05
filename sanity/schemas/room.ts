import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'room',
    title: 'Номера и домики',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Название',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Описание',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'capacity',
            title: 'Вместимость',
            type: 'string',
            description: 'Например: 2-4 гостя',
        }),
        defineField({
            name: 'price',
            title: 'Цена (₸/сутки)',
            type: 'number',
            validation: (Rule) => Rule.required().positive(),
        }),
        defineField({
            name: 'features',
            title: 'Удобства',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Список удобств: Wi-Fi, кондиционер, и т.д.',
        }),
        defineField({
            name: 'image',
            title: 'Главное фото',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'gallery',
            title: 'Галерея фото',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'badge',
            title: 'Бейдж',
            type: 'string',
            options: {
                list: [
                    { title: 'Без бейджа', value: '' },
                    { title: 'Популярный', value: 'popular' },
                    { title: 'VIP / Премиум', value: 'premium' },
                    { title: 'Новинка', value: 'new' },
                ],
            },
        }),
        defineField({
            name: 'order',
            title: 'Порядок отображения',
            type: 'number',
            initialValue: 0,
        }),
    ],
    orderings: [
        {
            title: 'По порядку',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'price',
            media: 'image',
        },
        prepare({ title, subtitle, media }) {
            return {
                title,
                subtitle: subtitle ? `${subtitle.toLocaleString()} ₸` : '',
                media,
            };
        },
    },
});
