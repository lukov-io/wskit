# WSKit

## Description

`wskit` is a collection of JavaScript modules designed to simplify working with commonly used functions and elements 
on web pages. The modules can be connected individually, allowing flexible control over the functionality of your 
project.

- [Documentation](https://lukov-io.github.io/wskit/)

## Installation

You can install the entire package via npm:

```bash
npm install @lukovio/wskit
```

## List of Modules

### cookie

A module for working with cookies: setting and retrieving values.
- [cookie Documentation](https://lukov-io.github.io/wskit/docs/cookie/)
- [cookie Example](https://lukov-io.github.io/wskit/docs/cookie/example/)

### tabs

A module for implementing tabs with various behavior modes.
- [tabs Documentation](https://lukov-io.github.io/wskit/docs/tabs/)
- [tabs Example](https://lukov-io.github.io/wskit/docs/tabs/example/)

### accordion

A module for creating accordions with the ability to display one or multiple open items.
- [Documentation](https://lukov-io.github.io/wskit/docs/accordion/)
- [Examples](https://lukov-io.github.io/wskit/docs/accordion/example/)

### readMore

A module for hiding and showing long texts with a "Read More" button.
- [readMore Documentation](https://lukov-io.github.io/wskit/docs/readMore/)
- [readMore Example](https://lukov-io.github.io/wskit/docs/readMore/example/)

### devices

A module for detecting the type of device (mobile or desktop).
- [devices Documentation](https://lukov-io.github.io/wskit/docs/devices/)
- [devices Example](https://lukov-io.github.io/wskit/docs/devices/example/)

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

## Notes

Each module can be connected individually and used as an independent component. Additional examples
and detailed documentation are available for each module.
