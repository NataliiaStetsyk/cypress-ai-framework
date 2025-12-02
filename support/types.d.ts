/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    validateTextWithAI(prompt: string, actualText: string): Chainable<any>
    login(username: string, password: string): Chainable<any>
    matchImageSnapshot(name?: string, options?: any): Chainable<any>
  }

  // allow Cypress.ai helper
  interface CypressStatic {
    ai?: { buildPrompt: (templateName: string, data?: Record<string, any>) => string }
  }
}
