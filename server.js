const http = require('http')

const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>AI Editor - Test Server</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px }
    #generated-text { margin-top: 16px; padding: 12px; border: 1px solid #ddd; background: #fff }
  </style>
</head>
<body>
  <h1>AI Editor (Test Fixture)</h1>
  <textarea id="ai-textarea" rows="4" cols="60">Write a short QA test checklist</textarea>
  <br/><br/>
  <button id="generate-btn">Generate</button>

  <div id="generated-text" aria-live="polite"></div>

  <script>
    try {
      const btn = document.getElementById('generate-btn')
      const ta = document.getElementById('ai-textarea')
      const out = document.getElementById('generated-text')
      btn.addEventListener('click', () => {
        const prompt = ta.value || ''
        // Simple deterministic generated text for tests
        const generated = 'Checklist:\\n1. Verify inputs\\n2. Run tests\\n3. Assert results\\nPrompt: ' + prompt
        out.textContent = generated
      })
    } catch (e) {
      const out = document.getElementById('generated-text')
      if (out) out.textContent = 'APP_ERROR: ' + (e && e.message ? e.message : String(e))
      // also surface to window for Cypress to inspect
      window.__APP_ERROR__ = e
    }
  </script>
</body>
</html>`

const server = http.createServer((req, res) => {
  if (req.url === '/ai-editor' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(html)
    return
  }
  res.writeHead(404)
  res.end('Not found')
})

const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`Test server listening on http://localhost:${port}`)
})

// Allow clean exit
process.on('SIGTERM', () => server.close())
process.on('SIGINT', () => server.close())
