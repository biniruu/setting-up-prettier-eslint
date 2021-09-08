module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    'eslint-config-prettier',
    'eslint-config-sinon',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended', // eslint의 포매팅 기능을 prettier로 사용. 항상 마지막에 세팅 되어야? (eslint-plugin-prettier)
    'plugin:vue/strongly-recommended',
  ],
  globals: {
    $nuxt: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module', // 모듈 시스템 사용 시
  },
  root: true,
  rules: {
    'array-bracket-spacing': ['warn', 'never'], // 대괄호 안에 간격 삽입. always로 설정할 경우 prettier와 충돌 발생
    camelcase: ['error', { properties: 'never' }],
    'comma-dangle': 'off',
    'computed-property-spacing': ['error', 'never', { enforceForClassMembers: false }],
    'generator-star-spacing': 'off', // allow async-await
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-duplicate-imports': 'error',
    'no-extra-semi': 'error',
    'no-inner-declarations': 'off',
    'no-new-object': 'error',
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'object-curly-spacing': ['warn', 'always'], // 중괄호 안에 간격 삽입
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prettier/prettier': ['warn', { bracketSpacing: true, printWidth: 120, singleQuote: true, trailingComma: 'all' }],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'space-before-function-paren': 'off', // allow debugger during development
    'vue/v-bind-style': ['warn', 'shorthand'],
    'vue/require-v-for-key': 'warn',
    'vue/no-unused-components': 'warn',
  },
}
