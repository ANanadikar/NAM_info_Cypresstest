/// <reference types="Cypress" />


import LoginPage from '../support/PageElements/login_Page';
const loginPage = new LoginPage();


describe('LoginPage testcase', function () {


    beforeEach(() => {

        cy.fixture('credentials').then(function (data) {

            this.data = data

        })

        cy.visit(Cypress.env('url'))

    })


    it('Verify Error message while invalidLogin', function () {

        loginPage.loginemail().type(this.data.username, { delay: 100 })
        loginPage.loginpwd().type(this.data.password, { delay: 100 })
        cy.contains('Sign In').click()
        loginPage.errormsg().should('be.visible')

    })


    it('Verify login page title', function () {

        cy.title().should('eq', 'HRS | ClinicianConnect')


    })


    it('Verify CurrentURL', function () {

        cy.url().should('eq', 'https://cc.healthrecoverysolutions.com/login')


    })


    it('Verify SIGN IN button is visible', function () {

        cy.contains('Sign In').should('be.visible')


    })


    it('Verify HRS logo is visible', function () {

        loginPage.HRSLogo().should('be.visible')


    })

    it('Verify Forgot Password link is visible', function () {

        loginPage.forgotpwd().should('be.visible')


    })

    it('Verify terms & condition link is visible', function () {

        loginPage.termscondition().should('be.visible')


    })





})