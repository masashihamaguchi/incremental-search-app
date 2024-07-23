module.exports = {
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',

  /**
   * Import Order
   *
   * 1. React, Next.js
   * 2. THIRD_PARTY_MODULES
   * 3. LOCAL_MODULES
   * 4. OTHERS
   */
  importOrder: [
    '^(react$)|^(react/(.*)$)|^(next$)|^(next/(.*)$)',
    `<THIRD_PARTY_MODULES>`,
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: false,

  // plugins
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}
