import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'review',
    title: 'Отзывы',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Имя гостя',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Дата',
            type: 'string',
            description: 'Например: Ноябрь 2024',
        }),
        defineField({
            name: 'rating',
            title: 'Оценка',
            type: 'number',
            validation: (Rule) => Rule.required().min(1).max(5),
            options: {
                list: [
                    { title: '⭐', value: 1 },
                    { title: '⭐⭐', value: 2 },
                    { title: '⭐⭐⭐', value: 3 },
                    { title: '⭐⭐⭐⭐', value: 4 },
                    { title: '⭐⭐⭐⭐⭐', value: 5 },
                ],
            },
        }),
        defineField({
            name: 'text',
            title: 'Текст отзыва',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'avatar',
            title: 'Фото гостя',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'text',
            rating: 'rating',
            media: 'avatar',
        },
        prepare({ title, subtitle, rating }) {
            return {
                title: `${'⭐'.repeat(rating || 5)} ${title}`,
                subtitle: subtitle?.slice(0, 50) + '...',
            };
        },
    },
});
