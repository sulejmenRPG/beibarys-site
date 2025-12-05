import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'gallery',
    title: 'Галереи',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Название галереи',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Идентификатор',
            type: 'slug',
            description: 'Например: activities, gazebos, pool, banquet',
            options: {
                source: 'title',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Подзаголовок',
            type: 'string',
        }),
        defineField({
            name: 'label',
            title: 'Метка секции',
            type: 'string',
        }),
        defineField({
            name: 'items',
            title: 'Элементы галереи',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'galleryItem',
                    title: 'Элемент',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Название',
                            type: 'string',
                        }),
                        defineField({
                            name: 'image',
                            title: 'Фото',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        }),
                        defineField({
                            name: 'video',
                            title: 'Видео',
                            type: 'file',
                            options: {
                                accept: 'video/*',
                            },
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            media: 'image',
                        },
                    },
                },
            ],
        }),
        defineField({
            name: 'order',
            title: 'Порядок на странице',
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
            title: 'title',
            items: 'items',
        },
        prepare({ title, items }) {
            return {
                title,
                subtitle: `${items?.length || 0} элементов`,
            };
        },
    },
});
