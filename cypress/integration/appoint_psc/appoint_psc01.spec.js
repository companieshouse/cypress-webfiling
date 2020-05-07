import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import AppointPSC01Page from '../../support/page_objects/AppointPSC01Page';
import PSCLandingPage from '../../support/page_objects/PSCLandingPage';
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage.js';

const companyOverview = new CompanyOverviewPage();
const appointPSCPage = new AppointPSC01Page();
const pscLandingPage = new PSCLandingPage();
const submissionConfirmation = new SubmissionConfirmationPage();

describe('Appoint an individual PSC', () => {
    beforeEach(() => {
        // Go to PSC01 form
        cy.accessibilityCheck();
        companyOverview.selectLinkWithText('Add a PSC notification');

        cy.accessibilityCheck();
        pscLandingPage.appointPsc01();

        cy.accessibilityCheck();
        appointPSCPage.proceedPastPreFilingScreen();

        // Check correct page is loaded
        cy.checkPageHeadingIs('Notification of a person with significant control (PSC)');
        cy.accessibilityCheck();

    })

    it('File successful PSC01', () => {

        appointPSCPage.enterName("Mr", "Test", "Automation", "Ninja");

        cy.accessibilityCheck();
        appointPSCPage.selectDateOfBirth('1', 'January', '1980');

        cy.accessibilityCheck();
        appointPSCPage.enterNationality('British');

        cy.accessibilityCheck();
        appointPSCPage.selectROasCorrespondenceAddress();

        cy.accessibilityCheck();
        appointPSCPage.enterHomeAddress('10', 'CF14 3UZ');

        cy.accessibilityCheck();
        appointPSCPage.checkCountryOfResidenceContains('Wales');

        cy.accessibilityCheck();
        appointPSCPage.selectNatureOfControl();

        cy.accessibilityCheck();
        appointPSCPage.selectTodayAsNotificationDate();

        cy.accessibilityCheck();
        appointPSCPage.selectTodayAsRegisterEntryDate();

        // Check disclaimer is correct
        cy.checkDisclaimer();

        appointPSCPage.submitForm();
        // Confirm submission
        submissionConfirmation.confirmHeadingContains('Confirmation of Submission');
        cy.accessibilityCheck();
    })

    it('PSC01 field error validation', () => {
        // Submit with all fields blank to fire errors and check their accessibility
        appointPSCPage.expandAll()
            .submitForm();
        cy.accessibilityCheck();

        // Expand secitons to check the accessibility of individual field errors
        appointPSCPage.expandAll();
        cy.accessibilityCheck();

    })

})