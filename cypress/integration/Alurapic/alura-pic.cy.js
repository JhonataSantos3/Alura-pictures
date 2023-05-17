/// <reference types="cypress" />

describe('Usabilidade home ', () => {

    beforeEach('Home', () =>{
        cy.visit('https://alura-fotos.herokuapp.com')
    })
    
       it('Verifica nome da aplicação na tela inicial', () => {
        cy.xpath('//a[@class="navbar-brand"]').should('be.visible')
       })
       it('Verifica menu clicável na tela inicial', ()=>{
        cy.get('.navbar-brand > .fa').click()   
        cy.get('.menu-bar > .fa').should('be.visible')
       })
       
        
        
    })