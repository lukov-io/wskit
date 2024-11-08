---
title: WSKit 
permalink: /docs/home/
redirect_from: /docs/index.html
---

`wskit` is a collection of JavaScript modules designed to simplify working with commonly used functions and elements
on web pages. The modules can be connected individually, allowing flexible control over the functionality of your
project.

### Installation

You can install the entire package via npm:

```bash
npm install @lukovio/wskit
```

### Testing and Running Examples

For local development and testing of modules, a local HTTP server is provided. This allows you to view examples and run
tests.

Tests cover the main functionalities of each module and check operation in different modes.

- [Cypress Documentation](https://docs.cypress.io/)
- [Installation Notes for Linux](https://docs.cypress.io/guides/getting-started/installing-cypress#Linux-Prerequisites)

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

## Project Structure

Here is the structure of the `wskit` project:

```bash
wskit/
│
├── cypress/
│   └── integration(tests)/
│       ├── accordion.cy.js
│       ├── cookie.cy.js
│       ├── devices.cy.js
│       ├── readMore.cy.js
│       └── tabs.cy.js
│ 
├── dist/
│   ├── js
│   │   ├── components
│   │   └── bundle.js
│   │
│   └── site
│       └── ...
│ 
├── html-examples
│   ├── accordion.html
│   ├── cookie.html
│   ├── devices.html
│   ├── readMore.html
│   └── tabs.html
│ 
├── js/
│   ├── components
│   │   ├── accordion.js
│   │   ├── cookie.js
│   │   ├── devices.js
│   │   ├── readMore.js
│   │   └── tabs.js
│   │ 
│   └── index.js
│
├── site
│   ├──...
│   └──...
│
├── .npmignore
├── cypress.config.cjs
├── package.json
├── README.md
├── rollup.config.js
└── .gitignore
```

#### Description of Structure

# Project Structure

- **cypress/**: Directory containing all tests written using Cypress.
  - **integration/**: Contains test files for various components.
    - **accordion.cy.js**: Tests for the accordion functionality.
    - **cookie.cy.js**: Tests for the cookie handling module.
    - **devices.cy.js**: Tests for the device detection module.
    - **readMore.cy.js**: Tests for the "Read More" functionality.
    - **tabs.cy.js**: Tests for the tabs module.

- **dist/**: Folder for storing compiled files that are ready for production use.
  - **js/**: Contains compiled JavaScript files.
  - **site/**: Contains static site files (e.g., HTML, CSS, and JS) used for deployment.

- **html-examples/**: Folder containing HTML example files to demonstrate the functionality of the components.
  - **accordion.html**: Example of using the accordion.
  - **cookie.html**: Example of using the cookie handling.
  - **devices.html**: Example of using the device detection module.
  - **readMore.html**: Example of using the "Read More" functionality.
  - **tabs.html**: Example of using the tabs.

- **js/**: Main folder containing the source code of JavaScript modules.
  - **components/**: Contains source JavaScript files for various components.
    - **accordion.js**: Implementation of the accordion functionality.
    - **cookie.js**: Implementation of the cookie handling.
    - **devices.js**: Implementation of the device detection.
    - **readMore.js**: Implementation of the "Read More" functionality.
    - **tabs.js**: Implementation of the tabs functionality.

  - **index.js**: Main file that initializes and exports all modules from the `components` folder.

- **site/**: Folder for storing site files, which may include additional static resources, configurations, and more. (Exact contents are not specified in the structure.)

- **cypress.config.cjs**: Configuration file for Cypress where test settings can be defined.

- **package.json**: File describing the project, its dependencies, scripts, and metadata.

- **README.md**: Project documentation containing information on how to use and install the project.

- **rollup.config.js**: Configuration file for the Rollup bundler, which defines how to compile and package the modules.

- **.gitignore**: File that specifies which files and folders should be ignored by Git during commits.

This structure ensures that each module has its own documentation, examples, and tests, making them easily accessible
and organized into separate folders.

### Notes

Each module can be connected individually and used as an independent component. Additional examples
and detailed documentation are available for each module.
