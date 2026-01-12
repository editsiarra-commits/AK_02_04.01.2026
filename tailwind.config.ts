import { type Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                coffee: {
                    50: '#f7f5f4',
                    100: '#e9e5e3',
                    200: '#d5ccc8',
                    300: '#bcaaa4',
                    400: '#a1887f',
                    500: '#8d6e63',
                    600: '#795548',
                    700: '#6d4c41',
                    800: '#5d4037',
                    900: '#4e342e',
                    950: '#2b1b18',
                },
                warm: {
                    50: '#fafaf9',
                    100: '#f5f5f4',
                    200: '#e7e5e4',
                    300: '#d6d3d1',
                    400: '#a8a29e',
                    500: '#78716c',
                    600: '#57534e',
                    700: '#44403c',
                    800: '#292524',
                    900: '#1c1917', // Main background
                    950: '#0c0a09',
                }
            },
            fontFamily: {
                serif: ['"Urbanist"', 'sans-serif'],
                sans: ['"Urbanist"', 'sans-serif'],
                display: ['"Urbanist"', 'sans-serif'],
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
            }
        }
    },
    plugins: [],
} satisfies Config
