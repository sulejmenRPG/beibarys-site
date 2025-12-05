import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'menuCategory',
    title: 'Меню ресторана',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Название категории',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'items',
            title: 'Блюда',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'menuItem',
                    title: 'Блюдо',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Название блюда',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Описание',
                            type: 'string',
                        }),
                        defineField({
                            name: 'price',
                            title: 'Цена',
                            type: 'string',
                            description: 'Например: 4 500 ₸',
                            validation: (Rule) => Rule.required(),
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
            title: 'name',
            items: 'items',
        },
        prepare({ title, items }) {
            return {
                title,
                subtitle: `${items?.length || 0} блюд`,
            };
        },
    },
});
