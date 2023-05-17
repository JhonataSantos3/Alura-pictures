/// <reference types="cypress" />
describe('login usuarios', () => {

    beforeEach('Home', () =>{
        cy.visit('https://alura-fotos.herokuapp.com')
        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400
        }).as('stubPost')

    })
        it.only('verifica login de usuário inválido', () =>{
            cy.login('jhonata', '1234')
            cy.on('window:alert', (str) =>{
                expect(str).to.equal('Invalid user name or password')
            })
            
        })
})