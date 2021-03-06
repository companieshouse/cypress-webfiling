import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();


describe('Audit exempt full accounts (with abbreviated accounts option)', () => {
    beforeEach('Select Full Accounts (with abbreviated option) from form overview', () => {
        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectConfirmationStatementAndAccounts()
            .selectFullAccountsWithAbbreviatedOption();
    })

    it('Check Full Accounts (with abbreviated option) screen', () => {
        // Users cannot proceed past this page so a simple accessibility check will suffice
        // for this screen
        cy.accessibilityCheck();
        
    })

    it('Check guide to changing Adobe settings screens', () => {
        cy.visit('/help/en/stdwf/adobeSettingsNonJoint.html');
        cy.accessibilityCheck();

        cy.visit('help/en/stdwf/adobeSettingsNonJointLinux.html');
        cy.accessibilityCheck();
        // Go back to company overview screen to exit the test
        cy.visit('/profile');
    })
})
