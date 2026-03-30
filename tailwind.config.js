/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--color-background)',
                surface: 'var(--color-surface)',
                surfaceHighlight: 'var(--color-surfaceHighlight)',
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                text: 'var(--color-text)',
                muted: 'var(--color-muted)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
