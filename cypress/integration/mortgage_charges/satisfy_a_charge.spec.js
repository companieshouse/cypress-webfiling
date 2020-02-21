import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'
import MortgageChargesListPage from '../../support/page_objects/MortgageChargesListPage'
import SatisfyMortgageChargePage from '../../support/page_objects/SatisfyMortgageChargePage'

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const submissionConfirmationPage = new SubmissionConfirmationPage();
const satisfyMortgageChargePage = new SatisfyMortgageChargePage();
const mortgageChargesListPage = new MortgageChargesListPage();


describe('Satisfy a charge - MR04', () => {
    beforeEach('Select MR04 Form and navigate past pre-filing screen', () => {
        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectMortgageForms()
            .selectMr04();

        //Check the Satisfy a Charge pre-filing page
        cy.accessibilityCheck();
        satisfyMortgageChargePage.proceedPastPreFilingScreen();

        //Check the accessibility of the Charges list page then click Satisfy on the first charge
        cy.accessibilityCheck();
        mortgageChargesListPage.selectFirstCharge();

        //Perform initial accessibility check
        cy.accessibilityCheck();

    })

    it('MR04 - Satisfaction of a charge successful', () => {
        
        //Populate the Satisfy a charge form
        //Check accessibility as screen changes
        satisfyMortgageChargePage.selectSatisfiedInFull();
        cy.accessibilityCheck();

        satisfyMortgageChargePage.enterInterestInCharge("Testing");
        cy.accessibilityCheck();

        satisfyMortgageChargePage.enterName("A Testperson");
        cy.accessibilityCheck();

        satisfyMortgageChargePage.enterHomeAddress("1", "CF14 3UZ");
        cy.accessibilityCheck();

        satisfyMortgageChargePage.submitForm();
        //Check Submission screen
        submissionConfirmationPage.confirmHeadingContains("Confirmation of Submission");
        cy.accessibilityCheck();
    })

    it('MR04 - Satifaction of a charge Error Validation', () => {

        //Submit form without entering any information to fire error messages
        satisfyMortgageChargePage.expandAll();
        cy.accessibilityCheck();
        satisfyMortgageChargePage.clickEnterAddressManually()
        .enterInvalidCharactersToFireErrors("`")
        .submitForm();
        //check accessibility of page with section error messages displayed
        cy.accessibilityCheck();

        //Expand all sections to view individual field errors and check their accessibility
        satisfyMortgageChargePage.expandAll();
        cy.accessibilityCheck();
    })
})
