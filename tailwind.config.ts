import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            boxShadow: {
                custom: '0 0 500px 2px rgba(0, 123, 255, 0.3)',
            },
            dropShadow: {
                custom: '0 0 10px rgba(255, 255, 255, 0.5)',
            },
            keyframes: {
                wave: {
                    '0%': { transform: 'rotate(0deg)' },
                    '20%': { transform: 'rotate(-15deg)' },
                    '40%': { transform: 'rotate(10deg)' },
                    '60%': { transform: 'rotate(-15deg)' },
                    '80%': { transform: 'rotate(10deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
                rocketTakeoff: {
                    '0%': { transform: 'translateX(0) translateY(0)' },
                    '100%': { transform: 'translateX(10px) translateY(-10px)' },
                },
                fireTrail: {
                    '0%': { opacity: '0.1', transform: 'scale(0.2) rotate(225deg)' },
                    '50%': { opacity: '0.4', transform: 'scale(0.6) rotate(225deg)' },
                    '100%': { opacity: '0.6', transform: 'scale(1.0) rotate(225deg)' },
                },
            },
            animation: {
                wave: 'wave 2.5s infinite',
                rocketTakeoff: 'rocketTakeoff 2s ease-in-out infinite',
                fireTrail: 'fireTrail 2s ease-in-out infinite',
            },
        },
    },
    plugins: [],
} satisfies Config;
