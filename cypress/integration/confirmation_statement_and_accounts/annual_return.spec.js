import CompanyOverviewPage from "../../support/page_objects/CompanyOverviewPage";
import PaymentSelectionPage from "../../support/page_objects/PaymentSelectionPage";
import SubmissionConfirmationPage from "../../support/page_objects/SubmissionConfirmationPage";
import AllFormsPage from "../../support/page_objects/AllformsPage";
import AR01Page from "../../support/page_objects/AR01Page";
import ContactDetailsAndAuthorisationPage from "../../support/page_objects/ContactDetailsAndAuthorisationPage";

const companyOverview = new CompanyOverviewPage();
const allFormsPage = new AllFormsPage();
const ar01Page = new AR01Page();
const contactDetailsAndAuthorisationPage = new ContactDetailsAndAuthorisationPage();
const paymentSelectionPage = new PaymentSelectionPage();
const submissionConfirmationPage = new SubmissionConfirmationPage();

describe("Annual Return - AR01", () => {
    beforeEach(() => {
        // Select Annual Return form from overview
        companyOverview.selectAllForms();
        allFormsPage.selectConfirmationStatementAndAccounts()
            .selectAR01();
        // Check the AR01 landing page
        cy.accessibilityCheck();

        // Start the filing on the pre-filing page
        ar01Page.enterDateOfReturn("20/06/2016")
            .proceedToFilingScreen();
    })

    it('Test the accessibility of an Annual Return', () => {
        // Registered Address Details tab
        cy.accessibilityCheck();
        ar01Page.confirmUpdates();

        // Location of Company Registers tab
        cy.accessibilityCheck();
        ar01Page.confirmUpdates();

        // Company Officers tab 
        cy.accessibilityCheck();
        ar01Page.confirmUpdates();

        // SIC tab
        // Remove sic code to fire errors
        cy.accessibilityCheck();
        ar01Page.removeSicCode()
        cy.accessibilityCheck();
        // re-add sic code
        ar01Page.addNewSicCode("85xxx - Education", "85200")
            .confirmUpdates();

        // Capital tab
        // Proceed without entering total aggregate amount unpaid
        cy.accessibilityCheck();
        ar01Page.goToAmountUnpaidSection()
            .confirmUpdates();
        cy.accessibilityCheck();
        // Now add total aggregate amount unpaid
        ar01Page.enterTotalAggAmountUnpaid(0)
            .confirmUpdates();

        // Shareholders tab
        //cy.accessibilityCheck();
        ar01Page.confirmUpdates();

        // Submit tab
        cy.accessibilityCheck();
        ar01Page.submitAr01();

        // Contact details and authorisation page
        cy.accessibilityCheck();
        contactDetailsAndAuthorisationPage.submitAuthorisation();

        // Payment Selection Page
        cy.accessibilityCheck();
        paymentSelectionPage.selectPaymentByAccount()
            .enterPresenterID().enterPresenterAuthcode()
        cy.accessibilityCheck();
        paymentSelectionPage.continue();

        //Check Submission screen
        submissionConfirmationPage.confirmHeadingContains("Confirmation of Submission and Payment");
        cy.accessibilityCheck();
    })
})
