const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '2pbees',
  fixturesFolder: 'fixtures',
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'integration/**/*.cy.{ts,tsx}',
    supportFile: 'support/index.ts',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: true,
    json: true,
    reportDir: 'cypress/reports'
  },
})
