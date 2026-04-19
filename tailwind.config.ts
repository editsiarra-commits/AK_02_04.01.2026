import { type Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                coffee: {
                    50: '#fff8f5',
                    100: '#feeee8',
                    200: '#bf3d22',
                    300: '#d14a30',
                    400: '#e8573a',
                    500: '#e8573a',
                    600: '#d14a30',
                    700: '#e8573a',
                    800: '#f5d0c5',
                    900: '#fef0ec',
                    950: '#f5f0ee',
                },
                warm: {
                    50: '#13102b',
                    100: '#1e1b4b',
                    200: '#3b3660',
                    300: '#6b6780',
                    400: '#9895a8',
                    500: '#b5b2c2',
                    600: '#c8c5d3',
                    700: '#d5d3de',
                    800: '#e6e4ed',
                    900: '#f5f3fa',
                    950: '#fefeff',
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
            },
            blur: {
                '4xl': '72px',
                '5xl': '100px',
            }
        }
    },
    plugins: [],
} satisfies Config
