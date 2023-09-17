// const { TimeoutError } = require("cypress/types/bluebird");
// const { result } = require("cypress/types/lodash");

describe.skip('fixtures solo', () => {

    before('visit page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    it('solo', () => {
        cy.fixture('orangehrm.json').then((JSON_DATA) => {
            cy.get("input[placeholder='Username']").type(JSON_DATA.username);
            cy.get("input[placeholder='Password']").type(JSON_DATA.password);

            cy.get('.oxd-button').dblclick();
        })
    })
})



// skip can also be used for describe blocks
describe.skip('fixtures as array solo', () => {
    before('visit site', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    it('solo array fixture test', () => {
        cy.fixture('login2.json').then(($ARRAY) => {
            $ARRAY.forEach(($ARRAY_DATA) => {
                cy.get("input[placeholder='Username']").type($ARRAY_DATA.username);
                cy.get("input[placeholder='Password']").type($ARRAY_DATA.password);

                cy.get('.oxd-button').dblclick();
            })
            
        })
    })
})




describe.skip('alerts solo test', () => {

    it("alerts", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get("button[onclick='jsConfirm()']").click()
        Cypress.on('window:confirm', () =>{
            return false;
        });
        // the above code, visits the site, gets the confirm alert window and on the event of the confirm window we return false and 
        // by doing so, we click the cancel option instead of letting cypress do

        cy.window().then(($WINDOW) => {
            cy.stub($WINDOW, 'prompt').returns('hello there m8');
        });
        cy.get("button[onclick='jsPrompt()']").click();
    })
})




describe.skip('alerts and fixtures solo', () => {

    it('teeest', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.window().then(($WINDOW) => {
            cy.fixture('promptinputs.json').then(($INPUTS) => {
                cy.stub($WINDOW, 'prompt').returns($INPUTS.INPUT_);
            })
        })
        cy.get("button[onclick='jsPrompt()']").click();
    })
})



describe.skip('alerts and array fixtures solo', () => {

    it('bro im a god at this ong no cap', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.window().then(($WINDOW) => {
            cy.fixture('promptArray.json').then((_ARRAY_) => {
                _ARRAY_.forEach(($ARRAY_INPUT) => {
                    cy.stub($WINDOW, 'prompt').returns($ARRAY_INPUT);
                })
            })
        })
    })
})


// cy.stub lesson real qwik
// cy.stub()
// cy.stub(object, method)
// cy.stub(object, method, replacerFn)

// create a standalone stub (generally for use in unit test)
// cy.stub()

// replace obj.method() with a stubbed function
// cy.stub(obj, 'method')

// force obj.method() to return "foo"
// cy.stub(obj, 'method').returns('foo')

// force obj.method() when called with "bar" argument to return "foo"
// cy.stub(obj, 'method').withArgs('bar').returns('foo')

// force obj.method() to return a promise which resolves to "foo"
// cy.stub(obj, 'method').resolves('foo')

// force obj.method() to return a promise rejected with an error
// cy.stub(obj, 'method').rejects(new Error('foo'))



describe('file stuff things you know?', () => {

    it('single file', () => {
        cy.visit('https://ps.uci.edu/~franklin/doc/file_upload.html');

        // cy.get("input[name='userfile']").attachFile('orangehrm.json');

        // changing the file name using {filePath: 'path', fileName: 'new name'}
        // cy.get("input[name='userfile']").attachFile('orangehrm.json')

        cy.get("input[name='userfile']").attachFile({filePath: 'orangehrm.json', fileName: 'testagain'});
    });

    it("drag and drop", () => {
        cy.visit('https://www.dragdrop.com/test/')

        // automate a drag and drop with {} and subjectType: then in quotes the subject type, which is drag-n-drop.
        cy.get('#demo-upload').attachFile('filenames.json', {subjectType: 'drag-n-drop'});

        cy.get('#demo-upload').then((_FILEAREA_) => {
            expect(_FILEAREA_).to.exist
            expect(_FILEAREA_).to.contain('filenames.json');
        })
    })

    it("multiple files", () => {
        cy.visit('https://www.dragdrop.com/test/')

        // to upload multiple files, use an array.
        cy.get("#demo-upload").attachFile(['filenames.json', 'login2.json', 'orangehrm.json'], {subjectType: "drag-n-drop"});

        cy.get('#demo-upload').then((_FILEAREA_) => {
            expect(_FILEAREA_).to.exist
            expect(_FILEAREA_).to.contain('filenames.json');
        })
    })

});





describe.skip("frames baby here we go", () => {

    it("frames test1", () => {

        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.iframe("#mce_0_ifr").clear().type('test');
    })
})


describe("dropdowns solo", () => {

    // it.skip("dropdowns with select", () => {
    //     cy.visit('https://www.zoho.com/commerce/free-demo.html', () => {
    //         // get the select drop-down element and use the .select() method to interact with the drop-down.
    //         cy.get("#zcf_address_country").select("Portugal")
    //     })

        // it.skip("dropdowns without select", () => {
        //     cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        //     // get the css selector for the drop-down element, type the search query, then use 
        //     // a seperate .type method call for function keys.
        //     cy.get("#select2-billing_country-container").type('Portugal')
            
            it("dynamic dropdowns", () => {
                cy.visit("https://www.google.com")

                cy.get("#APjFqb").type('You')
                cy.get('div.wM6W7d>span').each($result, index, result_list)
                {
                    if($result.text() === 'YouTube')
                    {
                        cy.wrap($result).click();
                    }
                }

            })
    })

//})
