import { EditorPage } from './pages/EditorPage'

describe('AI Text Generation Tests', () => {
  const editor = new EditorPage()

  it('should generate correct AI content', () => {
    const prompt = 'Write a short QA test checklist'

    cy.visit('/ai-editor')
    editor.typeTextArea(prompt)
    editor.clickGenerateButton()

    editor.getGeneratedText().invoke('text').then((text) => {
      cy.validateTextWithAI(prompt, text)
    })
  })
})
