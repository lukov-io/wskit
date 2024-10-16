const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
  },
});
