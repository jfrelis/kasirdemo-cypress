const pelangganPage = require('../support/page-object/pelanggan-page/pelanggan-page')
const loginPage = require('../support/page-object/login-page/login-page')
const dashboardPage = require('../support/page-object/dashboard-page/dashboard-page')
const base = require('../support/page-object/base')
const data = require('../support/page-object/static-data')
const random = require('../support/common-function/randomize')

describe("Pelanggan", () => {
    describe("Create Pelanggan", () => {
        var cust_name = random.name()
        var cust_phone_number = random.phone_number()
        var cust_address = data.customer_data.static_address
        var cust_info = data.customer_data.static_information

        beforeEach(() => {
            base.openUrl()
            loginPage.verifyLoginPageAppears()
            loginPage.userLogin(data.user_data.registered_username, data.user_data.registered_password)
            dashboardPage.verifyDashboardPageAppears()
        })

        it("with valid data", () => {
            pelangganPage.goToPelangganPage()
            pelangganPage.verifyPelangganPageAppears()
            pelangganPage.createCustomer(cust_name, cust_phone_number, cust_address, cust_info)
            pelangganPage.verifyPelangganCreatedSuccessfully()
        })

        afterEach(() => {
            pelangganPage.deletePelanggan(cust_name)
            pelangganPage.verifyPelangganDeletedSuccessfully()
        })
    })
})
