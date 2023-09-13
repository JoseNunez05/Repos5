describe('new booking update', () => {

    it('get method', () => {
        
        cy.request("GET", "https://restful-booker.herokuapp.com/booking/1");


    });

});

// i tried my hardest to use patch and put but it still gave me errors.... and i need to move on.

// url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,{
            //     firstname: 'James',
            //     lastname: 'Brown'
            // }