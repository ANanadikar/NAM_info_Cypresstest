class LoginPage {



    HRSLogo() {

        return cy.get('.qa-login--img-hrs_logo')
    }


    forgotpwd() {

        return cy.get('.qa-login--link-forgot_password pull-right')
    }

    loginemail() {
        return cy.xpath("//input[@id='loginEmail']")
    }

    loginpwd() {
        return cy.xpath("//input[@id='password']")

    }


    errormsg() {
        return cy.xpath("//span[text()='Username and/or password invalid']")

    }


    termscondition() {
        return cy.xpath("//a[@href='http://www.healthrecoverysolutions.com/privacy-policy']")

    }

    forgotpwd() {
        return cy.xpath("//a[@href='javascript: void(0);']")

    }

}

export default LoginPage