import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    // Load env files
    const env = loadEnv(mode, process.cwd(), ['VITE_', 'GITHUB_']);
    
    return {
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.js'],
                refresh: true,
            }),
            tailwindcss(),
        ],
        // Make GITHUB_PERSONAL_TOKEN available to your frontend
        define: {
            'process.env.GITHUB_PERSONAL_TOKEN': JSON.stringify(env.GITHUB_PERSONAL_TOKEN)
        }
    };
});
