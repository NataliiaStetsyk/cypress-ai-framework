// Cypress plugins file
// For more info: https://docs.cypress.io/guides/tooling/plugins-guide
const { OpenAI } = require('openai')
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')
const mochawesome = require('cypress-mochawesome-reporter/plugin')

module.exports = (on, config) => {
  // register mochawesome reporter plugin
  mochawesome(on)

  // register image snapshot plugin
  addMatchImageSnapshotPlugin(on, config)

  // Add a task to validate AI-generated text using OpenAI from Node (secure: uses env var)
  on('task', {
    async validateAIText({ prompt, generatedText }) {
      const apiKey = process.env.OPENAI_API_KEY
      if (!apiKey) {
        // return an error string so tests can fail with helpful info
        return `MISSING_API_KEY`
      }

      const client = new OpenAI({ apiKey })

      try {
        const response = await client.chat.completions.create({
          model: 'gpt-5.1',
          messages: [
            { role: 'system', content: 'You are a QA automation assistant.' },
            { role: 'user', content: `Validate this text for correctness: ${generatedText}. Prompt: ${prompt}` },
          ],
          temperature: 0.3,
        })

        const content = response.choices?.[0]?.message?.content || ''
        return content
      } catch (err) {
        return `ERROR: ${err.message || err}`
      }
    },
  })
  // Return config back to Cypress
  return config
}
