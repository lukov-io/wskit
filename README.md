# js-utils-for-sites

**`js-utils-for-sites`** — это коллекция часто используемых JavaScript утилит для веб-сайтов, 
которые помогут вам быстро и легко работать повседневными задачами разработки.

## Содержание

- [Установка](#установка)
- [Модули](#модули)
    - [Cookie Module](#cookie-module)
- [Использование](#использование)
- [Добавление новых модулей](#добавление-новых-модулей)
- [Лицензия](#лицензия)

## Установка

Вы можете установить утилиты используя npm:

```bash
npm install js-utils-for-sites
```

## Модули

### Cookie Module

- **`cookieUtils.setCookie(name, value, days)`** — Устанавливает cookie с заданным именем, значением и временем жизни.
- **`cookieUtils.getCookie(name)`** — Получает значение cookie по его имени.

Пример использования:

```javascript
import { cookieUtils } from 'js-utils-for-sites';

// Установка cookie на 7 дней
cookieUtils.setCookie('userPreference', 'darkMode', 7);

// Получение значения cookie
const preference = cookieUtils.getCookie('userPreference');
console.log(preference); // Выводит: 'darkMode'
```
