const { expect } = require("chai")

describe("creating token", () => {

    it('another GET', () => {

        cy.request("GET", "https://restful-booker.herokuapp.com/booking/1")
          .its('status')
          .should('equal');

        // cy.request({

        //     method: "POST",
        //     url: "https://restful-booker.herokuapp.com/auth",

        //     headers:
        //     {
        //         'Content-Type': 'application/json'
        //     },

        //     body: 
        //     {
        //         username: "admin",
        //         password: "password123"
        //     }

        // }).then((response) => {
        //     expect(response.status).to.equal(200);
        // })

    })

})