import CompanyOverviewPage from "../../support/page_objects/CompanyOverviewPage";
import PreFilingCS01Page from "../../support/page_objects/PreFilingCS01Page";
import CS01LandingPage from "../../support/page_objects/CS01LandingPage";
import CS01MainPage from "../../support/page_objects/CS01MainPage";
import PaymentSelectionPage from "../../support/page_objects/PaymentSelectionPage";
import SubmissionConfirmationPage from "../../support/page_objects/SubmissionConfirmationPage";

const companyOverview = new CompanyOverviewPage();
const preFilingCS01Page = new PreFilingCS01Page();
const cs01LandingPage = new CS01LandingPage();
const cs01MainPage = new CS01MainPage();
const paymentSelectionPage = new PaymentSelectionPage();
const submissionConfirmationPage = new SubmissionConfirmationPage();

describe("Confirmation statement - CS01", () => {
    beforeEach(() => {
        // Select button to file Confirmation Statement from overview
        companyOverview.selectLinkWithText('File confirmation statement');
        cy.accessibilityCheck();
        // Start the filing on the pre-filing page
        preFilingCS01Page.startFiling();
        cy.accessibilityCheck();
    })

    it('Test the accessibility screens in the filing of a Confirmation Statement', () => {
        cs01LandingPage.changeDateOfStatementLink();
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
        submissionConfirmationPage.confirmHeadingContains("Confirmation of Submission and Payment");
        cy.accessibilityCheck();    
    })
})