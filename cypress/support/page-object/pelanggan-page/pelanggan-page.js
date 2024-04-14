const locator = require('./pelanggan-locators')

class PelangganPage {

    async goToPelangganPage() {
        cy.visit('https://kasiraja.ajikamaludin.id/customers')
    }

    async verifyPelangganPageAppears() {
        cy.xpath(locator.data_test_id.pelanggan_page_heading_title_text).should('exist')
        cy.xpath(locator.data_test_id.pelanggan_page_heading_sub_title_text).should('exist')
    }

    async clickTambahButton() {
        cy.xpath(locator.data_test_id.tambah_button).click()
    }

    async verifyTambahPelangganPageAppears() {
        cy.xpath(locator.data_test_id.tambah_pelanggan_page_heading_sub_title_text).should('exist')
    }

    async inputNamaPelanggan(cust_name) {
        cy.xpath(locator.data_test_id.pelanggan_nama_input).type(cust_name)
    }

    async inputNoHpPelanggan(cust_phone_number) {
        cy.xpath(locator.data_test_id.pelanggan_no_hp_input).type(cust_phone_number)
    }

    async inputAlamatPelanggan(cust_address) {
        cy.xpath(locator.data_test_id.pelanggan_alamat_input).type(cust_address)
    }

    async inputKeteranganPelanggan(cust_info) {
        cy.xpath(locator.data_test_id.pelanggan_keterangan_input).type(cust_info)
    }

    async clickSimpanButton() {
        cy.xpath(locator.data_test_id.simpan_button).click()
    }

    async createCustomer(cust_name, cust_phone_number, cust_address, cust_info) {
        this.clickTambahButton()
        this.verifyTambahPelangganPageAppears()
        this.inputNamaPelanggan(cust_name)
        this.inputNoHpPelanggan(cust_phone_number)
        this.inputAlamatPelanggan(cust_address)
        this.inputKeteranganPelanggan(cust_info)
        this.clickSimpanButton()
    }

    async verifyPelangganCreatedSuccessfully() {
        cy.xpath(locator.data_test_id.pelanggan_created_successfully_text_head).should('exist')
        cy.xpath(locator.data_test_id.pelanggan_created_successfully_text_body).should('exist')
    }

    async clickActionMenuButton(cust_name) {
        cy.xpath(locator.data_test_id.pelanggan_action_menu_button.replace("${pelanggan_name}", cust_name)).click()
    }

    async clickHapusActionButton(cust_name) {
        cy.xpath(locator.data_test_id.pelanggan_hapus_action_menu_button.replace("${pelanggan_name}", cust_name)).click()
    }

    async verifyHapusModalAppears() {
        cy.xpath(locator.data_test_id.pelanggan_hapus_modal).should('exist')
    }

    async clickDeletePelangganButtonInModal() {
        cy.xpath(locator.data_test_id.pelanggan_hapus_modal_delete_button).click()
    }

    async deletePelanggan(cust_name) {
        this.clickActionMenuButton(cust_name)
        this.clickHapusActionButton(cust_name)
        this.verifyHapusModalAppears()
        this.clickDeletePelangganButtonInModal()
    }

    async verifyPelangganDeletedSuccessfully() {
        cy.xpath(locator.data_test_id.pelanggan_deleted_successfully_text_head).should('exist')
        cy.xpath(locator.data_test_id.pelanggan_deleted_successfully_text_body).should('exist')
    }

}

module.exports = new PelangganPage()
