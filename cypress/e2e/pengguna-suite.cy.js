const penggunaPage = require('../support/page-object/pengguna-page/pengguna-page')
const loginPage = require('../support/page-object/login-page/login-page')
const dashboardPage = require('../support/page-object/dashboard-page/dashboard-page')
const base = require('../support/page-object/base')
const data = require('../support/page-object/static-data')
const random = require('../support/common-function/randomize')

describe("Pengguna", () => {
    describe("Create Pengguna", () => {
        var user_name = random.name()
        var user_email = random.email()
        var user_password = random.password()

        beforeEach(() => {
            base.openUrl()
            loginPage.verifyLoginPageAppears()
            loginPage.userLogin(data.user_data.registered_username, data.user_data.registered_password)
            dashboardPage.verifyDashboardPageAppears()
        })

        it("with valid data", () => {
            penggunaPage.goToPenggunaPage()
            penggunaPage.verifyPenggunaPageAppears()
            penggunaPage.createUser(user_name, user_email, user_password)
            penggunaPage.verifyPenggunaCreatedSuccessfully()
        })

        afterEach(() => {
            penggunaPage.deletePengguna(user_name)
            penggunaPage.verifyPenggunaDeletedSuccessfully()
        })
    })
})
