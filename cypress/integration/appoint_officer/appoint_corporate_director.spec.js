import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import AppointCorporateDirectorPage from '../../support/page_objects/AppointCorporateDirectorPage.js';
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage.js';

const companyOverview = new CompanyOverviewPage();
const appointCorporateDirectorPage = new AppointCorporateDirectorPage();
const submissionConfirmation = new SubmissionConfirmationPage();

describe('Appoint a Corporate Director', () => {

    beforeEach('Go to AP02 form', () => {
        companyOverview.selectAllForms().selectLinkWithText('Directors and secretaries')
            .selectLinkWithText('Appointment of corporate director - AP02');

        // Check correct page is loaded
        cy.checkPageHeadingIs('Appointment of a corporate director');
    })
    
    it('File successful AP02', () => {
        // Repeat calls for accessibility checks
        cy.accessibilityCheck();
        appointCorporateDirectorPage.enterCompanyName("Test Automation Limited");

        cy.accessibilityCheck();
        appointCorporateDirectorPage.selectTodayAsAppointmentDate();

        cy.accessibilityCheck();
        appointCorporateDirectorPage.enterCompanyAddress('10', 'CF14 3UZ');

        cy.accessibilityCheck();
        appointCorporateDirectorPage.selectEEAStatus(true);

        cy.accessibilityCheck();
        appointCorporateDirectorPage.consentToAct();

        // Check disclaimer is correct
        cy.checkDisclaimer();

        appointCorporateSecretaryPage.submitForm();

        // Confirm submission
        submissionConfirmation.confirmHeadingContains('Confirmation of Submission')
        cy.accessibilityCheck();
    })

    it('AP02 - error message validation', () => {

        // Expand all fields and submit without entering information to fire error messages 
        appointCorporateDirectorPage.expandAll()
        .enterAddressManually()
        .submitForm();

        // Accessibilty check on the section errors
        cy.accessibilityCheck();

        // Expand all to see the field error messages and perform check
        appointCorporateDirectorPage.expandAll();
        cy.accessibilityCheck();
                
    })

})