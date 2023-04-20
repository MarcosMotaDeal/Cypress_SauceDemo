// serve para ajudar achar os caminhos de métodos

/// <reference types="cypress" /> 

describe('Login e logout', () => {

    it('Deve efetuar login e logout com sucesso', () => {

      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test=username]').type('standard_user')
      cy.get('[data-test=password]').type('secret_sauce')
      cy.screenshot('ANTES-de-logar-SUCESSO')
      cy.get('[data-test=login-button]').click()
      cy.url().should('include', '/inventory.html') // Valida se o login foi realizado com sucesso
      cy.get('.bm-burger-button').click() // Realiza logout
      cy.get('#logout_sidebar_link').click()
      cy.url().should('eq', 'https://www.saucedemo.com/') // Valida se o logout foi realizado com sucesso
      cy.screenshot('DEPOIS-do-logout-SUCESSO')

    })
  
    it('Deve exibir mensagem de erro para login ou senha inválidos', () => {

      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test=username]').type('usuario_invalido')
      cy.get('[data-test=password]').type('senha_invalida')
      cy.screenshot('Login-INVALIDO')
      cy.get('[data-test=login-button]').click()
      cy.get('.error-message-container').should('be.visible') // Valida se a mensagem de erro é exibida
      cy.screenshot('Mensagem de erro-Login-INVALIDO')
    })

  })
  