# js-utils-for-sites

**`js-utils-for-sites`** — это коллекция часто используемых JavaScript утилит для веб-сайтов, которые помогут вам быстро и легко работать с повседневными задачами разработки. Этот репозиторий построен как монорепозиторий, включающий несколько небольших пакетов, каждый из которых решает отдельную задачу.

## Содержание

- [Установка](#установка)
- [Модули](#модули)
    - [Cookie Module](#cookie-module)
- [Использование](#использование)
- [Добавление новых модулей](#добавление-новых-модулей)
- [Лицензия](#лицензия)

## Установка

Вы можете установить любой из модулей, используя npm:

```bash
npm install <имя-модуля>
```

Пример для модуля работы с куки:

```bash
npm install js-utils-for-sites-cookie-module
```

## Модули

### Cookie Module

Модуль `js-utils-for-sites-cookie-module` предоставляет простые функции для работы с куки браузера.

- **`cookieUtils.setCookie(name, value, days)`** — Устанавливает cookie с заданным именем, значением и временем жизни.
- **`cookieUtils.getCookie(name)`** — Получает значение cookie по его имени.

Пример использования:

```javascript
import { cookieUtils } from 'js-utils-for-sites-cookie-module';

// Установка cookie на 7 дней
cookieUtils.setCookie('userPreference', 'darkMode', 7);

// Получение значения cookie
const preference = cookieUtils.getCookie('userPreference');
console.log(preference); // Выводит: 'darkMode'
```


## Использование

Каждый модуль в этом репозитории публикуется как отдельный пакет в npm. Вы можете устанавливать и использовать их по мере необходимости.

## Добавление новых модулей

Чтобы добавить новый модуль:

1. Создайте новую папку в директории `packages/`, например, `packages/my-new-module`.
2. Добавьте необходимые файлы для вашего модуля (`package.json`, `src/index.js`, `README.md`).
3. Добавьте ваш код и протестируйте его.
4. Добавьте в оглавление и кратко опишите модуль в `js-utils-for-sites/readme.md`.
5. Опубликуйте новый модуль на npm:
```bash
cd packages/my-new-module
npm publish
```
