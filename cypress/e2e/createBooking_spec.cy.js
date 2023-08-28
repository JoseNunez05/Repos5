describe('HTTP Requests', ()=> {

    it('GET thing', ()=> {
      cy.request('GET', 'https://restful-booker.herokuapp.com/apidoc/index.html')
        .its('status')
        .should('equal', 200);
    })

        it('Post Call', ()=>{
        cy.request({

                method: 'POST',
                url:    'https://restful-booker.herokuapp.com/booking',
                body: {
                        firstname: "Jim",
                        lastname: "Brown",
                        totalprice : 111,
                        depositpaid : true,
                        bookingdates : {
                            checkin: "2018-01-01",
                            checkout: "2019-01-01",
                        },
                      }

            .its('status')
            .should('equal', 200),

        })
    })
})


// describe('POST Request', ()=> {
//     it('Post Call', ()=>{
//         cy.request({

//             method: 'POST',
//             url:    'https://restful-booker.herokuapp.com/booking',
//             body: {
//                     firstname: "Jim",
//                     lastname: "Brown",
//                     totalprice : 111,
//                     depositpaid : true,
//                     bookingdates : {
//                         checkin: "2018-01-01",
//                         checkout: "2019-01-01"
//                     },

//                     additionalneeds: "Breakfast"
//                   }

//             .its('status')
//             .should('equal', 200)

//         })
//     })
// })
