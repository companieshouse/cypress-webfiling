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
        cy.visit('https://ewf-kermit.companieshouse.gov.uk//profile')
    })

    it.only('Join PROOF', () => {
        companyOverview.selectLinkWithText('Join PROOF');
        cy.accessibilityCheck();

        // Open PROOF t's & c's link. Opens in a new window so call cy.visit() in order to test
        cy.visit('https://ewf-kermit.companieshouse.gov.uk/help//en/stdwf/proofTandC.html');
        cy.accessibilityCheck();

        // Go back to company overview screen to exit the test
        cy.visit('https://ewf-kermit.companieshouse.gov.uk//profile')

        
    })

    /*it('Request Email', () => {
        
    })

    it('Recent Filings', () => {
        
    })

    it('Company Authentication', () => {
        
    })

    it('Change Account Details', () => {
        
    })*/
})