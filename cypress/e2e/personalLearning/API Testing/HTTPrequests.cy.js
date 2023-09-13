describe("HTTP requests", () => {

    it("get call", () => {

        cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
          .its("status")
          .should("equal", 200)

    })


    it("post call", () => {

        cy.request({

            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts/",
            body: {
                title:"Test post",
                body:"This is post call",
                userID:1
                }

        })


        it("put call", () => {

            cy.request({

                method: "PUT",
                url: "https://jsonplaceholder.typicode.com/posts/1",
                body: {
                        title:"Test post - updated",
                        body:"This is put call",
                        userID:1,
                        id: 1
                    }

            })

        })

    })

})