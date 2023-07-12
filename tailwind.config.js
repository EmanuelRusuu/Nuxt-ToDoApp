module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            screens: {
                xsm: "480px",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                neue: ["Neue Hass Grotesk Display Pro"],
            },
        },
    },
    plugins: [],
};
