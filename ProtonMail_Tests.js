 //<reference types="cypress" />

describe('Settings page and its features', () => { 
beforeEach(() => {
    
      cy.visit('/')
      cy.get('[data-testid="username"]').type('erodm90')
      .as('username');
      cy.get('[data-testid="password"]').type('Password')
      .as('pwd');
     cy.get('data-testid="Log in"').click() 
     cy.get('[data-testid="navigation-link:folders-settings"]').click()
     cy.url().should('eq','https://account.protonmail.com/u/0/mail/folders-labels')


    });      

     it('Logs in the user and opens the Folder settings page and creates a folder default', () => {
     cy.contains('Add Folder').click()
     cy.contains('Folder Name').type('Folder1')
     cy.contains('Save').click()

     })

     it('Logs in the user and opens the Folder settings page and creates a Label default', () => {
      cy.contains('Add Label').click()
      cy.contains('Label Name').type('Label')
      cy.contains('Save').click()

     })

     it('Logs in the user and opens the Folder settings page and creates a Folder without folder colors', () => {
      cy.contains('Use Folder Colors').uncheck()
      cy.contains('Add Folder').click()
      cy.contains('Folder Name').type('Folder2')
      cy.contains('Folder Location').select('Folder1')
      .should('equal', 'Folder1');
      cy.contains('Save').click()
     })
    
     it('Logs in the user and opens the Folder settings page and creates a Folder without inheriting color from parent', () => {
      cy.contains('Inherit color from parent folder').uncheck()
      cy.contains('Add Folder').click()
      cy.contains('Folder Name').type('Folder4')
      cy.contains('Folder Location').select('Folder1')
      .should('equal', 'Folder1');
      cy.contains('Save').click()
     })


     

     it('Edits Folder', () => {
      cy.get('[data-test-id= "folders/labels:item-edit]"').contains('Folder1').click()
      cy.contains('Folder Name').type(23)
      cy.contains('Save').click()
      .should('equal','Folder23')


     })

     it('Edits Label', () => {
      cy.get('[data-test-id=folders/labels:item-edit]"').contains('Label1').click()
      cy.contains('Label Name').type('Label3')
      cy.contains('Save').click()
      cy.get('[data-test-id="folders/labels:item-name"]').should('equal','Label3')

     })
     
     it('Deletes a Folder', () => {
      cy.get('[data-test-id= "folders/labels:item-edit]"').contains('Folder2').select('[data-test-id="folders/labels:item-delete"]').click()
      
     })

     it('Deletes a Label', () => {
      cy.get('[data-test-id= "folders/labels:item-edit]"').contains('Label1').select('[data-test-id="folders/labels:item-delete"]').click()
      
     })
      
  });



