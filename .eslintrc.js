module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:jest/all', // enable all rules instead of only some you can do
    'plugin:jest/recommended', // exports a recommended configuration that enforces good testing practices
    'plugin:jest/style', // exports a configuration named style
    'plugin:prettier/recommended', // eslint의 포매팅 기능을 prettier로 사용. 항상 마지막에 세팅 되어야? (eslint-plugin-prettier)
    'prettier',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module', // 모듈 시스템 사용 시
  },
  plugins: ['jest', 'prettier'],
  root: true,
  rules: {
    'array-bracket-spacing': ['warn', 'never'], // 대괄호 안에 간격 삽입. always로 설정할 경우 prettier와 충돌 발생
    camelcase: ['error', { properties: 'never' }],
    'comma-dangle': 'off',
    'computed-property-spacing': ['error', 'never', { enforceForClassMembers: false }],
    'generator-star-spacing': 'off', // allow async-await
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': ['error', { allow: ['afterEach', 'afterAll', 'beforeEach', 'beforeAll'] }],
    'jest/no-identical-title': 'error',
    'jest/prefer-expect-assertions': ['warn', { onlyFunctionsWithAsyncKeyword: true }],
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
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
  },
}
