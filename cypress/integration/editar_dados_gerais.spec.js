/// <reference types="Cypress" />

describe('Sessão de Informações Gerais', () => {
    beforeEach(() => {
        cy.fillMandatoryFieldsAndSubmit()
    })

    it('Editando Nome da Organização e Salvando', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/admin/viewOrganizationGeneralInformation')
        cy.get('#btnSaveGenInfo').click()
        cy.get('#organization_name').should('be.visible').clear()
        cy.get('#organization_name').type('LaranjaHRM').should('have.value', 'LaranjaHRM')
        cy.get('#btnSaveGenInfo').click()
        cy.get('.message').should('be.visible')
    });
    it('Validando Edição de Email com Erro e salvando', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/admin/viewOrganizationGeneralInformation')
        cy.get('#btnSaveGenInfo').click()
        cy.get('#organization_email').should('be.visible').clear({ force: true })
        cy.get('#organization_email').type('laranjahrmemail.com').should('have.value', 'laranjahrmemail.com')
        cy.get('#btnSaveGenInfo').click()
        cy.get('span.validation-error').should('be.visible')
    });

})