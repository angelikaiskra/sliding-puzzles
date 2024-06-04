import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            'white': '#FFFFFF',
            'black': '#000000',
            'font-dark': '#2F2F2F',
            'blue': {
                100: '#E5F9FF',
                200: '#B8D8ED',
                300: '#B2ECFF',
                400: '#7EAFFF',
                500: '#4B69EA',
                600: '#2f47b9',
            },
            'gray': {
                100: '#F5F8FA',
                200: '#E2ECF2',
                300: '#DDDDDD',
                400: '#B1B1B1',
                500: '#7C7C7C',
                600: '#676767',
            }
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
