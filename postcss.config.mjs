const config = {
  darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./sanity/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    extend: {
      screens: {
        xs: "var(--breakpoint-xs)", // 475px
        '3xl': "var(--breakpoint-3xl)", // 1920px
      },
      colors: {
        primari: {
          100: "var(--color-primari-100)",
          DEFAULT: "var(--color-primari)",
        },
        secondari: "var(--color-secondari)",
        black: {
          100: "var(--color-black-100)",
          200: "var(--color-black-200)",
          300: "var(--color-black-300)",
          DEFAULT: "var(--color-black)",
        },
        white: {
          100: "var(--color-white-100)",
          DEFAULT: "var(--color-white)",
        },
      },
      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        100: "2px 2px 0px 0px rgb(0, 0, 0)",
        200: "2px 2px 0px 2px rgb(0, 0, 0)",
        300: "2px 2px 0px 2px var(--color-primary)",
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
