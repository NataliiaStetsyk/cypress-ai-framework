
# 🚀 Cypress + TypeScript + AI Validation Framework

![Cypress](https://img.shields.io/badge/Tested%20with-Cypress-04C38E?logo=cypress\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![OpenAI](https://img.shields.io/badge/AI%20Validation-OpenAI-412991?logo=openai)
![License](https://img.shields.io/badge/License-MIT-green)

A modern QA automation demo showcasing **Cypress**, **TypeScript**, **AI-powered validation**, **visual regression testing**, and **API/UI flows**.
Designed to be clear, lightweight, and easy to extend.

---

## 📌 What This Framework Tests

### 🔗 Base URL

```
http://localhost:3000
```

### 🧪 Automated coverage includes:

* **AI Editor UI** (`/ai-editor`)
* **Root page smoke tests**
* **API endpoints**

  * `GET /api/health`
  * `POST /api/login`
* **AI text verification** (OpenAI)
* **Visual snapshot testing** (image diffs)

---

## 📁 Test Specs Overview

| Spec File           | Purpose                                                   |
| ------------------- | --------------------------------------------------------- |
| **ai_text.cy.ts**   | Generates content in the AI Editor + validates via OpenAI |
| **ai_visual.cy.ts** | Captures snapshot of generated text and compares image    |
| **api_test.cy.ts**  | Tests health endpoint + login flow                        |
| **ui_test.cy.ts**   | Basic UI smoke checks                                     |

---

## 🧠 AI Validation — How It Works

AI checks run through a secure **Node plugin task**:

1. Test calls:
   `cy.validateTextWithAI(prompt, text)`
2. Cypress triggers plugin (`validateAIText`)
3. Plugin calls **OpenAI (gpt-5.1)** using `process.env.OPENAI_API_KEY`

✔ **API key stays in Node**, never in browser
✔ **If no key is set → validation automatically skips**
✔ Zero failures from missing credentials

---

## ▶️ How to Run

### 1. Install dependencies

```bash
npm install
```

### 2. (Optional) Enable AI validation

```bash
export OPENAI_API_KEY="sk-..."
```

### 3. Start local test server

```bash
npm run start
```

### 4. Run Cypress in GUI mode

```bash
npm run cypress:open
```

### 5. Run headless

```bash
npm run cypress:run
```

---

## 🧱 Project Structure

```
cypress/
  integration/
    ai_content/
      ai_text.cy.ts
      ai_visual.cy.ts
    api/
      api_test.cy.ts
    ui/
      ui_test.cy.ts
  support/
    commands.ts
    ai.ts
    index.ts
  plugins/
    index.js
snapshots/
server.js
cypress.config.js
package.json
README.md
```

---

## 🛠️ Tech & Best Practices Used

* Cypress + TypeScript
* Page Object Model (POM)
* AI validation through OpenAI
* Visual regression testing (cypress-image-snapshot)
* Custom commands + fixtures
* Mochawesome HTML reports
* Environment-controlled AI validation
* Clean folder structure for UI/API/AI tests

---

## ✔️ Quick Summary

This framework demonstrates:

* Modern Cypress testing patterns
* AI-assisted validation workflows
* Snapshot testing for visual stability
* API + UI automation in one place
* Secure handling of AI keys via Node tasks

