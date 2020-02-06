import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import DirectorAndSecretariesPage from '../../support/page_objects/DirectorsAndSecretariesPage'

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const directorAndSecretaries = new DirectorAndSecretariesPage();

describe('Terminate secretary appointment - TM02', () => {
    beforeEach(() => {    
        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectDirectorAndSecretaries()
            .selectTM02();
        // Select officer by name
        cy.accessibilityCheck();
        directorAndSecretaries.selectOfficerToRemove('Condition Publicity KNEEJERKBIRDHOUSE');
    })

    it('Fill in all fields prior to submission and check accessibility', () => {
        // Apply today's date for date of change
        cy.selectTodaysDate("#day-select-1", "#month-select-1", "#year-select-1");
        // Click the confirm termination checkbox
        directorAndSecretaries.confirmTermination();
        // Check accessibility after making changes
        cy.accessibilityCheck();
    })
    
    it('Submit form with invalid information and check accessibility', () => {
        // Submit without entering any information to fire errors
        directorAndSecretaries.submitTermination();
        // Check accessibility after making changes
        cy.accessibilityCheck();
    })

})