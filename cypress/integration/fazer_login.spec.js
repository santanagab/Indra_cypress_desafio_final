/// <reference types="Cypress" />

describe('Teste de Realização de Login', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('Validando login', () => {
        cy.get('#txtUsername').should('be.visible').type('Admin')
        cy.get('#txtPassword').should('be.visible').type('admin123')
        cy.get('#btnLogin').click()
    });

    it('Erro ao fazer login com username errado', () => {
        cy.get('#txtUsername').should('be.visible').type('Admi')
        cy.get('#txtPassword').should('be.visible').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('have.text', 'Invalid credentials')
    });

    it('Erro ao fazer login com password errado', () => {
        cy.get('#txtUsername').should('be.visible').type('Admin')
        cy.get('#txtPassword').should('be.visible').type('admin113')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('have.text', 'Invalid credentials')
    });

    it('Fazer login com campos obrigatórios vazios', () => {
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('have.text', 'Username cannot be empty')
    });
})