import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // classes
  theme: {
    extend: {
      colors: {
        default: "var(--default)",
        surface: "var(--surface)",
        secondary: "var(--secondary)",
        foreground: "var(--foreground)",
        text: "var(--text)",
        brandPrimary: "var(--brand-primary)",
      },
      fontFamily: {
        title: "var(--font-bebas)",
        subtitle: "var(--font-oswald)",
        body: "var(--font-playfair)",
        details: "var(--font-inter)",
        brand: "var(--font-shrikhand)"
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        xxl: "var(--text-xxl)",
      },
      maxWidth: {
        container: "var(--container-max)",
        content: "var(--content-max)",
        section: "var(--section-max)",
      },
      height: {
        containerHeight: "var(--container-height)"
      },
      spacing: {
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
        7: "var(--space-7)",
        8: "var(--space-8)",
        9: "var(--space-9)",
        10: "var(--space-10)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
    },
  },
  plugins: [],
};
export default config;
