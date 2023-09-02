describe('new booking update', () => {

    it('patch method', () => {

        cy.request({

            method: 'PUT',
            url: 'https://restful-booker.herokuapp.com/booking/:id',
            body: {

                firstname: 'James',
                lastname: 'Brown'

            }

            .its('stauts')
            .should('equal', 200)

        })

    })

})