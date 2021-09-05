# eslint-prettier boilerplate for vanillascript

프로젝트에 바로 사용할 수 있는 eslint-prettier-stylelint 설정.

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
