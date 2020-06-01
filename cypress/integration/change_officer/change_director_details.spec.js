import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import DirectorAndSecretariesPage from '../../support/page_objects/DirectorsAndSecretariesPage'
import GenericPreFilingPage from '../../support/page_objects/generic/GenericPreFilingPage'
import ChangeOfficerDetailsPage from '../../support/page_objects/ChangeOfficerDetailsPage';

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const directorAndSecretaries = new DirectorAndSecretariesPage();
const changeOfficerDetailsPage = new ChangeOfficerDetailsPage();

const invalidCharacter = '`';

describe('Change director details - CH01', () => {
    beforeEach('Go to CH01 form', () => {
        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectDirectorAndSecretaries()
            .selectCH01();

        // Select officer by name
        cy.accessibilityCheck();
        directorAndSecretaries.selectOfficerToEdit('Commission Flanker BAROMETERLIQUOR');

        // Check to ensure Tick and Cross are displayed
        const preFiling = new GenericPreFilingPage();
        preFiling.checkPageIsDisplayedCorrectly();
        cy.accessibilityCheck();

        // Make a change to the selected officer
        preFiling.proceedPastPreFilingScreen();
        cy.accessibilityCheck();

    })

    it('Check sections first without and then with error messages present. No submission submitted', () => {
        // Initial check before interacting with page
        cy.accessibilityCheck();

        // These methods first check the individual sections before making changes. They then enter
        // invalid data into fields to check the accessibility of the error messages displayed.

        changeOfficerDetailsPage.changeOfficerName(invalidCharacter, invalidCharacter, invalidCharacter, invalidCharacter);
        cy.accessibilityCheck();

        changeOfficerDetailsPage.changeNationality(invalidCharacter);
        cy.accessibilityCheck();

        changeOfficerDetailsPage.changeOccupation(invalidCharacter);
        cy.accessibilityCheck();

        changeOfficerDetailsPage.enterInvalidCorrespondenceAddress(invalidCharacter);
        cy.accessibilityCheck();
        
        changeOfficerDetailsPage.enterInvalidResidentialAddress(invalidCharacter);
        cy.accessibilityCheck();
        
        changeOfficerDetailsPage.changeCountryOfResidence(invalidCharacter);
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