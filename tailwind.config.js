/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // or 'media' or 'class
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
