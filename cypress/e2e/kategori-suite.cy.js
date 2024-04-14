const kategoriPage = require('../support/page-object/kategori-page/kategori-page')
const loginPage = require('../support/page-object/login-page/login-page')
const dashboardPage = require('../support/page-object/dashboard-page/dashboard-page')
const base = require('../support/page-object/base')
const data = require('../support/page-object/static-data')
const random = require('../support/common-function/randomize')

describe("Kategori", () => {
    describe("Create Kategori", () => {
        var category_name = random.category_name()
        var category_desc = data.category_data.static_description

        beforeEach(() => {
            base.openUrl()
            loginPage.verifyLoginPageAppears()
            loginPage.userLogin(data.user_data.registered_username, data.user_data.registered_password)
            dashboardPage.verifyDashboardPageAppears()
        })

        it("with valid data", () => {
            kategoriPage.goToKategoriPage()
            kategoriPage.verifyKategoriPageAppears()
            kategoriPage.createCategory(category_name, category_desc)
            kategoriPage.verifyKategoriCreatedSuccessfully()
        })

        afterEach(() => {
            kategoriPage.deleteKategori(category_name)
            kategoriPage.verifyKategoriDeletedSuccessfully()
        })
    })
})
