const locator = require('./produk-locators')

class ProdukPage {

    async goToProdukPage() {
        cy.visit('https://kasiraja.ajikamaludin.id/products')
    }

    async verifyProdukPageAppears() {
        cy.xpath(locator.data_test_id.produk_page_heading_title_text).should('exist')
        cy.xpath(locator.data_test_id.produk_page_heading_sub_title_text).should('exist')
    }

    async clickTambahButton() {
        cy.xpath(locator.data_test_id.tambah_button).click()
    }

    async verifyTambahProdukPageAppears() {
        cy.xpath(locator.data_test_id.tambah_produk_page_heading_sub_title_text).should('exist')
    }

    async inputKodeProduk(product_code) {
        cy.xpath(locator.data_test_id.kode_produk_input).type(product_code)
    }

    async inputNamaProduk(product_name) {
        cy.xpath(locator.data_test_id.nama_produk_input).type(product_name)
    }

    async inputDeskripsiProduk(product_description) {
        cy.xpath(locator.data_test_id.deskripsi_produk_input).type(product_description)
    }

    async inputHargaBeliProduk(product_buying_price) {
        cy.xpath(locator.data_test_id.harga_beli_input).type(product_buying_price)
    }

    async inputHargaJualProduk(product_selling_price) {
        cy.xpath(locator.data_test_id.harga_jual_input).type(product_selling_price)
    }

    async inputStokProduk(product_stock_qty) {
        cy.xpath(locator.data_test_id.stok_input).type(product_stock_qty)
    }

    async clickKategoriInput() {
        cy.xpath(locator.data_test_id.kategori_input).click()
    }

    async verifyKategoriModalAppears() {
        cy.xpath(locator.data_test_id.kategori_option_modal).should('exist')
    }

    async chooseKategori(category) {
        this.clickKategoriInput()
        this.verifyKategoriModalAppears()
        cy.xpath(locator.data_test_id.kategori_option_value.replace("${category}", category)).should('exist')
        cy.xpath(locator.data_test_id.kategori_option_value.replace("${category}", category)).click()
    }

    async clickSimpanButton() {
        cy.xpath(locator.data_test_id.simpan_button).click()
    }

    async createProduk(product_code, product_name, product_description, product_buying_price, product_selling_price, product_stock_qty, category) {
        this.clickTambahButton()
        this.verifyTambahProdukPageAppears()
        this.inputKodeProduk(product_code)
        this.inputNamaProduk(product_name)
        this.inputDeskripsiProduk(product_description)
        this.inputHargaBeliProduk(product_buying_price)
        this.inputHargaJualProduk(product_selling_price)
        this.inputStokProduk(product_stock_qty)
        this.chooseKategori(category)
        this.clickSimpanButton()
    }

    async verifyProdukCreatedSuccessfully() {
        cy.xpath(locator.data_test_id.produk_created_successfully_text_head).should('exist')
        cy.xpath(locator.data_test_id.produk_created_successfully_text_body).should('exist')
    }

    async clickActionMenuButton(product_name) {
        cy.xpath(locator.data_test_id.produk_action_menu_button.replace("${product_name}", product_name)).click()
    }

    async clickHapusActionButton(product_name) {
        cy.xpath(locator.data_test_id.produk_hapus_action_menu_button.replace("${product_name}", product_name)).click()
    }

    async verifyHapusModalAppears() {
        cy.xpath(locator.data_test_id.produk_hapus_modal).should('exist')
    }

    async clickDeleteProdukButtonInModal() {
        cy.xpath(locator.data_test_id.produk_hapus_modal_delete_button).click()
    }

    async deleteProduk(product_name) {
        this.clickActionMenuButton(product_name)
        this.clickHapusActionButton(product_name)
        this.verifyHapusModalAppears()
        this.clickDeleteProdukButtonInModal()
    }

    async verifyProductDeletedSuccessfully() {
        cy.xpath(locator.data_test_id.produk_deleted_successfully_text_head).should('exist')
        cy.xpath(locator.data_test_id.produk_deleted_successfully_text_body).should('exist')
    }

}

module.exports = new ProdukPage()
