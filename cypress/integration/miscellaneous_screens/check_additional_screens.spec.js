import CompanyOverviewPage from "../../support/page_objects/CompanyOverviewPage";
import ManageYourEreminders from "../../support/page_objects/ManageYourEremindersPage";

const companyOverview = new CompanyOverviewPage();
const manageYourEremindersPage = new ManageYourEreminders();

describe("Miscellaneous other activities that aren't the filing of forms", () => {
    it('Activate eReminders', () => {
        companyOverview.selectLinkWithText('Activate eReminders');
        cy.accessibilityCheck();

        manageYourEremindersPage.addEmailLink();
        cy.accessibilityCheck();

        manageYourEremindersPage.useWebfilingEmailAddress();
        cy.accessibilityCheck();

        manageYourEremindersPage.addEmailButton();
        cy.accessibilityCheck();

        manageYourEremindersPage.viewTermsOfOperation();
        cy.accessibilityCheck();
        // Go back to company overview screen to exit the test
        cy.visit('/profile')
    })

    it('Join PROOF', () => {
        companyOverview.selectLinkWithText('Join PROOF');
        cy.accessibilityCheck();

        // Open PROOF t's & c's link. Opens in a new window so call cy.visit() in order to test
        cy.visit('help//en/stdwf/proofTandC.html');
        cy.accessibilityCheck();

        // Go back to company overview screen to exit the test
        cy.visit('//profile')


    })

    it('Request Email', () => {
        companyOverview.selectLinkWithText('Request email');
        cy.accessibilityCheck();
    })

    it('Recent Filings', () => {
        companyOverview.selectLinkWithText('My recent filings')
        cy.accessibilityCheck();

    })

    it('Company Authentication', () => {
        companyOverview.selectLinkWithText('Company authentication');
        cy.accessibilityCheck();
    })

    it('Change Account Details', () => {
        companyOverview.selectLinkWithText('Change account details');
        cy.accessibilityCheck();
    })

    it('Help with confirmation statement screen', () => {
        cy.visit('/help//en/stdwf/confirmationStatementHelp.html');
        cy.accessibilityCheck();
        // Go back to company overview screen to exit the test
        cy.visit('//profile')

    })

})