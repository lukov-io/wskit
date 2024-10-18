# js-utils

## Description

`js-utils` is a collection of JavaScript modules designed to simplify working with commonly used functions and elements 
on web pages. The modules can be connected individually, allowing flexible control over the functionality of your 
project.

## Installation

You can install the entire package via npm:

```bash
npm install js-utils
```

Or include modules individually, depending on your needs.

## List of Modules

### cookie

A module for working with cookies: setting and retrieving values.

Usage example:

```javascript
import { cookie } from 'js-utils';

cookie.set('key', 'value', 7);
const value = cookie.get('key');
cookie.remove('key');
```

- [cookie Documentation](_post/docs/cookie.md)
- [cookie Example](examples/cookie.html)

### tabs

A module for implementing tabs with various behavior modes.

Usage example:

```javascript
import { tabs } from 'js-utils';

tabs.run();
```
```html
<div class="tabs" 
     data-tabs="openByClass" 
     data-active-button-class="active-button" 
     data-active-content-class="active-content">
  <div class="tabs__header">
    <span data-tab-button="tab1">Tab 1</span>
    <span data-tab-button="tab2">Tab 2</span>
    <span data-tab-button="tab3">Tab 3</span>
  </div>
  <div data-tab-content="tab1">
    <h2>Content for Tab 1</h2>
    <p>This is the content for Tab 1.</p>
  </div>
  <div data-tab-content="tab2">
    <h2>Content for Tab 2</h2>
    <p>This is the content for Tab 2.</p>
  </div>
  <div data-tab-content="tab3">
    <h2>Content for Tab 3</h2>
    <p>This is the content for Tab 3.</p>
  </div>
</div>
```

- [tabs Documentation](_post/docs/tabs.md)
- [tabs Example](examples/tabs.html)

### accordion

A module for creating accordions with the ability to display one or multiple open items.

Usage example:

```javascript
import { accordion } from 'js-utils';

accordion.run();
```

```html
<div class="accordion" 
     data-accordion="single" 
     data-accordion-active-class='custom-class'>
  <div class="accordion__item" data-accordion-item>
    <h2 class="accordion__item-title">Title</h2>
    <div class="accordion__item-content">Content</div>
  </div>
</div>
```

- [accordion Documentation](_post/docs/accordion.md)
- [accordion Example](examples/accordion.html)

### readMore

A module for hiding and showing long texts with a "Read More" button.

Usage example:

```javascript
import { readMore } from 'js-utils';

readMore.run();
```

```html
<div class="read-more-block" 
     data-read-more 
     data-read-more-active-class="active">
  <div>Content to show/hide</div>
  <button data-read-more-toggler 
          data-more-text="Read More" 
          data-less-text="Read Less">Read More</button>
</div>
```

- [readMore Documentation](_post/docs/readMore.md)
- [readMore Example](examples/readMore.html)

### devices

A module for detecting the type of device (mobile or desktop).

Usage example:

```javascript
import { devices } from 'js-utils';

if (devices.mobile()) {
  doSomethingOnMobileOnly();
}
```

- [devices Documentation](_post/docs/devices.md)
- [devices Example](examples/devices.html)

## Testing and Running Examples

For local development and testing of modules, a local HTTP server is provided. This allows you to view examples and run 
tests.

# npm Commands

- **dev**: Runs the project in development mode using Parcel and opens it in the browser.
```bash
npm run dev
```

- **build**: Builds the project for production using Parcel and places the compiled files in the `dist` folder.
```bash
npm run build
```

- **test**: Starts a local server with Parcel and runs the Cypress tests. The server stops after the tests are completed.
```bash
npm run test
```


- **start-server**: Starts a local server with Parcel without caching.
```bash
npm run start-server
```

- **cypress**: Opens the Cypress interface for manual test execution.
```bash
npm run cypress
```

- **dev-tests**: Starts a local server with Parcel and opens the Cypress interface for manual testing.
```bash
npm run dev-tests
```

Tests cover the main functionalities of each module and check operation in different modes.

- [Cypress Documentation](https://docs.cypress.io/)
- [Installation Notes for Linux](https://docs.cypress.io/guides/getting-started/installing-cypress#Linux-Prerequisites)

# Project Structure

Here is the structure of the `js-utils` project:

```bash
js-utils/
│
├── cypress/
│   └── integration(tests)/
│       ├── accordion.cy.js
│       ├── cookie.cy.js
│       ├── devices.cy.js
│       ├── readMore.cy.js
│       └── tabs.cy.js
│  
├── docs/
│   ├── accordion.md
│   ├── cookie.md
│   ├── devices.md
│   ├── readMore.md
│   └── tabs.md
│
├── examples/
│   ├── accordion.html
│   ├── cookie.html
│   ├── devices.html
│   ├── readMore.html
│   └── tabs.html
│
├── js/
│   ├── accordion.js
│   ├── cookie.js
│   ├── devices.js
│   ├── readMore.js
│   └── tabs.js
│
├── cypress.config.js
├── exportModules.js
├── package.json
├── README.md
└── .gitignore
```

### Description of Structure

- **docs/**: Documentation for each module.
- **examples/**: HTML examples for each module.
- **js/**: JavaScript modules for various components (accordion, cookie, devices, readMore, tabs).
- **test/**: Tests for each module.
- **package.json**: npm configuration file.
- **README.md**: Main project description.
- **.gitignore**: List of files and directories to ignore by Git.

This structure ensures that each module has its own documentation, examples, and tests, making them easily accessible
and organized into separate folders.

## Notes

Each module can be connected individually and used as an independent component. Additional examples
and detailed documentation are available for each module.
# LearnGHP.github.io
