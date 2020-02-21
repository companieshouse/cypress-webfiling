import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import DirectorAndSecretariesPage from '../../support/page_objects/DirectorsAndSecretariesPage'
import ChangeSecretaryDetailsPage from '../../support/page_objects/ChangeSecretaryDetailsPage';
import GenericPreFilingPage from '../../support/page_objects/generic/GenericPreFilingPage';

// Constants
const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const directorAndSecretaries = new DirectorAndSecretariesPage();
const changeSecretaryDetails = new ChangeSecretaryDetailsPage();

describe('Change secretary details - CH03', () => {
    beforeEach(() => {
        cy.log('Selecting Change secretary');
        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectDirectorAndSecretaries()
            .selectCH03();

        // Select officer by name
        cy.accessibilityCheck();
        directorAndSecretaries.selectOfficerToEdit('Condition Publicity KNEEJERKBIRDHOUSE');

        // Check to ensure Tick and Cross are displayed
        const preFiling = new GenericPreFilingPage();
        preFiling.checkPageIsDisplayedCorrectly();
        cy.accessibilityCheck();

        // Select change officer
        preFiling.proceedPastPreFilingScreen();
        cy.accessibilityCheck();

    })

    it('Change Details', () => {
        // Change name
        changeSecretaryDetails.changeMiddleName('Public');

        // Change address
        changeSecretaryDetails.changeAddress('230', "CF46 6NW");

        // Enter date
        enterTodaysDate();
    })

    it('Make No change', () => {
        enterTodaysDate();

        // As no change has been made ensure the submission button is disabled
        cy.checkSubmitIsDisabled();
        cy.accessibilityCheck();
    })

    function enterTodaysDate() {
        // Apply today's date for date of change
        const dayElement = ".selector-day";
        const monthElement = ".selector-month";
        const yearElement = ".selector-year";

        cy.selectTodaysDate(dayElement, monthElement, yearElement);

    }
})