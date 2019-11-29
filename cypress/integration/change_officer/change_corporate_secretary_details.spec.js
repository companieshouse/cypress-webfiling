import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import DirectorAndSecretariesPage from '../../support/page_objects/DirectorsAndSecretariesPage'
import AppointCorporateSecretaryPage from '../../support/page_objects/AppointCorporateSecretaryPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage';
import AccountsReminderPage from '../../support/page_objects/AccountsReminderPage';
import ChangeCorporateSecretaryDetailsPage from '../../support/page_objects/ChangeCorporateSecretaryDetailsPage';
import CorporateSecretaryChangeDetailsPreFilingPage  from '../../support/page_objects/CorporateSecretaryChangeDetailsPreFilingPage'

// Constants
const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const directorAndSecretaries = new DirectorAndSecretariesPage();
const appointCorporateSecretaryPage = new AppointCorporateSecretaryPage();
const submissionConfirmation = new SubmissionConfirmationPage();
const accountsReminder = new AccountsReminderPage();
const changeCorporateSecretaryDetails = new ChangeCorporateSecretaryDetailsPage();


describe('Change corporate secretary details - CH04', () => {
    beforeEach('Appoint a corporate secretary prior to amending details', () => {
        cy.log('Appointing corporate secretary');

        companyOverview.selectAllForms().selectLinkWithText('Directors and secretaries')
            .selectLinkWithText('Appointment of corporate secretary- AP04');

        // Check correct page is loaded
        cy.checkPageHeadingIs('Appointment of a corporate secretary');

        // Repeat calls for accessibility checks
        appointCorporateSecretaryPage.enterCompanyName("Test Automation Limited");

        appointCorporateSecretaryPage.selectTodayAsAppointmentDate();

        appointCorporateSecretaryPage.enterCompanyAddress('10', 'CF14 3UZ');

        appointCorporateSecretaryPage.selectEEAStatus(false);

        appointCorporateSecretaryPage.consentToAct();

        // Check disclaimer is correct
        cy.checkDisclaimer();

        // Submit form
        appointCorporateSecretaryPage.submitForm();
        submissionConfirmation.confirmHeadingContains('Confirmation of Submission')
        .continue();

        // Do not file accounts
        accountsReminder.doNotFileAccounts();

        // Must return to Home Page here to set state for actual test
        cy.title().should('eq', 'Companies House - Company overview');

    })

    it('Change Address Premise Details', () => {
        cy.log('Selecting Change corporate secretary');
        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectDirectorAndSecretaries()
            .selectCH04();

        // Select officer by name
        cy.accessibilityCheck();
        directorAndSecretaries.selectOfficerToEdit('TEST AUTOMATION LIMITED');

        // Check to ensure Tick and Cross are displayed
        const preFiling = new CorporateSecretaryChangeDetailsPreFilingPage();
        preFiling.checkPageIsDisplayedCorrectly();
        cy.accessibilityCheck();

        // Select change officer
        preFiling.changeCorporateSecretaryDetails();
        cy.accessibilityCheck();
        // Enter date of change
        enterTodaysDate(); 

        // Change address
        changeCorporateSecretaryDetails.changeAddressPremise();

    })

    function enterTodaysDate() {
        // Apply today's date for date of change
        const dayElement = "#day-select-1";
        const monthElement = "#month-select-1";
        const yearElement = "#year-select-1";

        cy.selectTodaysDate(dayElement, monthElement, yearElement);

    }
})