/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-white": "var(--base-white)",
        "base-black": "var(--base-black)",
        "primary-1": "var(--primary-1)",
        "primary-2": "var(--primary-2)",
        "primary-3": "var(--primary-3)",
        "primary-4": "var(--primary-4)",
        "text-1": "var(--text-1)",
        "text-2": "var(--text-2)",
        "text-3": "var(--text-3)",
        "text-4": "var(--text-4)",
        "text-5": "var(--text-5)",
        "bg-1": "var(--bg-1)",
        "bg-2": "var(--bg-2)",
        "bg-3": "var(--bg-3)",
        "bg-4": "var(--bg-4)",
        "stroke-1": "var(--stroke-1)",
        "stroke-2": "var(--stroke-2)",
        error: "var(--error)",
        "error-bg": "var(--error-bg)",
        warning: "var(--warning)",
        "warning-bg": "var(--warning-bg)",
        success: "var(--success)",
        "success-bg": "var(--success-bg)",
        tooltip: "var(--tooltip)",
      },
    },
  },
  plugins: [],
  // important: true,
};
