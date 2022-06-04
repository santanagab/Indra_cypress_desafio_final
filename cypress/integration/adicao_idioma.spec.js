/// <reference types="Cypress" />

describe('Sessão de Idiomas', () => {
    beforeEach(() => {
        cy.fillMandatoryFieldsAndSubmit()
    })
    it('Validando cadastro de idioma', () => {
        cy.get('#menu_admin_viewAdminModule > b')
        cy.get('#menu_admin_Qualifications')
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/admin/viewLanguages')
        cy.get('#btnAdd').click()
        cy.get('#language_name').should('be.visible').type('Portuguese')
        cy.get('#btnSave').click()
        cy.get('.message').should('be.visible')
    });

    it('Adicionando idioma com dado vazio', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/admin/viewLanguages')
        cy.get('#btnAdd').click()
        cy.get('#btnSave').click()
        cy.get('span.validation-error').should('be.visible')
    });

    it('Validando exclusão de idioma cadastrado', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/admin/viewLanguages')
        cy.get('tbody > :nth-child(1) > .check > .checkboxAtch').check().should('be.checked')
        cy.get('#btnDel').click()
        cy.get('.message').should('be.visible')
    });
})