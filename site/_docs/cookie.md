---
title: Documentation
permalink: /docs/cookie/
tags: 
  - cookie
---
A module for managing cookies. This module provides functions for setting, getting, and removing cookies.

### Usage 
Import the module into your JS:
```javascript
import { cookie } from 'js-utils';
```

#### Example Usage
```javascript
// Set a cookie with a 7-day expiration
cookie.set('username', 'JohnDoe', 7);

// Get the value of a cookie
const username = cookie.get('username');

// Remove a cookie
cookie.remove('username');
```
### API

#### `set(name, value, days)`

Sets a cookie with the specified name, value, and expiration time in days.

**Parameters:**
- `name` (string): The name of the cookie.
- `value` (string): The value of the cookie.
- `days` (number): The expiration time in days.

#### `get(name)`

Gets the value of a cookie by its name.

**Parameters:**
- `name` (string): The name of the cookie.

**Returns:**
- (string or null): The value of the cookie or `null` if the cookie is not found.

#### `remove(name)`

Removes a cookie by setting its expiration to the past.

**Parameters:**
- `name` (string): The name of the cookie to remove.

### Notes

This module provides simple methods for setting and getting cookies. You can set a cookie by providing its name, value, and expiration time. The module also allows you to easily retrieve the value of a cookie or delete it by its name. Everything is implemented with straightforward methods to minimize code and enhance convenience when working with cookies.
