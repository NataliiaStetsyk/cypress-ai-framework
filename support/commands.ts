/// <reference types="cypress" />

// Custom Cypress commands (TypeScript)

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.request('POST', '/api/login', { username, password }).then((resp) => {
    if (resp.body && resp.body.token) {
      // eslint-disable-next-line no-undef
      window.localStorage.setItem('authToken', resp.body.token)
    }
  })
})

// AI validation command: calls a node task (secure) which uses OpenAI
Cypress.Commands.add('validateTextWithAI', (prompt: string, actualText: string) => {
  cy.wrap(null).then(() => {
    return cy.task('validateAIText', { prompt, generatedText: actualText }).then((result) => {
      // If OpenAI key isn't configured, skip AI validation instead of failing tests.
      if (typeof result === 'string' && result === 'MISSING_API_KEY') {
        // Log an informative message in the Cypress runner output and continue.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        Cypress.log({ name: 'validateTextWithAI', message: 'OPENAI_API_KEY not set — skipping AI validation' })
        return 'SKIPPED'
      }

      if (typeof result === 'string' && result.startsWith('ERROR:')) {
        throw new Error(result)
      }

      expect((result as string).toLowerCase()).to.include('correct')
      return result
    })
  })
})
