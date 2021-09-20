# boilerplates-for-linters

프로젝트에 바로 사용할 수 있는 eslint-prettier-stylelint-markdownlint 설정.

다음 라이브러리 & 프레임워크를 사용하는 프로젝트에 바로 적용할 수 있다.

- Jest
- React.js
- Typescript
- Vanillascript
- Vue.js

## vs code에 prettier & eslint 설정하기

> npm init 을 하지 않았다면 `npm init -y`를 먼저 실행할 것.

1. prettier, eslint extention 설치
1. npm 설치

   1. babel-eslint // 파서 옵션에 따라 설치하지 않아도 상관없음
   1. eslint // 코드의 문법을 검사하는 린팅과 코드의 스타일을 잡아주는 포맷팅 기능
   1. eslint-config-prettier // prettier와 충돌을 일으키는 ESLint 규칙들을 비활성화 시키는 config
   1. eslint-loader
   1. eslint-plugin-import // ES2015+의 import/export 구문을 지원. Vue나 React 같은 프론트엔드 라이브러리를 사용할 때는 설치하지 않아도 괜찮다.
   1. eslint-plugin-prettier // Prettier에서 인식하는 코드상의 포맷 오류를 ESLint 오류로 출
   1. prettier // 코드의 스타일을 잡아주는 포맷팅 기능

   ```bash
   $ npm init -y
   $ yarn add -D babel-eslint eslint eslint-config-prettier eslint-loader eslint-plugin-import eslint-plugin-prettier prettier
   ```

1. 프로젝트 root 폴더에 파일 복사

   1. .prettierrc
   1. .prettierignore
   1. .eslintrc.js
   1. .eslintignore

## vs code의 settings.json 설정

1. vs code 설정에서 옵션 변경(workspace)

   > 이 설정은 직접 하지 말고 여기에 있는 .vscode/settings.json 파일을 폴더째 복사해서 붙여넣기 할 것.

   ~~1. Editor: Format On Save => true~~  
   ~~1. Editor: Default Formatter => esbenp.prettier-vscode~~  
   ~~Eslint > Format: Enable => true~~

1. package.json > scripts 에 lint 명령어 추가 후 실행

   > 명령어를 추가하지 않고 `npx eslint .`만 실행해도 된다.

   ```json
   {
     "scripts": {
       "lint": "eslint ."
     }
   }
   ```

   ```bash
   $ npm run lint
   ```

## stylelint 설정하기

1. stylelint extention 설치
1. npm 설치

   1. stylelint
   2. stylelint-config-prettier
   3. stylelint-config-standard
   4. stylelint-order
   5. stylelint-scss

   ```bash
   $ yarn add -D stylelint stylelint-config-prettier stylelint-config-standard stylelint-order stylelint-scss
   ```

1. 프로젝트 root 폴더에 파일 복사

   1. .stylelintrc.js

## markdownlint 설정하기

1. markdownlint extention 설치
1. npm 설치

   1. markdownlint

   ```bash
   $ yarn add -D markdownlint
   ```

1. 프로젝트 root 폴더에 파일 복사

   1. .markdownlint.json

## Vue.js 프로젝트일 때 추가 설정

1. npm 설치

   1. eslint-plugin-vue

   ```bash
   $ yarn add -D eslint-plugin-vue
   ```

1. .eslintrc.js에서 주석 처리한 vue 관련 옵션 활성화

## Nuxt.js 프로젝트일 때 추가 설정

> `create-nuxt-app` 으로 앱을 설치했을 때 기본으로 설치되는 패키지는 제외하였음.

1. npm 설치

   1. eslint-plugin-vue
   1. eslint-plugin-nuxt

   ```bash
   $ yarn add -D eslint-plugin-vue eslint-plugin-nuxt
   ```

1. .eslintrc.js에서 주석 처리한 vue, nuxt 관련 옵션 활성화

## Typescript 프로젝트일 때 추가 설정

1. npm 설치

   1. typescript
   2. @typescript-eslint/eslint-plugin // Typescript 관련 린팅 규칙을 설정하는 플러그인
   3. @typescript-eslint/parser // Typescript 를 파싱하기 위해 사용

   ```bash
   $ yarn add -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```

1. .eslintrc.js에서 주석 처리한 typescript 관련 옵션 활성화
1. .prettierrc에 `"parser": "typescript"` 추가

## React.js 프로젝트일 때 추가 설정

1. npm 설치

   1. eslint-plugin-react
   2. eslint-plugin-react-hooks
   3. eslint-plugin-jsx-a11y

   ```bash
   $ yarn add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
   ```

1. .eslintrc.js에서 주석 처리한 react 관련 옵션 활성화

## jest를 사용할 때 추가 설정

1. npm 설치

   1. eslint-plugin-jest
   1. jest

   ```bash
   $ yarn add -D eslint-plugin-jest jest
   ```

1. Vue.js, Nuxt.js에 사용할 때는 vue-jest를 추가할 것

   1. vue-jest

   ```bash
   $ yarn add -D vue-jest
   ```

1. package.json > scripts 에 test 명령어 추가 후 실행

   ```json
   {
     "scripts": {
       "test": "jest"
     }
   }
   ```

1. .eslintrc.js에서 주석 처리한 jest 관련 옵션 활성화

   - [Rules](https://www.npmjs.com/package/eslint-plugin-jest#user-content-rules)
   - [Typescript Rules](https://www.npmjs.com/package/eslint-plugin-jest#user-content-typescript-rules)

## mocha를 사용할 때 추가 설정

1. npm 설치

   1. chai
   1. eslint-config-sinon
   1. eslint-plugin-chai-friendly
   1. eslint-plugin-mocha
   1. mocha
   1. sinon

   ```bash
   $ yarn add -D chai eslint-config-sinon eslint-plugin-chai-friendly eslint-plugin-mocha mocha sinon
   ```

1. package.json > scripts 에 test 명령어 추가 후 실행

   ```json
   {
     "scripts": {
       "test": "mocha"
     }
   }
   ```

1. .eslintrc.js에서 주석 처리한 mocha 관련 옵션 활성화

   [Rules](https://github.com/lo1tuma/eslint-plugin-mocha/tree/f9540209dc153c26fb44fa5250af6034058db875/docs/rules#rules)
