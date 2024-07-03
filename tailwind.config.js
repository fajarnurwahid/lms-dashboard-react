/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                "nunito-sans": ["Nunito Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
