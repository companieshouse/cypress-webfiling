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
        cy.accessibilityCheck();
        ar01Page.confirmUpdates();
        // Capital tab
        cy.accessibilityCheck();
        ar01Page.goToAmountUnpaidSection()
        .enterTotalAggAmountUnpaid(0)
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

    it('Test the accessibility of an Annual Return', () => {
        /*cs01LandingPage.changeDateOfStatementLink();
        cy.accessibilityCheck();

        cs01LandingPage.proceedWithFiling();
        cy.accessibilityCheck();

        cs01MainPage.openSections();
        cy.accessibilityCheck();

        // A total aggregate unpaid value must be provided in order to submit the form 
        cs01MainPage.enterTotalAggregateAmountUnpaid(0).clickConfirmCheckbox()
        .submitForm();

        paymentSelectionPage.selectPaymentByAccount()
        .enterPresenterID().enterPresenterAuthcode()
        cy.accessibilityCheck();
        paymentSelectionPage.continue();

        //Check Submission screen
        submissionConfirmationPage.confirmHeadingContains("Confirmation of Submission and Payment");*/
        cy.accessibilityCheck();    
    })
})