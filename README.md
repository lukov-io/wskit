# JS Utils

## Description

`js-utils` is a collection of JavaScript modules designed to simplify working with commonly used functions and elements 
on web pages. The modules can be connected individually, allowing flexible control over the functionality of your 
project.

## Installation

You can install the entire package via npm:

```bash
npm install js-utils
```

## List of Modules

### cookie

A module for working with cookies: setting and retrieving values.
- [cookie Documentation](js/docs/cookie.md)
- [cookie Example](js/examples/cookie.html)

### tabs

A module for implementing tabs with various behavior modes.
- [tabs Documentation](js/docs/tabs.md)
- [tabs Example](js/examples/tabs.html)

### accordion

A module for creating accordions with the ability to display one or multiple open items.
- [Documentation](https://lukov-io.github.io/js-utils/docs/accordion/)
- [Examples](https://lukov-io.github.io/js-utils/docs/accordion/example/)

### readMore

A module for hiding and showing long texts with a "Read More" button.
- [readMore Documentation](js/docs/readMore.md)
- [readMore Example](js/examples/readMore.html)

### devices

A module for detecting the type of device (mobile or desktop).
- [devices Documentation](js/docs/devices.md)
- [devices Example](js/examples/devices.html)

## Testing and Running Examples

For local development and testing of modules, a local HTTP server is provided. This allows you to view examples and run 
tests.

### Commands

- **dev**: Runs the project in development mode using Rollup and watches for changes.
```bash
$ npm run dev
```

- **build**: Builds the project for production using Rollup and places the compiled files in the `dist` folder.
```bash
$ npm run build
```

- **start-server**: Starts a local server using http-server on port 3001.
```bash
$ npm run start-server
```

- **cypress**: Opens the Cypress interface for manual test execution.
```bash
$ npm run cypress
```

- **tests**: Starts a local server and runs the Cypress tests, stopping the server after the tests complete.
```bash
$ npm run tests
```

- **dev-tests**: Starts a local server and opens the Cypress interface for manual testing.
```bash
$ npm run dev-tests
```

- **jekyll-build-incremental**: Copies built files to the site and performs an incremental Jekyll build.
```bash
$ npm run jekyll-build-incremental
```

- **jekyll-serve**: Copies built files to the site and starts the Jekyll server on port 8080.
```bash
$ npm run jekyll-serve
```

- **jekyll-build**: Copies built files to the site and performs a Jekyll build.
```bash
$ npm run jekyll-build
```

- **copy-build-to-site**: Builds the project and copies the compiled files to `site/assets/js`.
```bash
$ npm run copy-build-to-site
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
├── cypress.config.cjs
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
