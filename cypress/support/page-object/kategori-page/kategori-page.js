const locator = require('./kategori-locators')

class KategoriPage {

    async goToKategoriPage() {
        cy.visit('https://kasiraja.ajikamaludin.id/categories')
    }

    async verifyKategoriPageAppears() {
        cy.xpath(locator.data_test_id.kategori_page_heading_title_text).should('exist')
        cy.xpath(locator.data_test_id.kategori_page_heading_sub_title_text).should('exist')
    }

    async clickTambahButton() {
        cy.xpath(locator.data_test_id.tambah_button).click()
    }

    async verifyTambahKategoriPageAppears() {
        cy.xpath(locator.data_test_id.tambah_kategori_page_heading_sub_title_text).should('exist')
    }

    async inputNamaKategori(category_name) {
        cy.xpath(locator.data_test_id.kategori_nama_input).type(category_name)
    }

    async inputDeskripsiKategori(category_desc) {
        cy.xpath(locator.data_test_id.kategori_deskripsi_input).type(category_desc)
    }

    async clickSimpanButton() {
        cy.xpath(locator.data_test_id.simpan_button).click()
    }

    async createCategory(category_name, category_desc) {
        this.clickTambahButton()
        this.verifyTambahKategoriPageAppears()
        this.inputNamaKategori(category_name)
        this.inputDeskripsiKategori(category_desc)
        this.clickSimpanButton()
    }

    async verifyKategoriCreatedSuccessfully() {
        cy.xpath(locator.data_test_id.kategori_created_successfully_text_head).should('exist')
        cy.xpath(locator.data_test_id.kategori_created_successfully_text_body).should('exist')
    }

    async clickActionMenuButton(category_name) {
        cy.xpath(locator.data_test_id.kategori_action_menu_button.replace("${kategori_name}", category_name)).click()
    }

    async clickHapusActionButton(category_name) {
        cy.xpath(locator.data_test_id.kategori_hapus_action_menu_button.replace("${kategori_name}", category_name)).click()
    }

    async verifyHapusModalAppears() {
        cy.xpath(locator.data_test_id.kategori_hapus_modal).should('exist')
    }

    async clickDeleteKategoriButtonInModal() {
        cy.xpath(locator.data_test_id.kategori_hapus_modal_delete_button).click()
    }

    async deleteKategori(category_name) {
        this.clickActionMenuButton(category_name)
        this.clickHapusActionButton(category_name)
        this.verifyHapusModalAppears()
        this.clickDeleteKategoriButtonInModal()
    }

    async verifyKategoriDeletedSuccessfully() {
        cy.xpath(locator.data_test_id.kategori_deleted_successfully_text_head).should('exist')
        cy.xpath(locator.data_test_id.kategori_deleted_successfully_text_body).should('exist')
    }

}

module.exports = new KategoriPage()
