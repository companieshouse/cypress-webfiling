import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import PSCLandingPage from '../../support/page_objects/PSCLandingPage';
import PscAppointment from '../../support/page_objects/generic/PscAppointment';
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage.js';
const companyOverview = new CompanyOverviewPage();
const appointPSC03Page = new PscAppointment();
const pscLandingPage = new PSCLandingPage();
const submissionConfirmation = new SubmissionConfirmationPage();

describe('Appoint a legal person PSC', () => {
    beforeEach('Go to PSC03 Form', () => {

        cy.accessibilityCheck();
        companyOverview.selectLinkWithText('Add a PSC notification');

        cy.accessibilityCheck();
        pscLandingPage.appointPsc03();

        cy.accessibilityCheck();
        appointPSC03Page.proceedPastPreFilingScreen();

        // Check correct page is loaded
        cy.checkPageHeadingIs('Notification of a legal person with significant control (PSC)');
        cy.accessibilityCheck();


    })

    it('File successful PSC03', () => {

        appointPSC03Page.enterCorporateName("AAPV LTD");

        cy.accessibilityCheck();
        appointPSC03Page.lookupServiceAddress('1', 'CF14 3UZ');

        cy.accessibilityCheck();
        appointPSC03Page.enterEntityDetails('LTD', 'US');

        cy.accessibilityCheck();
        appointPSC03Page.selectNatureOfControl();

        cy.accessibilityCheck();
        appointPSC03Page.selectTodayAsNotificationDate();

        cy.accessibilityCheck();
        appointPSC03Page.selectTodayAsRegisterEntryDate();

        // Check disclaimer is correct
        cy.checkDisclaimer();

        appointPSC03Page.submitForm();
        // Confirm submission
        submissionConfirmation.confirmHeadingContains('Confirmation of Submission');
        cy.accessibilityCheck();

    })

    it('PSC03 Error message validation', () => { 
        // Submit with all fields blank to fire errors and check their accessibility
        appointPSC03Page.expandAll()
            .submitForm();
        cy.accessibilityCheck();

        // Expand secitons to check the accessibility of individual field errors
        appointPSC03Page.expandAll();
        cy.accessibilityCheck();
    })

})