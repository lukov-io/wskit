# js-utils-for-sites-cookie-module

`js-utils-for-sites-cookie-module` — это простой JavaScript модуль для работы с куки в браузере. Он позволяет легко устанавливать, получать и управлять значениями куки на вашем веб-сайте.

## Установка

Установите модуль через npm:

```bash
npm install js-utils-for-sites-cookie-module
```

## Использование

### Импорт

Вы можете импортировать функции `setCookie` и `getCookie` следующим образом:

```javascript
import { setCookie, getCookie } from 'js-utils-for-sites-cookie-module';
```

### API

#### `setCookie(name, value, days)`

Устанавливает cookie с заданным именем, значением и временем жизни.

- **name** (string) - Имя cookie.
- **value** (string) - Значение cookie.
- **days** (number) - Количество дней, в течение которых cookie будет существовать. Если не указано, cookie будет установлено как временное.

**Пример:**

```javascript
setCookie('username', 'JohnDoe', 7); // Устанавливает cookie 'username' со значением 'JohnDoe' на 7 дней
```

#### `getCookie(name)`

Получает значение cookie по его имени.

- **name** (string) - Имя cookie, значение которого вы хотите получить.

- **Возвращает** (string|null) - Значение cookie или `null`, если cookie не найдено.

**Пример:**

```javascript
const username = getCookie('username'); // Получает значение cookie 'username'
console.log(username); // Выводит: 'JohnDoe'
```

## Примеры

Вот пример использования модуля для работы с куки:

```javascript
import { setCookie, getCookie } from 'js-utils-for-sites-cookie-module';

// Установка cookie на 7 дней
setCookie('userPreference', 'darkMode', 7);

// Получение значения cookie
const preference = getCookie('userPreference');
console.log(preference); // Выводит: 'darkMode'
```
