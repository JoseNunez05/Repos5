describe('update booking', () => {

    it('put method', () => {

        cy.request({

            method: 'PUT',
            url: 'https://restful-booker.herokuapp.com/booking/:id',

            body: {

                 firstname : "James",
                 lastname : "Brown",
                 totalprice: 111,
                 depositpaid: true,
                 bookingdates: {

                    checkin: "2018-01-01",
                    checkout: "2019-01-01"

                    },
                }

                .its('status')
                .should('equal', 200)

        })

    })
})