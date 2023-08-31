describe('delete booking', () => {

    it('bye bye booking!', () => {

        cy.request({

            method: 'DELETE',
            url: 'https://restful-booker.herokuapp.com/booking/:id'
            
            .its('status')
            .should('equal', 200)
            
        })

    })

})