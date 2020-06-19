import CompanyOverviewPage from "../../support/page_objects/CompanyOverviewPage";
import AppointSecretaryPage from "../../support/page_objects/AppointSecretaryPage";
import SubmissionConfirmationPage from "../../support/page_objects/SubmissionConfirmationPage";

const companyOverview = new CompanyOverviewPage();
const secretaryDetailsPage = new AppointSecretaryPage();
const submissionConfirmation = new SubmissionConfirmationPage();

describe('Appoint a secretary', () => {
    beforeEach('Go to AP03 form', () => {
        // Accessibility check
        cy.accessibilityCheck();

        // Go to AP03 from Overview screen
        companyOverview.selectLinkWithText('Appoint a secretary');
        secretaryDetailsPage.proceedPastPreFilingScreen();

        // Check correct page is loaded
        cy.checkPageHeadingIs('Appointment of a secretary');
        cy.accessibilityCheck();
    })

    it('Appoint secretary - AP03', () => {

        // Enter secretary details
        secretaryDetailsPage.enterName("Mr", "Test", "Automation", "Ninja");

        // cy.accessibilityCheck();
        secretaryDetailsPage.selectROasCorrespondenceAddress();

        cy.accessibilityCheck();
        secretaryDetailsPage.selectTodayAsAppointmentDate();

        cy.accessibilityCheck();
        secretaryDetailsPage.consentToAct();

        // Check disclaimer is correct
        cy.checkDisclaimer();

        secretaryDetailsPage.submitForm();

        // Confirm submission
        submissionConfirmation.confirmHeadingContains('Confirmation of Submission')
        cy.accessibilityCheck();


    })

    it('AP03 - Error message validation', () => {

        secretaryDetailsPage.expandAll()
        .submitForm();

        cy.accessibilityCheck();

        secretaryDetailsPage.expandAll();
        cy.accessibilityCheck();


    })
})