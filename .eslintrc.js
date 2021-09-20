module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/react',
  ],
  // ignorePatterns: ['.eslintrc.js'], // The file does not match your project config: eslintrc.js 에러 해결을 위해 필요
  parserOptions: { parser: 'babel-eslint', ecmaFeatures: { jsx: true }, ecmaVersion: 6, sourceType: 'module' },
  plugins: ['import', 'jsx-a11y', 'prettier', 'react', 'react-hooks'],
  root: true,
  rules: {
    'array-bracket-spacing': ['warn', 'never'],
    camelcase: ['error', { properties: 'never' }],
    'comma-dangle': 'off',
    'computed-property-spacing': ['error', 'never', { enforceForClassMembers: false }],
    'generator-star-spacing': 'off',
    'import/no-unresolved': ['error', { commonjs: true, amd: true }],
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-duplicate-imports': 'error',
    'no-extra-semi': 'error',
    'no-inner-declarations': 'off',
    'no-new-object': 'error',
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'object-curly-spacing': ['warn', 'always'],
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prettier/prettier': 'warn',
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'react/prop-types': [
      'warn',
      {
        // ignore: [], // optional array of props name to ignore during validation
        // customValidators: [], // optional array of validators used for propTypes validation
        skipUndeclared: true, // optional boolean to only error on components that have a propTypes block declared
      },
    ],
    'space-before-function-paren': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
