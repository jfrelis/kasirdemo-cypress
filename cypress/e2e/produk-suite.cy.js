const produkPage = require('../support/page-object/produk-page/produk-page')
const loginPage = require('../support/page-object/login-page/login-page')
const dashboardPage = require('../support/page-object/dashboard-page/dashboard-page')
const base = require('../support/page-object/base')
const data = require('../support/page-object/static-data')
const random = require('../support/common-function/randomize')

describe("Produk", () => {
    describe("Create Produk", () => {
        var product_code = random.product_code()
        var product_name = random.product_name()
        var product_description = 'qa testing purpose'
        var buying_price = '50000'
        var selling_price = '100000'
        var stok = '100'
        var kategori = 'Qa category please do not delete'

        beforeEach(() => {
            base.openUrl()
            loginPage.verifyLoginPageAppears()
            loginPage.userLogin(data.user_data.registered_username, data.user_data.registered_password)
            dashboardPage.verifyDashboardPageAppears()
        })

        it("with valid data", () => {
            produkPage.goToProdukPage()
            produkPage.verifyProdukPageAppears()
            produkPage.createProduk(product_code, product_name, product_description, buying_price, selling_price, stok, kategori)
            produkPage.verifyProdukCreatedSuccessfully()
        })

        afterEach(() => {
            produkPage.deleteProduk(product_name)
            produkPage.verifyProductDeletedSuccessfully()
        })
    })
})
