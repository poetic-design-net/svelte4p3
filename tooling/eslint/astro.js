/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['plugin:astro/recommended'],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        extraFileExtensions: ['.astro'],
        parser: '@typescript-eslint/parser',
      },
      plugins: ['astro'],
      rules: {},
    },
  ],
}

module.exports = config
