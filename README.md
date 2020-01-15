# avito-safedeal-trainee

### Тестовое задание в юнит Safedeal.
​
### Технологии:
Проект написан на React, собран Webpack.

### Задание: 
Необходимо сверстать адаптивную страницу со списком фотографий и модельным окном.
​
### Запросы:
* GET `https://boiling-refuge-66454.herokuapp.com/images` - получение списка фотографий.
* GET `https://boiling-refuge-66454.herokuapp.com/images/:imageId` - получения большого изображения и списка комментариев.
* POST `https://boiling-refuge-66454.herokuapp.com/images/:imageId/comments` - добавление комментария (204 – OK, комментарий не сохраняется).

### Установка:
1. Скачать репозиторий:
```git clone git@github.com:risesk/avito-safedeal-trainee.git```
2. Установить npm-зависимости:
```npm i```
3. Произвести сборку проекта:
```npm run build```
4. Или запустить проект на локальном сервере http://localhost:8080:
```npm run start```

### TODO: 
1. Улучшить UX:  Добавить лоадеры на асинхронные операции.

​
Сслыка на задание: https://github.com/avito-tech/safedeal-frontend-trainee
