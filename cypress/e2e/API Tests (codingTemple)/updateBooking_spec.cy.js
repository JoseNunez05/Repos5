describe('update booking', () => {

    it('put method nvm... its get again', () => {

        cy.request({

            method: 'PUT',
            url: 'https://restful-booker.herokuapp.com/booking/1',
            headers:
            {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': 'token=60b2eba9971d991'
            },
            body:
            {
                firstname : "James",
                lastname : "Brown",
                totalprice : 111,
                depositpaid : true,
                bookingdates : {
                    checkin : "2018-01-01",
                    checkout : "2019-01-01"
                },
                additionalneeds : "Breakfast"
            }

        })

    })
})

