const locator = require('./pengguna-locators')

class PenggunaPage {

    async goToPenggunaPage() {
        cy.visit('https://kasiraja.ajikamaludin.id/users')
    }

    async verifyPenggunaPageAppears() {
        cy.xpath(locator.data_test_id.pengguna_page_heading_title_text).should('exist')
        cy.xpath(locator.data_test_id.pengguna_page_heading_sub_title_text).should('exist')
    }

    async clickTambahButton() {
        cy.xpath(locator.data_test_id.tambah_button).click()
    }

    async verifyTambahPenggunaPageAppears() {
        cy.xpath(locator.data_test_id.tambah_pengguna_page_heading_sub_title_text).should('exist')
    }

    async inputNamaPengguna(user_name) {
        cy.xpath(locator.data_test_id.pengguna_nama_input).type(user_name)
    }

    async inputEmailPengguna(user_email) {
        cy.xpath(locator.data_test_id.pengguna_email_input).type(user_email)
    }

    async inputPasswordPengguna(user_password) {
        cy.xpath(locator.data_test_id.pengguna_password_input).type(user_password)
    }

    async clickSimpanButton() {
        cy.xpath(locator.data_test_id.simpan_button).click()
    }

    async createUser(user_name, user_email, user_password) {
        this.clickTambahButton()
        this.verifyTambahPenggunaPageAppears()
        this.inputNamaPengguna(user_name)
        this.inputEmailPengguna(user_email)
        this.inputPasswordPengguna(user_password)
        this.clickSimpanButton()
    }

    async verifyPenggunaCreatedSuccessfully() {
        cy.xpath(locator.data_test_id.pengguna_created_successfully_text_head).should('exist')
        cy.xpath(locator.data_test_id.pengguna_created_successfully_text_body).should('exist')
    }

    async clickActionMenuButton(user_name) {
        cy.xpath(locator.data_test_id.pengguna_action_menu_button.replace("${pengguna_name}", user_name)).click()
    }

    async clickHapusActionButton(user_name) {
        cy.xpath(locator.data_test_id.pengguna_hapus_action_menu_button.replace("${pengguna_name}", user_name)).click()
    }

    async verifyHapusModalAppears() {
        cy.xpath(locator.data_test_id.pengguna_hapus_modal).should('exist')
    }

    async clickDeletePenggunaButtonInModal() {
        cy.xpath(locator.data_test_id.pengguna_hapus_modal_delete_button).click()
    }

    async deletePengguna(pengguna_name) {
        this.clickActionMenuButton(pengguna_name)
        this.clickHapusActionButton(pengguna_name)
        this.verifyHapusModalAppears()
        this.clickDeletePenggunaButtonInModal()
    }

    async verifyPenggunaDeletedSuccessfully() {
        cy.xpath(locator.data_test_id.pengguna_deleted_successfully_text_head).should('exist')
        cy.xpath(locator.data_test_id.pengguna_deleted_successfully_text_body).should('exist')
    }

}

module.exports = new PenggunaPage()
