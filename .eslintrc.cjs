module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser', // Use TypeScript parser
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['./tsconfig.json'], // Ensure that ESLint uses the right TypeScript config
    extraFileExtensions: ['.astro'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript-specific rules
    'plugin:astro/recommended', // Astro-specific rules
    'plugin:jsx-a11y/recommended', // Accessibility linting for JSX
    'prettier', // Ensures ESLint plays nicely with Prettier
  ],
  plugins: [
    '@typescript-eslint',
    'astro',
    'jsx-a11y' // Accessibility plugin
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser', // Ensures TypeScript parsing in Astro files
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // Astro-specific linting rules can go here
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // TypeScript-specific linting rules can go here
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Example: adjust as needed
      },
    },
  ],
  rules: {
    // General ESLint rules
    'no-unused-vars': 'off', // Disable to let TypeScript handle this
    '@typescript-eslint/no-unused-vars': ['error'], // Use TypeScript's no-unused-vars
    'jsx-a11y/anchor-is-valid': 'warn', // Example: Ensure valid anchors
    'jsx-a11y/alt-text': 'warn', // Example: Ensure all images have alt text
  },
};
