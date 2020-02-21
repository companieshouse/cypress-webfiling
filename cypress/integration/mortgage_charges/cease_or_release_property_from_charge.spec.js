import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'
import MortgageChargesListPage from '../../support/page_objects/MortgageChargesListPage'

import CeaseOrReleasePropertyFromCharge from '../../support/page_objects/CeaseOrReleasePropertyFromCharge'

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const submissionConfirmationPage = new SubmissionConfirmationPage();
const ceaseOrReleasePropertyFromCharge = new CeaseOrReleasePropertyFromCharge();
const mortgageChargesListPage = new MortgageChargesListPage();



describe('Cease or release property from a charge - MR05', () => {
    beforeEach('Select MR05 Form and navigate past pre-filing screen', () => {
        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectMortgageForms()
            .selectMr05();

        //Check the Cease or release property from a charge pre-filing page
        cy.accessibilityCheck();
        ceaseOrReleasePropertyFromCharge.proceedPastPreFilingScreen();

        //Check the accessibility of the Charges list page then select the first charge
        cy.accessibilityCheck();
        mortgageChargesListPage.selectFirstCharge();

        //Perform initial accessibility check
        cy.accessibilityCheck();

    })

    it('MR05 - Cease or release property from a charge successful', () => {
        
        //Populate the Cease or release property from a charge screen
        ceaseOrReleasePropertyFromCharge.selectAllPropertyAsExtentOfRelease()
        .selectReleasedFromChargeForCeaseOrRelease()
        .enterInterestInCharge("Testing")
        .enterName("A Testperson")
        .enterHomeAddress("1", "CF46 6NW")
        .submitForm();
        //Check Submission screen
        submissionConfirmationPage.confirmHeadingContains("Confirmation of Submission");
        cy.accessibilityCheck();
    })

    it('MR05 - Cease or release property from a charge Error Validation', () => {

        //Submit form without entering any information to fire error messages
        ceaseOrReleasePropertyFromCharge.expandAll()
        cy.accessibilityCheck();
        ceaseOrReleasePropertyFromCharge.clickEnterAddressManually()
        .enterInvalidCharactersToFireErrors("`")
        .submitForm();
        //check accessibility of page with section error messages displayed
        cy.accessibilityCheck();

        //Expand all sections to view individual field errors and check their accessibility
        ceaseOrReleasePropertyFromCharge.expandAll();
        cy.accessibilityCheck();
    })
})