const locator = require('./register-locators')

class RegisterPage {
    async goToRegisterPage() {
        cy.visit('https://kasiraja.ajikamaludin.id/register')
    }

    async goToLoginPage() {
        cy.xpath(locator.data_test_id.login_direct_link).click()
    }

    async verifyRegisterPageAppears() {
        cy.xpath(locator.data_test_id.toko_email_input).should('exist')
        cy.xpath(locator.data_test_id.toko_name_input).should('exist')
        cy.xpath(locator.data_test_id.toko_password_input).should('exist')
        cy.xpath(locator.data_test_id.login_direct_link).should('exist')
        cy.xpath(locator.data_test_id.daftar_button).should('exist')
    }

    async inputTokoName(toko_name) {
        cy.xpath(locator.data_test_id.toko_name_input).type(toko_name)
    }

    async inputTokoEmail(toko_email) {
        cy.xpath(locator.data_test_id.toko_email_input).type(toko_email)
    }

    async inputTokoPassword(toko_password) {
        cy.xpath(locator.data_test_id.toko_password_input).type(toko_password)
    }

    async clickDaftarButton() {
        cy.xpath(locator.data_test_id.daftar_button).click()
    }

    async verifyTokoCreatedSuccessfully() {
        cy.xpath(locator.data_test_id.toko_created_successfully_text_head).should('exist')
        cy.xpath(locator.data_test_id.toko_created_successfully_text_body).should('exist')
    }

    async createToko(toko_name, toko_email, toko_password) {
        this.inputTokoName(toko_name)
        this.inputTokoEmail(toko_email)
        this.inputTokoPassword(toko_password)
        this.clickDaftarButton()
    }

}

module.exports = new RegisterPage()
