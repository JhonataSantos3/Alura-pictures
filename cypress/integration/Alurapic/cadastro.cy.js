/// <reference types="cypress" />
describe('cadastro de usuarios', () => {

    beforeEach('Home', () =>{
        cy.visit('/')
    })
    it('verifica mensagens de e-mail inválido', () =>{
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.xpath('//input[@formcontrolname="email"]').type('jhonatanascimento.com')
        cy.contains('.text-danger', 'Invalid e-mail').should('be.visible')
        
    })
    it('verifica mensagens de validação', () =>{
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.contains('.text-danger', 'Email is required!').should('be.visible')
        cy.contains('button', 'Register').click()
        cy.contains(':nth-child(2) > ap-vmessage > .text-danger', 'Full name is required!').should('be.visible')
        cy.contains('button', 'Register').click()
        cy.contains(':nth-child(3) > ap-vmessage > .text-danger', 'User name is required!').should('be.visible')
        cy.contains('button', 'Register').click()
        cy.contains(':nth-child(4) > ap-vmessage > .text-danger', 'Password is required!').should('be.visible')
    })
    it('verifica mensagens de Nome Completo inválido', () =>{
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.xpath('//input[@formcontrolname="fullName"]').type('j')
        cy.contains('button', 'Register').click()
        cy.xpath('//small[text()="Mininum length is 2"]').should('be.visible')
        
    })
    it('verifica mensagens de userName inválido', () =>{
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.xpath('//input[@formcontrolname="userName"]').type('..')
        cy.contains('button', 'Register').click()
        cy.xpath('//small[text()="Must be lower case"]').should('be.visible')
    })
    it('verifica mensagens de password inválido', () =>{
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.xpath('//input[@formcontrolname="password"]').type('12')
        cy.contains('button', 'Register').click()
        cy.xpath('//small[text()="Mininum length is 8"]').should('be.visible')
    })
    const usuarios = require('../../fixtures/usuarios.json')
    usuarios.forEach(usuario => {
        it(`registra novo usuário ${usuario.userName} `, () => {
            cy.xpath('//a[text()="Register now"]').click()
            cy.xpath('//input[@formcontrolname="email"]').type(usuario.email)
            cy.xpath('//input[@formcontrolname="fullName"]').type(usuario.fullName)
            cy.xpath('//input[@formcontrolname="userName"]').type(usuario.userName)
            cy.xpath('//input[@formcontrolname="password"]').type(usuario.password )
            cy.xpath('//button[text()="Register"]').click()
        })
    })

})