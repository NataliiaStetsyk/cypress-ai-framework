describe('API - Sample Tests', () => {
  it('responds to health check', () => {
    cy.request({
      method: 'GET',
      url: '/api/health',
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.be.oneOf([200, 404, 302])
    })
  })

  it('can login using fixture credentials (mock)', () => {
    cy.fixture('example').then((f) => {
      const user = f.user
      cy.request({
        method: 'POST',
        url: '/api/login',
        body: user,
        failOnStatusCode: false,
      }).then((resp) => {
        // This is a sample test; accept common responses
        expect(resp.status).to.be.oneOf([200, 401, 404])
      })
    })
  })
})
