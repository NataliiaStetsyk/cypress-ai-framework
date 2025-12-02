/// <reference types="cypress" />

// AI helper utilities for Cypress tests (TypeScript)

const buildPrompt = (templateName: string, data: Record<string, any> = {}) => {
  const templates: Record<string, (d: any) => string> = {
    short_product_description: (d) => `Write a short, friendly product description for ${d.productName} in 2-3 sentences.`,
  }
  const fn = templates[templateName]
  return fn ? fn(data) : ''
}

// Expose under Cypress for convenience
// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(Cypress as any).ai = { buildPrompt }

export { buildPrompt }
