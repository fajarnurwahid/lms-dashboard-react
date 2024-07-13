/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // or 'media' or 'class
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                "nunito-sans": ["Nunito Sans", "sans-serif"],
            },
            backgroundImage: {
                checkbox:
                    'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwxKSI+PHBhdGggZD0iTTkuOTk5NyAxNS4xNzA5TDE5LjE5MjEgNS45Nzg1MkwyMC42MDYzIDcuMzkyNzNMOS45OTk3IDE3Ljk5OTNMMy42MzU3NCAxMS42MzU0TDUuMDQ5OTYgMTAuMjIxMkw5Ljk5OTcgMTUuMTcwOVoiPjwvcGF0aD48L3N2Zz4=")',
            },
        },
    },
    plugins: [],
};
