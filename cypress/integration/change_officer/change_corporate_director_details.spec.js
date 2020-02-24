import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage';
import DirectorAndSecretariesPage from '../../support/page_objects/DirectorsAndSecretariesPage';
import AppointCorporateDirectorPage from '../../support/page_objects/AppointCorporateDirectorPage.js';
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage';
import AccountsReminderPage from '../../support/page_objects/AccountsReminderPage';
import AllFormsPage from '../../support/page_objects/AllformsPage';
import ChangeCorporateDirectorDetailsPage from '../../support/page_objects/ChangeCorporateDirectorDetailsPage';

const companyOverview = new CompanyOverviewPage();
const appointCorporateDirectorPage = new AppointCorporateDirectorPage();
const submissionConfirmation = new SubmissionConfirmationPage();
const accountsReminder = new AccountsReminderPage();
const allFormsPage = new AllFormsPage();
const directorAndSecretariesPage = new DirectorAndSecretariesPage();
const changeCorporateDirectorDetailsPage = new ChangeCorporateDirectorDetailsPage();

describe('Change corporate director details - CH02', () => {
    beforeEach('Appoint a corporate director prior to amending details', () => {
        cy.log('Appointing corporate director');
        companyOverview.selectAllForms().selectLinkWithText('Directors and secretaries')
            .selectLinkWithText('Appointment of corporate director - AP02');

        // Check correct page is loaded
        cy.checkPageHeadingIs('Appointment of a corporate director');

        appointCorporateDirectorPage.enterCompanyName("Change Corporate Director Test Automation Limited");
        appointCorporateDirectorPage.selectTodayAsAppointmentDate();
        appointCorporateDirectorPage.enterCompanyAddress('10', 'CF14 3UZ');
        appointCorporateDirectorPage.selectEEAStatus(true);
        appointCorporateDirectorPage.consentToAct();
        // Check disclaimer is correct
        cy.checkDisclaimer();
        // Submit form
        appointCorporateDirectorPage.submitForm();
        submissionConfirmation.confirmHeadingContains('Confirmation of Submission')
            .continue();
        // Do not file accounts
        accountsReminder.doNotFileAccounts();
        // Must return to Home Page here to set state for actual test
        cy.title().should('eq', 'Companies House - Company overview');

        cy.log('Selecting Change corporate director');
        companyOverview.selectAllForms();
        allFormsPage.selectDirectorAndSecretaries()
            .selectCH02();

        // Select officer by name
        directorAndSecretariesPage.selectOfficerToEdit('CHANGE CORPORATE DIRECTOR');
        // Change officer pre-filing page accessibility check 
        cy.accessibilityCheck();
        changeCorporateDirectorDetailsPage.proceedPastPreFilingScreen();

    })
    it('CH02 - Change Corporate Director details without submission', () => {
        //Check accessibility of change corporate director screen
        cy.accessibilityCheck();
        // Change officer name
        changeCorporateDirectorDetailsPage.enterDateOfChangeAsToday()
            .changeCorporateDirectorName("CHANGE CORPORATE DIRECTOR " + Cypress.moment())
            //A section warning fires here, so check it's accessibility 
            cy.accessibilityCheck();
            changeCorporateDirectorDetailsPage.submitForm();
            //Due to the above warning, the form is not submitted and an additional warning shown.
            //check the acccessibility here.
            cy.accessibilityCheck();
    })

})
