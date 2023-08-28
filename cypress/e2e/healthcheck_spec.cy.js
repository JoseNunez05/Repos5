// checking the status of the website in general
describe('HTTP Requests', ()=> {
    it('GET thing', ()=> {
      cy.request('GET', 'https://restful-booker.herokuapp.com/apidoc/index.html')
        .its('status')
        .should('equal', 200);
    })
})



describe('API CALL', ()=> {

  it('GET Call', ()=> {

    cy.request('GET', 'https://restful-booker.herokuapp.com/ping')
      .its('status')
      .should('equal', 201);

  })

})


























// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://restful-booker.herokuapp.com/apidoc/index.html')
//   })
// })