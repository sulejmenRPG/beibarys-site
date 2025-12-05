import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'service',
    title: 'Услуги',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Название',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Описание',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'icon',
            title: 'Иконка',
            type: 'string',
            description: 'Название иконки: Target, CircleDot, Mountain, Crosshair, Swords, Mic2, Waves, Flame, Bike, PartyPopper',
            options: {
                list: [
                    { title: 'Мишень (Target)', value: 'Target' },
                    { title: 'Шар (CircleDot)', value: 'CircleDot' },
                    { title: 'Гора (Mountain)', value: 'Mountain' },
                    { title: 'Прицел (Crosshair)', value: 'Crosshair' },
                    { title: 'Мечи (Swords)', value: 'Swords' },
                    { title: 'Микрофон (Mic2)', value: 'Mic2' },
                    { title: 'Волны (Waves)', value: 'Waves' },
                    { title: 'Огонь (Flame)', value: 'Flame' },
                    { title: 'Велосипед (Bike)', value: 'Bike' },
                    { title: 'Праздник (PartyPopper)', value: 'PartyPopper' },
                ],
            },
        }),
        defineField({
            name: 'image',
            title: 'Изображение',
            type: 'image',
            options: {
                hotspot: true,
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
            title: 'title',
            media: 'image',
        },
    },
});
