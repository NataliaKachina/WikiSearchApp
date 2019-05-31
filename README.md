# TestWikiSearchApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Пояснительная записка к приложению.

Приложение выполнено с использованием js-фреймворка Angular и предназначено для поиска текстовой информации в Wikipedia. 
Из дополнительных фишек в приложении реализован следующий функционал: сохранение истории поисковых запросов и две темы интерфейса,
с возможностью быстрого переключения и с сохранением выбранной темы при обновлении страницы.

Приложение состоит из:
- шапки, в которорой реализован выбор темы интерфейса, на выбор предоставляется две темы: основная и темная
- поля поиска, куда вводить запрос, после чего нажать рядом кнопку для поиска. При наличии истории запросов, будут выводиться подсказки.
- Вывод результатов, которые содержат заголовок статьи, который является ссылкой на ее полную версию на Wikipedia, и сниппет (краткая информация статьи).

В приложении реализовано 
4 компонента:
 wiki-search-page  содержит в себе все приложение, инжектит WikiSearchService (который стучится в API Wikipedia) и ThemeService (реализующий смену темы интерфейса), и включает в себя три следующих компонента:
 header-bar - шапка приложения, в которой через select предоставляется выбор темы интерфейса '_default' или '_dark', инжектит ThemeService, который осуществляет смену темы. 
 wiki-search-bar - компонент с полем поиска и кнопкой 'Найти', инжектит WikiSearchService (для получения истории из localStorage) и ThemeService (реализующий смену стилей компонента)
 search-result - компонент выдающий результаты поиска, инжектит ThemeService, который осуществляет смену темы компонента.

3 сервиса:
WikiSearchService - получает данные по запросу из API Wikipedia, преобразует полученные массивы в новый массив с результатами, сохраняет историю запросов и получает ее.
ThemeService - Отвечает за установку и восстановление темы.
LocalStorageService - для сохранения данных в localStorage и получения их из него

