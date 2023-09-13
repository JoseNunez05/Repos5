const { Runnable } = require("mocha")

describe('api call', () => {

    it ('POST -approach 1 -hard coded json object', () => {

        const requestBody = {
            tourist_name:"Mike",
            tourist_email:"mike1256789@gmail.com",
            tourist_location:"Paris"
        }

        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
        })


    })

})