# warever-quick-starter-pack

웹사이트 개발을 위한 기본적인 토대 

현재 지원가능한 브라우저 리스트
</br>
-chrome
</br>
-firefox
</br>
-edge
</br>
-ie11 (이하버전 지원불가능)


## Getting Started

1. npm
```
npm install
```
2. angular cli 11.04v
```
npm install @angular/cli
``` 
3. typescript 4.0
```
npm install typescript
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

소스코드변경시 화면에 자동 적용 

## Code scaffolding

1. 기본구조 컴포넌트 생성법 

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

```
ng g c 'coomponent name' 
```
컴포넌트 생성시 위와같이 축약 가능하다 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

컴포넌트 생성시에 같이 추가된 spec.ts파일에서 unit test 관련 설정이 가능하다 . 


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deploy 

1. serve 이용한 배포 
```
ng build --prod

```
production을 사용한 빌드 
2. serve 설치 
```
npm i serve -g
```
3. serve 실행 
```
serve -s dist/angular-quick-start/
```