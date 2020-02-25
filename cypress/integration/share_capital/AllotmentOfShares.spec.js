import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'
import AllotmentOfSharesPage from '../../support/page_objects/AllotmentOfSharesPage'
import AddAllotmentPage from '../../support/page_objects/AddAllotmentPage'
import UpdateOrAmendCapitalPage from '../../support/page_objects/UpdateOrAmendCapitalPage'
import AddNewShareClassToCurrencyPage from '../../support/page_objects/AddNewShareClassToCurrencyPage'
import AddNewCurrencyAndShareClassPage from '../../support/page_objects/AddNewCurrencyAndShareClassPage'

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const allotmentOfSharesPage = new AllotmentOfSharesPage();
const addAllotmentPage = new AddAllotmentPage
const submissionConfirmationPage = new SubmissionConfirmationPage();
const updateOrAmendCapitalPage = new UpdateOrAmendCapitalPage();
const addNewShareClassToCurrencyPage = new AddNewShareClassToCurrencyPage();
const addNewCurrencyAndShareClassPage = new AddNewCurrencyAndShareClassPage();


describe('Return of allotment of shares - SH01', () => {
    beforeEach(() => {
        // Select form from overview
        companyOverview.selectAllForms();
        allForms.selectShareCapitalForms()
            .selectSh01();

        // Check Allotment of shares pre-filing screen
        cy.accessibilityCheck();
        allotmentOfSharesPage.proceedPastPreFilingScreen();

    })
    
    it('SH01 Sucessful Submission and error validation', () => {
        // Allotment dates tab
        //Proceed without selecting a date then check accesibility of displayed error messages
        allotmentOfSharesPage.goToAllotmentOfSharesTab();
        cy.accessibilityCheck();
        //Enter valid date and proceed
        allotmentOfSharesPage.selectPeriodStartDate();
        allotmentOfSharesPage.goToAllotmentOfSharesTab();

        // Allotment of shares tab 
        // Add allotment page
        allotmentOfSharesPage.addAllotmentLink();
        //Expand all fields, select incorrect currency and leave all other fields blank
        addAllotmentPage.expandAll()
            .selectIncorrectCurrency()
            .submitForm();
        //check accessibility of section error messages
        cy.accessibilityCheck();
        //expand all sections and check individual field errors
        addAllotmentPage.expandAll();
        cy.accessibilityCheck();
        //cancel allotment and re-open screen to clear the errors
        addAllotmentPage.cancelAllotment();
        allotmentOfSharesPage.addAllotmentLink();

        // Add a valid allotment
        cy.accessibilityCheck();
        addAllotmentPage.selectCurrency("AZN - Azerbaijanian Manat");
        cy.accessibilityCheck();
        addAllotmentPage.selectShareClass("A Ordinary");
        cy.accessibilityCheck();
        addAllotmentPage.enterNumberOfSharesAndNominalValue(1, 1);
        cy.accessibilityCheck();
        addAllotmentPage.enterSharePayments(1, 0);
        cy.accessibilityCheck();
        addAllotmentPage.addAllotment();

        //Check the accessibility of the Allotment of shares tab with the newly added allotment displayed
        cy.accessibilityCheck();
        allotmentOfSharesPage.goToStatementOfCapitalTab();

        // Statement of Capital tab
        cy.accessibilityCheck();
        allotmentOfSharesPage.updateAmendCapitalLink();

        // Update or amend capital page
        cy.accessibilityCheck();
        //Enter invalid information, checking each section for the accessibility of error messages
        updateOrAmendCapitalPage.enterInvalidInformationInFieldsAndCheck();
        //Enter correct information, checking each section for accessibility violations.
        updateOrAmendCapitalPage.amendClassOfShare("A Ordinary");
        cy.accessibilityCheck();
        updateOrAmendCapitalPage.editNumberOfSharesAndNominalValue("1");
        cy.accessibilityCheck();
        updateOrAmendCapitalPage.enterPrescribedParticulars("Amend capital test " + Cypress.moment());
        cy.accessibilityCheck();
        updateOrAmendCapitalPage.submitForm();
        cy.accessibilityCheck();

        // Add new share class to this currency page
        //submit without selections to fire section errors and check accessibility
        allotmentOfSharesPage.addNewShareClassToCurrency();
        addNewShareClassToCurrencyPage.expandAll()
        .addShareClass();
        cy.accessibilityCheck();
        //Expaand all sections to check field errors
        addNewShareClassToCurrencyPage.expandAll();
        cy.accessibilityCheck();
        //return to previous page to continue submission
        addNewShareClassToCurrencyPage.cancelAddShareClass();

        // Add new currency and share class page
        //submit without selections to fire section errors and check accessibility
        allotmentOfSharesPage.addNewCurrencyAndShareClass();
        addNewCurrencyAndShareClassPage.expandAll()
        .selectIncorrectCurrency()
        .addCurrencyAndShareClass();
        cy.accessibilityCheck();
        //Expaand all sections to check field errors
        addNewShareClassToCurrencyPage.expandAll();
        cy.accessibilityCheck();
        //return to previous page to continue submission
        addNewCurrencyAndShareClassPage.cancelAddCurrencyAndShareClass();

        // Amount Unpaid tab
        allotmentOfSharesPage.goToAmountUnpaidTab();
        cy.accessibilityCheck();

        //Blank total aggregate amount unpaid to fire error message and check its accessibility
        allotmentOfSharesPage.enterTotalAggregateAmountUnpaid(" ")
        .submitShareAllotment();
        cy.accessibilityCheck();

        //Valid total aggregate amount unpaid
        allotmentOfSharesPage.enterTotalAggregateAmountUnpaid(0);

        // Submit and confirm submission
        allotmentOfSharesPage.submitShareAllotment();
        submissionConfirmationPage.confirmHeadingContains('Confirmation of Submission')
        cy.accessibilityCheck();

    })

})