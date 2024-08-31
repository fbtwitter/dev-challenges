/** @type {import("prettier").Config} */
export default {
  printWidth: 80,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: true,
  endOfLine: "lf",
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
