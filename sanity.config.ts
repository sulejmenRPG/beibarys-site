import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
    name: 'beibarys-studio',
    title: 'BEIBARYS - Админ панель',

    projectId,
    dataset,

    basePath: '/admin',

    plugins: [
        structureTool(),
        visionTool(),
    ],

    schema: {
        types: schemaTypes,
    },
});
