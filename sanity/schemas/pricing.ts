import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'pricing',
    title: 'Прайс-лист',
    type: 'document',
    fields: [
        defineField({
            name: 'category',
            title: 'Категория',
            type: 'string',
            validation: (Rule) => Rule.required(),
            options: {
                list: [
                    { title: 'Беседки', value: 'Беседки' },
                    { title: 'VIP залы', value: 'VIP залы' },
                    { title: 'Активности', value: 'Активности' },
                    { title: 'Бассейн', value: 'Бассейн' },
                    { title: 'Банный комплекс', value: 'Банный комплекс' },
                    { title: 'Другое', value: 'Другое' },
                ],
            },
        }),
        defineField({
            name: 'items',
            title: 'Позиции',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'priceItem',
                    title: 'Позиция',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Название',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'price',
                            title: 'Цена',
                            type: 'string',
                            description: 'Например: 15 000 ₸',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'period',
                            title: 'Период',
                            type: 'string',
                            description: 'Например: / день, / час, / чел',
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'name',
                            subtitle: 'price',
                        },
                    },
                },
            ],
        }),
        defineField({
            name: 'order',
            title: 'Порядок категории',
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
            title: 'category',
            items: 'items',
        },
        prepare({ title, items }) {
            return {
                title,
                subtitle: `${items?.length || 0} позиций`,
            };
        },
    },
});
