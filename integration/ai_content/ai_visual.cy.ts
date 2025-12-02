import { EditorPage } from './pages/EditorPage'

describe('AI Visual Snapshot', () => {
  const editor = new EditorPage()

  it('captures generated text and matches snapshot', () => {
    cy.visit('/ai-editor')
    const prompt = 'Write a short QA test checklist'
    editor.typeTextArea(prompt)
    editor.clickGenerateButton()

    // wait for generated text to appear, then snapshot
    editor.getGeneratedText().should('be.visible')
    editor.getGeneratedText().matchImageSnapshot('ai-generated-text')
  })
})
