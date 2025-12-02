import { EditorPage } from '../ai_content/pages/EditorPage'

describe('UI - Basic Smoke Tests', () => {
  const editor = new EditorPage()

  it('visits root and finds the AI Editor heading', () => {
    cy.visit('/')
    cy.contains('h1', 'AI Editor (Test Fixture)')
  })

  it('can generate text via the editor UI', () => {
    cy.visit('/ai-editor')
    editor.typeTextArea('Run a quick check')
    editor.clickGenerateButton()
    editor.getGeneratedText().should('contain.text', 'Checklist:')
  })
})
