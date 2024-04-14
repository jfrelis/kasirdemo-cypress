const locator = require('./dashboard-locators')

class DashboardPage {
    async verifyDashboardPageAppears() {
        cy.xpath(locator.data_test_id.welcoming_box_text_header).should('exist')
        cy.xpath(locator.data_test_id.welcoming_box_text_body).should('exist')
    }
}

module.exports = new DashboardPage()
