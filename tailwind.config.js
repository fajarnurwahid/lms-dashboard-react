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
                "select-dark":
                    'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTEuOTk5OSAxMy4xNzE0TDE2Ljk0OTcgOC4yMjE2OEwxOC4zNjM5IDkuNjM1ODlMMTEuOTk5OSAxNS45OTk5TDUuNjM1OTkgOS42MzU4OUw3LjA1MDIgOC4yMjE2OEwxMS45OTk5IDEzLjE3MTRaIj48L3BhdGg+PC9zdmc+")',
                "select-light":
                    'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwxKSI+PHBhdGggZD0iTTExLjk5OTkgMTMuMTcxNEwxNi45NDk3IDguMjIxNjhMMTguMzYzOSA5LjYzNTg5TDExLjk5OTkgMTUuOTk5OUw1LjYzNTk5IDkuNjM1ODlMNy4wNTAyIDguMjIxNjhMMTEuOTk5OSAxMy4xNzE0WiI+PC9wYXRoPjwvc3ZnPg==")',
            },
        },
    },
    plugins: [],
};
