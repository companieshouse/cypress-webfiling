import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import DirectorAndSecretariesPage from '../../support/page_objects/DirectorsAndSecretariesPage'
import GenericPreFilingPage from '../../support/page_objects/generic/GenericPreFilingPage';
import ChangeOfficerDetailsPage from '../../support/page_objects/ChangeOfficerDetailsPage';
import { invalid_character } from '../../fixtures/test_inputs.json';

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const directorAndSecretaries = new DirectorAndSecretariesPage();
const changeOfficerDetailsPage = new ChangeOfficerDetailsPage();

describe('Change secretary details - CH03', () => {
    beforeEach('Go to CH03 form', () => {
        cy.log('Selecting Change secretary');
        // Select form from overview
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

    it('Check sections first without and then with error messages present. No submission submitted', () => {
        // Initial check before interacting with page
        cy.accessibilityCheck();

        // These methods first check the individual sections before making changes. They then enter
        // invalid data into fields to check the accessibility of the error messages displayed.

        changeOfficerDetailsPage.changeOfficerName(invalid_character, invalid_character, invalid_character, invalid_character);
        cy.accessibilityCheck();

        changeOfficerDetailsPage.enterInvalidCorrespondenceAddress(invalid_character);
        cy.accessibilityCheck();

        // Apply today's date for date of change
        const dayElement = ".selector-day";
        const monthElement = ".selector-month";
        const yearElement = ".selector-year";

        cy.selectTodaysDate(dayElement, monthElement, yearElement);

        // As invalid changes have been made, ensure the submission button is disabled
        cy.checkSubmitIsDisabled();
        cy.accessibilityCheck();
    })

})