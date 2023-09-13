describe("API Testing", () => {

    it("passing query parameters", () => {

        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users", // page=2 is a query parameter
            qs: {page: 2} // passing a query parameter with qs. add{} and put page: 2 in them.
        })
          .then( (response) => {

            expect(response.status).to.eq(200);

          })


    })

})