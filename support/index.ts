/// <reference types="cypress" />

// Use require() so bundlers keep side-effectful command registration
// Require the TypeScript modules explicitly to avoid picking up legacy .js files
require('./commands.ts')
require('./ai.ts')

// Register mochawesome reporter for screenshots/attachments
// This import registers reporter hooks
// Note: reporter registration is required for mochawesome to pick up screenshots
require('cypress-mochawesome-reporter/register')

// Register image snapshot command
const { addMatchImageSnapshotCommand } = require('cypress-image-snapshot/command')
addMatchImageSnapshotCommand()

// expose ai helper under Cypress global for convenience
// (support/ai.ts already attaches helpers to Cypress)
