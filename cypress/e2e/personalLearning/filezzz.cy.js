describe('file uploads', () => {

    it.only('single file upload', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('ido.txt')
        cy.get('#file-submit').click()

    })

    it('file upload -rename', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath: 'ido.txt', fileName:'amf.txt'});
        cy.get('#file-submit').click()

    })

    it('file upload -drag and drop', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile('ido.txt', {subjectType:'drag-n-drop'})

        cy.wait(2000);
        cy.get('#file-submit').click()
    })

    it.only('multiple files upload', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['ido.txt', 'text.txt']);

    })

    it('file upload -shadow dom', () => {

        

    })

})