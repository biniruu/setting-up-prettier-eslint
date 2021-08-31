module.exports = {
  env: {
    browser: true,
    es6: true,
    // 'jest/globals': true,
    node: true,
  },
  extends: [
    'eslint-config-prettier',
    'plugin:mocha/recommended',
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended', // 타입스크립트 추천 룰셋
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // 'plugin:jest/all', // enable all rules instead of only some you can do
    // 'plugin:jest/recommended', // exports a recommended configuration that enforces good testing practices
    // 'plugin:jest/style', // exports a configuration named style
    // 'plugin:jsx-a11y/recommended', // react.js 프로젝트 시 필요
    // 'plugin:nuxt/recommended',
    'plugin:prettier/recommended', // eslint의 포매팅 기능을 prettier로 사용. 항상 마지막에 세팅 되어야? (eslint-plugin-prettier)
    // 'plugin:react/recommended', // 리액트 추천 룰셋
    // 'plugin:vue/strongly-recommended',
    'prettier',
    // 'prettier/@typescript-eslint', // eslint의 typescript 포매팅 기능을 제거 (eslint-config-prettier)
    // 'prettier/react',
    // 'standard',
    // 'tsconfig.json', // project: 'tsconfig.json'을 활성화 하기 위해 꼭 필요
  ],
  // globals: {
  //   $nuxt: true,
  // },
  // ignorePatterns: ['.eslintrc.js'], // The file does not match your project config: eslintrc.js 에러 해결을 위해 필요
  // parser: '@typescript-eslint/parser',
  parser: 'babel-eslint',
  parserOptions: {
    // ecmaFeatures: {
    //   jsx: true, // 리액트의 JSX 파싱을 위해서
    // },
    ecmaVersion: 6,
    // project: 'tsconfig.json', // parser: @typescript-eslint/parsergst를 활성화 하기 위해 꼭 필요
    sourceType: 'module', // 모듈 시스템 사용 시
  },
  plugins: [
    // '@typescript-eslint',
    // 'jest',
    'mocha',
    'prettier',
    // 'react-hooks',
    // 'vue',
  ],
  root: true,
  rules: {
    // '@typescript-eslint/no-var-requires': 'error', // typescript에서 var 변수 사용 시 에러 발생
    'array-bracket-spacing': ['warn', 'never'], // 대괄호 안에 간격 삽입. always로 설정할 경우 prettier와 충돌 발생
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    'comma-dangle': 'off',
    'computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: false,
      },
    ], // class 안에서 정의한 멤버의 대괄호 안에 간격 삽입
    'generator-star-spacing': 'off', // allow async-await
    // 'jest/no-disabled-tests': 'warn',
    // 'jest/no-focused-tests': 'error',
    // 'jest/no-hooks': ['error', { allow: ['afterEach', 'afterAll', 'beforeEach', 'beforeAll'] }],
    // 'jest/no-identical-title': 'error',
    // 'jest/prefer-expect-assertions': ['warn', { onlyFunctionsWithAsyncKeyword: true }],
    // 'jest/prefer-to-have-length': d'warn',
    // 'jest/valid-expect': 'error',
    // eslint-plugin-mocha rules: https://github.com/lo1tuma/eslint-plugin-mocha/tree/f9540209dc153c26fb44fa5250af6034058db875/docs/rules#rules
    'mocha/handle-done-callback': 'error',
    'mocha/max-top-level-suites': 'error',
    'mocha/no-async-describe': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-exports': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-hooks-for-single-case': 'error',
    'mocha/no-identical-title': 'error',
    'mocha/no-mocha-arrows': 'error',
    'mocha/no-nested-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/no-return-and-callback': 'error',
    'mocha/no-setup-in-describe': 'error',
    'mocha/no-sibling-hooks': 'error',
    'mocha/no-skipped-tests': 'error',
    'mocha/no-top-level-hooks': 'error',
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
    'prettier/prettier': [
      'warn',
      {
        bracketSpacing: true,
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    // 'react/prop-types': [
    //   'warn',
    //   {
    //     // ignore: [], // optional array of props name to ignore during validation
    //     // customValidators: [], // optional array of validators used for propTypes validation
    //     skipUndeclared: true, // optional boolean to only error on components that have a propTypes block declared
    //   },
    // ],
    'space-before-function-paren': 'off', // allow debugger during development
    // 'vue/v-bind-style': ['warn', 'shorthand'],
    // 'vue/require-v-for-key': 'warn',
    // 'vue/no-unused-components': 'warn',
  },
  settings: {
    'mocha/additionalCustomNames': [
      { name: 'describeModule', type: 'suite', interfaces: ['BDD'] },
      { name: 'testModule', type: 'testCase', interfaces: ['TDD'] },
    ],
    //   react: {
    //     version: 'detect', // eslint-plugin-react가 자동 리액트버전탐지
    //   },
  },
}
