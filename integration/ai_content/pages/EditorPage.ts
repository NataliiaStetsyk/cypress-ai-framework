export class EditorPage {
  typeTextArea(text: string) {
    cy.get('#ai-textarea').clear().type(text)
  }

  clickGenerateButton() {
    cy.get('#generate-btn').click()
  }

  getGeneratedText() {
    return cy.get('#generated-text')
  }
}
