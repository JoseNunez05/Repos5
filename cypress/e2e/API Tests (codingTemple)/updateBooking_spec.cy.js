describe('update booking', () => {

    it('put method nvm... its get again', () => {

        cy.request("GET", "https://restful-booker.herokuapp.com/booking/1")
        .its('status')
        .should('equal');

    })
})

