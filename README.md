# Cypress + TypeScript + AI Validation Test Framework

This repository contains a small Cypress test framework scaffold that demonstrates:

- Cypress + TypeScript support
- Page Object Model (POM)
- AI-powered validation via OpenAI (secure: Node plugin task)
- Custom Cypress commands
- Fixtures folder for test data
- Mochawesome reporting

Quick start

1. Install dependencies

```bash
cd /Users/natala/cypress
npm install
```

2. Set your OpenAI API key in the environment (macOS zsh example)

```bash
export OPENAI_API_KEY="sk-..."
```

AI validation behavior

- The test framework calls OpenAI from the Cypress Node plugins process to keep API keys secure.
- If `OPENAI_API_KEY` is not set, `cy.validateTextWithAI(...)` will skip AI validation and log a message rather than fail the test. This allows you to run the suite without a key for local development.

To force AI validation in CI, set the `OPENAI_API_KEY` secret in your CI environment (see `.github/workflows/cypress.yml`).

3. Open Cypress GUI

```bash
npx cypress open
# or
npm run cypress:open
```

4. Run headless

```bash
npm run cypress:run
```

Files added/updated

- `tsconfig.json` — TypeScript config for tests
- `integration/ai_content/pages/EditorPage.ts` — Page Object example
- `integration/ai_content/ai_text.cy.ts` — Example AI validation test (TypeScript)
-- `support/commands.ts` — Added `validateTextWithAI` command
- `plugins/index.js` — Added `validateAIText` task that uses OpenAI
- `cypress.config.js` — Reporter configuration
- `package.json` — Updated devDependencies and scripts

Notes

- OpenAI calls are executed from the Node process (plugins task) to keep API keys secure.
- The example uses `gpt-5.1` in the task; change model to whichever is available to you.
- If you prefer to convert support files to TypeScript as well, I can migrate them.

Next steps I can take for you

- Run `npm install` and open Cypress now (I can run it in the terminal).
- Migrate `support` files to TypeScript.
- Add visual snapshot plugin wiring (`cypress-image-snapshot`) and an example test.
- Add CI config (GitHub Actions) to run tests and upload reports.

What I added now

- Migrated `support` helpers to TypeScript: `support/index.ts`, `support/commands.ts`, `support/ai.ts`, and type defs in `support/types.d.ts`.
- Wired `cypress-image-snapshot` and `cypress-mochawesome-reporter` in `plugins/index.js` and `support/index.ts`.
- Added an example visual test: `integration/ai_content/ai_visual.cy.ts`.
- Added GitHub Actions workflow: `.github/workflows/cypress.yml`.

Which next step would you like me to do?
