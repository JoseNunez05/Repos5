describe('new booking update', () => {

    it('PATCH method', () => {
        
        cy.request({

            method: "PATCH",
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
                lastname : "Brown"   
            }
        });

    });
});


// IT FINALLY F*****G WORKED!!!!!!!!!!!!!!!!!!!!!!!!!!