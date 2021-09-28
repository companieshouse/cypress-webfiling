import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import AppointDirectorPage from '../../support/page_objects/AppointDirectorPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage.js';

// Constants
const companyOverview = new CompanyOverviewPage();
const appointDirectorPage = new AppointDirectorPage();
const submissionConfirmation = new SubmissionConfirmationPage();

describe('Appoint a Director', () => {
    beforeEach('Go to RP04AP01 form', () => {
        companyOverview.selectAllForms().selectLinkWithText('Amend an error on a previously filed document')
            .selectLinkWithText('Amend error on previously filed appointment of director - RP04 (for AP01)');

        appointDirectorPage.proceedPastPreFilingScreen();

        // Check correct page is loaded
        cy.checkPageHeadingIs('Amend an error on a previously filed appointment of a director');
        cy.accessibilityCheck();
    })

    it('File successful RP04AP01', () => {
        // Enter details
        appointDirectorPage.selectOriginalFormFilingDateAsToday();
        cy.accessibilityCheck();

        // Enter details
        appointDirectorPage.enterName("Mr", "Test", "Automation", "Ninja");
        // Repeat calls for accessibility checks
        cy.accessibilityCheck();
        appointDirectorPage.selectDateOfBirth('1', 'January', '1980');

        cy.accessibilityCheck();
        appointDirectorPage.enterNationality('Welsh');

        cy.accessibilityCheck();
        appointDirectorPage.enterOccupation('Company Director');

        cy.accessibilityCheck();
        appointDirectorPage.selectROasCorrespondenceAddress();

        cy.accessibilityCheck();
        appointDirectorPage.enterHomeAddress('10', 'CF14 3UZ');

        cy.accessibilityCheck();
        appointDirectorPage.checkCountryOfResidenceContains('Wales');

        cy.accessibilityCheck();
        appointDirectorPage.selectTodayAsAppointmentDate();

        cy.accessibilityCheck();
        appointDirectorPage.consentToAct();

        // Check disclaimer is correct
        cy.checkDisclaimer();

        appointDirectorPage.submitForm();

        // Confirm submission
        submissionConfirmation.confirmHeadingContains('Confirmation of Submission')
        cy.accessibilityCheck();


    })

    it('Mandatory Field Error validation - RP04AP01', () => {
        appointDirectorPage.expandAll();

        // Open Address sections
        appointDirectorPage.expandCorrespondenceDetails();
        appointDirectorPage.expandHomeAddressDetails();

        // Submit form without entering any information
        appointDirectorPage.submitForm();

        // Accessibility check - collapsed sections
        cy.accessibilityCheck();

        // Expand All once more to check individual field errors
        appointDirectorPage.expandAll();

        // Accessibility check
        cy.accessibilityCheck();

    })

})