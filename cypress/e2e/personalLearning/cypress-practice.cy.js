describe('first practice test', () => {

    it('first IT', function() {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')

        cy.get('tbody>tr>th:first-child').should('have.text', 'TitleTitle')
    })
})

describe('assertions', () => {
    it.skip('implicit assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.url().should('include', 'orange')
                .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                .should('contain', 'opensource-demo')

                .and('not.contain', 'milk')
                .and('not.include', false)
                .and('not.eq', 1)

        cy.title().should('include', 'Orange')
                  .and('not.include', "yellow")
                  .should('eq', 'OrangeHRM')

        
        let userFeild = cy.get("input[placeholder='Username']")
        let passFeild = cy.get("input[placeholder='Password']")
        const logo = cy.get('.orangehrm-login-branding > img')

        logo.should('be.visible');
    })  


    it('explicit assertions', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get("input[placeholder='Username']").type('Admin');
        cy.get("input[placeholder='Password']").type('admin123');

        // cypress is an api, just look at what you've been doing..
        // using .get() every milisecond. that is a request to the api to get a said elemenet
        // from a webpage.

        // we call the cypress api to find the login button from the website.
        // when it finds the button, then go ahead and actually get it from the website.
        // when all of that is said and done and the task is fulfilled. then
        cy.get('.oxd-button').then( button => {
            let loginText = button.text();
            expect(loginText).to.not.equal('Login');
        })  
    })
})





describe('buttons! radio and check!', function() {

    it('radio buttons', () => {

        cy.visit('https://qa-practice.netlify.app/radiobuttons.html');
        cy.get('#radio-button3').check().should('be.checked');

    })

    it('check boxes', () => {
        cy.visit('https://qa-practice.netlify.app/checkboxes');
        
        cy.get('[type="checkbox"]').check();
        cy.get('[type="checkbox"]:first-child').uncheck().should('not.be.checked');

        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked');
        cy.wait(3000)
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked');
    })

})




describe('dropdowns', () => {
    it.skip('dropdown with select', function(){

        cy.visit('https://app.endtest.io/guides/docs/how-to-test-dropdowns/')
        cy.get("#pets").select('Rabbit').should('have.value', 'Rabbit');

    })

    it.skip('dropdown without select', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        
        let countryBox = "#select2-billing_country-container" 
        let countrySearch = ".select2-search__field" 

        cy.get(countryBox).scrollIntoView().click()
        cy.get(countrySearch).type('Italy').type('{enter}') 

        cy.get(countryBox).should('have.text', 'Italy');
    })

    it('autosuggested drop down', () => {
        cy.visit("www.wikipedia.org/")

        let search = '#searchInput'
        cy.get(search).type('Miami')

        // so instead of making it easy for ourselves, cypress decides that each is better than the native forEach.
        cy.get('.suggestion-title').each((element) => {
            if(element.text()=='Beach')
            {
                cy.log(cy.wrap(element.text()))
            }
        })

    })
})


