import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import AppointCorporateSecretaryPage from '../../support/page_objects/AppointCorporateSecretaryPage.js';
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage.js';

const companyOverview = new CompanyOverviewPage();
const appointCorporateSecretaryPage = new AppointCorporateSecretaryPage();
const submissionConfirmation = new SubmissionConfirmationPage();

describe('Appoint a Corporate Secretary', () => {
    beforeEach('Go to AP04 form', () => {
        cy.accessibilityCheck();
        companyOverview.selectAllForms().selectLinkWithText('Directors and secretaries')
            .selectLinkWithText('Appointment of corporate secretary - AP04');

        // Check correct page is loaded
        cy.checkPageHeadingIs('Appointment of a corporate secretary');
    })

    it('File successful AP04', () => {
        // Repeat calls for accessibility checks
        cy.accessibilityCheck();
        appointCorporateSecretaryPage.enterCompanyName("Test Automation Limited");

        cy.accessibilityCheck();
        appointCorporateSecretaryPage.selectTodayAsAppointmentDate();

        cy.accessibilityCheck();
        appointCorporateSecretaryPage.enterCompanyAddress('10', 'CF14 3UZ');

        cy.accessibilityCheck();
        appointCorporateSecretaryPage.selectEEAStatus(false);

        cy.accessibilityCheck();
        appointCorporateSecretaryPage.consentToAct();

        // Check disclaimer is correct
        cy.checkDisclaimer();

        appointCorporateSecretaryPage.submitForm();

        // Confirm submission
        submissionConfirmation.confirmHeadingContains('Confirmation of Submission')
        cy.accessibilityCheck();
    })

    it('AP04 - Error message validation', () => {
        // Submit without entering any information and check accessibility of error messages
        appointCorporateSecretaryPage.expandAll()
            .submitForm();

        // Section errors
        cy.accessibilityCheck();

        // Individual field errors
        appointCorporateSecretaryPage.expandAll();
        cy.accessibilityCheck();
    })

})
