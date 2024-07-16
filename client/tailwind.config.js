/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background-color))",
        border: "rgba(var(--border-color))",
        card: "rgba(var(--card-color))",
        copyPrimary: "rgba(var(--copy-primary-color))",
        copySecondary: "rgba(var(--copy-secondary-color))",
        cta: "rgba(var(--cta-color))",
        ctaActive: "rgba(var(--cta-active-color))",
        ctaText: "rgba(var(--cta-text-color))",
      },
    },
  },
  plugins: [],
};
