import { type Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Coral accent palette (from reference)
                coral: {
                    50: '#fef2f0',
                    100: '#fde4df',
                    200: '#fbc9bf',
                    300: '#f6a08f',
                    400: '#ef7a63',
                    500: '#e85d4a',
                    600: '#d14d3a',
                    700: '#b13d2e',
                    800: '#92352a',
                    900: '#793028',
                    950: '#411511',
                },
                // Navy for headings
                navy: {
                    50: '#f0f1f5',
                    100: '#d9dbe5',
                    200: '#b3b7cb',
                    300: '#8d93b1',
                    400: '#676f97',
                    500: '#4a5280',
                    600: '#3a4068',
                    700: '#2d3250',
                    800: '#1f2238',
                    900: '#1a1a2e',
                    950: '#0d0d17',
                },
                // Surface colors for light-theme backgrounds
                surface: {
                    DEFAULT: '#eeeeee',
                    50: '#ffffff',
                    100: '#f7f7f8',
                    200: '#eeeeee',
                    300: '#e5e7eb',
                    400: '#d1d5db',
                    500: '#9ca3af',
                },
                // Keep existing palettes for video overlays / sub-pages
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
                    900: '#1c1917',
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
