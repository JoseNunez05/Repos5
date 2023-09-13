describe('get booking', () => {

    it('GET request', () => {

        it("get call", () => {

            cy.request("GET", "https://restful-booker.herokuapp.com/booking/:id")
              .its("status")
              .should("equal", 200)

              console.log("GET 200")
    
        })

    })

})