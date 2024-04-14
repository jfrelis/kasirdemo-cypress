const registerPage = require('../support/page-object/register-page/register-page')
const base = require('../support/page-object/base')
const random = require('../support/common-function/randomize')

describe("Register", () => {
    it("with valid data", () => {
        base.openUrl()
        registerPage.goToRegisterPage()
        registerPage.verifyRegisterPageAppears()
        registerPage.createToko(random.name(), random.email(), random.password())
        registerPage.verifyTokoCreatedSuccessfully()
    })
})
