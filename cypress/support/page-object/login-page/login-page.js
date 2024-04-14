const locator = require('./login-locators')

class LoginPage {
    async goToRegisterPage() {
        cy.xpath(locator.data_test_id.register_direct_link).click()
    }

    async verifyLoginPageAppears() {
        cy.xpath(locator.data_test_id.user_email_input).should('exist')
        cy.xpath(locator.data_test_id.user_password_input).should('exist')
        cy.xpath(locator.data_test_id.login_button).should('exist')
        cy.xpath(locator.data_test_id.register_direct_link).should('exist')
    }

    async inputUserEmail(user_email) {
        cy.xpath(locator.data_test_id.user_email_input).type(user_email)
    }

    async inputUserPassword(user_password) {
        cy.xpath(locator.data_test_id.user_password_input).type(user_password)
    }

    async clickLoginButton() {
        cy.xpath(locator.data_test_id.login_button).click()
    }

    async userLogin(user_email, user_password) {
        this.inputUserEmail(user_email)
        this.inputUserPassword(user_password)
        this.clickLoginButton()
    }
}

module.exports = new LoginPage()