describe.skip('alerts', () => {

    beforeEach('visit url', () => {
        // cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })

    // remember! Cypress automatically handles alerts.
    it('standard alerts', () => {

        const standardAlertBtn = "button[onclick='jsAlert()']" 
        cy.get(standardAlertBtn).click();

        Cypress.on('window:alert', (res) => {
            expect(res).to.contain('Alert')
        })

        // alert window automatically closed
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    it('confirmation alerts', () => {

        // the below code will return a false value to the confirmation window code therefore clicking cancel.
        // Cypress.on('window:confirm', action => {
        //     expect(action).to.contains('Confirm')
        //     return false;
        // })

        cy.window().then(win => {
            cy.stub(win, 'confirm').returns(false) // cancels 
        })
        cy.get(':nth-child(2) > button').click();


        cy.get('#result').should('contain.text', 'Cancel');

    })


    it('prompt alerts', () => {

        const promptWindow = ':nth-child(3) > button'

        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('test')
        })
        cy.get(promptWindow).click();

    })


    it.only('authenticaed alerts', () => {
        cy.visit("the-internet.herokuapp.com/basic_auth", {auth: {username: "admin", password: "admin"}})      
    })

})



describe('child tabs', () => {

    it('child tabs', function(){

        cy.visit('the-internet.herokuapp.com/windows')

        let linkElement = '.example > a'; 
        cy.get(linkElement).invoke('removeAttr', 'target').wait(2000).click().wait(5000).go('back');
        
        // cy.get('.example > a').then(el => {
        //     cy.visit(el.prop('href'));
        // });
    })
})




describe('iframes all day', () => {

    it.skip('using built in iframe commands', () => {
        cy.visit('https://demo.automationtesting.in/Frames.html');
        Cypress.on('uncaught:exception', (error, runnable) => {
            return false
        })

        cy.frameLoaded('#singleframe').scrollIntoView()

        // you can not directly access an element that is inside of an iframe. But to do so, use the .find() method.
        // using .get() won't do it for iframes.
        cy.iframe('#singleframe').find("input[type='text']").type('I am a QA Engineer making 120,000 dollars a year')
        cy.wait(3000)


        // to access an iframe within an iframe, you first load the parent iframe(s)
        cy.frameLoaded("iframe[src='MultipleFrames.html']")

        // you then access the child iframe by using the .find() method. once you find the iframe you're looking for,
        // if you want to access it's elements, instead of using the .find() method again, you have to further specify the iframe
        // in this case, there was only one nested iframe, so we used only one .find() method to find this iframe
        // .find("iframe[src='SingleFrame.html']")

        // but to further specify and truley unlock access to it for lack of better words, we have to access the content documents
        // then use the .find() method to well... find what we want inside of that iframe.
        // .find("iframe[src='SingleFrame.html']").its('0.contentDocument').its('body')

        // after that, we can then use the .find() method again to find what we need in the frame.

        // in summary, we first load our parent iframe, we then find the child iframe, but to then access the child iframe, 
        // we have to access it's content documents and go to it's body. we can then use the .find() method again to interact
        // with what we want.
        cy.iframe("iframe[src='MultipleFrames.html']").find("iframe[src='SingleFrame.html']").its('0.contentDocument').its('body').find("input[type='text']").type('found you!')
    })
})


describe.skip('iframe challenge', () => {

    beforeEach('visit page', () => {
        cy.visit('https://www.hyrtutorials.com/p/frames-practice.html');
        Cypress.on('uncaught:exception', (error, runnable) => {
            return false
        })
    })

    it('first frame', () => {
        cy.frameLoaded('#frm1').should('exist')
        cy.iframe('#frm1').scrollIntoView().find('#selectnav1').select('- Frames Practice')
        .wait(3000)
    })

    it('second frame', () => {
        cy.frameLoaded('#frm2')
        cy.iframe('#frm2').scrollIntoView().find('#firstName').type('Jose')
        cy.iframe('#frm2').find('#lastName').type('Nunez')
        cy.iframe('#frm2').find('#englishchbx').check().should('be.checked')
        .wait(3000)    
    })

    it.only('third frame', () => {
        cy.frameLoaded('#frm3')
        cy.iframe('#frm3').scrollIntoView().find('#name').type('I am a QA Engineer making 6 figures a year');
        cy.iframe('#frm3').find('#frm1').its('0.contentDocument').its('body').find('#course').select('Javascript');
        cy.iframe('#frm3').find('#frm2').its('0.contentDocument').its('body').find('#firstName').type('THE BIG J')
        .wait(3000)
    })
})






describe.skip('quick test', () => {

    it.skip('a little quicky >:O', () => {
        cy.visit('https://practice.automationtesting.in/');
        cy.get("img[title='Selenium Ruby']").then(el => {
            expect(el).to.exist();
        })
    })

    it('alert test', () => {
        cy.visit('https://demoqa.com/alerts')
        Cypress.on('uncaught:exception', (error, runnable) => {
            return false
        })

        cy.get('#alertButton').click() // automatically clicks ok
        .wait(3000)

        cy.on('window:confirm', () => false) // cancels confirm window
        cy.get('#confirmButton').click();

    })

})





