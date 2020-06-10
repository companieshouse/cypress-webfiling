import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage';
import AccountsLandingPage from '../../support/page_objects/AccountsLandingPage';
import MicroEntityBalanceSheet from '../../support/page_objects/MicroEntityBalanceSheet';
import { invalid_character } from '../../fixtures/test_inputs.json';

const companyOverview = new CompanyOverviewPage();
const accountsLandingPage = new AccountsLandingPage();
const microEntityBalanceSheet = new MicroEntityBalanceSheet();
const submissionConfirmation = new SubmissionConfirmationPage();

describe('File Company Accounts', () => {
    beforeEach('Select Accounts from overview', () => {
        // Select accounts from overview
        companyOverview.selectLinkWithText("File company accounts");
        cy.accessibilityCheck();
    })

    it('Successfully file Micro-entity accounts', () => {
        accountsLandingPage.fileMicroEntityAccounts();
        // Check the micro-entity accounts landing page
        cy.accessibilityCheck();
        // Proceed past micro-entity accounts pre-filing page
        accountsLandingPage.proceedPastPreFilingScreen();
        cy.accessibilityCheck();
        //Populate necessary fields of balance sheet
        microEntityBalanceSheet.enterCalledUpShareCapitalNotPaid(0, 0)
            .enterTotalFixedAssets(1, 1)
            .enterTotalCurrentAssets(1, 1)
            .enterCapitalAndReserves(2, 2)
            .confirmBalanceSheetStatements()
            .enterDateOfApproval(Cypress.moment().format('DD/MM/YYYY'))
            .enterApprovingDirector("Test Person")
        cy.accessibilityCheck();
        // There are buttons here which navigate to different screens where users can provide more supporting
        // information. This opens each one and conducts an accessibility check on the screens.
        microEntityBalanceSheet.openAndCheckAdditionalNotes()
            .validateBalanceSheetAndContinue();
        // Check the summary page
        cy.accessibilityCheck();
        microEntityBalanceSheet.submitAccountsFiling();
        submissionConfirmation.confirmHeadingContains("Confirmation of Submission");

    })

    it("Check Micro-entity Accounts Exclusions page", () => {
        cy.visit("/help/en/stdwf/microExclusions.html");
        cy.accessibilityCheck();
        // Go back to company overview screen to exit the test
        cy.visit('/profile');
    })

    it("Check Micro-entity help text", () => {
        cy.visit("/help/en/stdwf/microAccountsHelp.html");
        cy.accessibilityCheck();
        // Go back to company overview screen to exit the test
        cy.visit('/profile');
    })

    it('Successfully file Micro-entity accounts', () => {
        accountsLandingPage.fileMicroEntityAccounts();
        // Check the micro-entity accounts landing page
        cy.accessibilityCheck();
        // Proceed past micro-entity accounts pre-filing page
        accountsLandingPage.proceedPastPreFilingScreen();
        cy.accessibilityCheck();
        //Populate fields of balance sheet with and invlid character
        microEntityBalanceSheet.enterCalledUpShareCapitalNotPaid(invalid_character, invalid_character)
            .enterTotalFixedAssets(invalid_character, invalid_character)
            .enterTotalCurrentAssets(invalid_character, invalid_character)
            .enterCapitalAndReserves(invalid_character, invalid_character)
            .enterApprovingDirector(invalid_character)
            .validateBalanceSheetAndContinue();
        // Check the page with errors shown
        cy.accessibilityCheck();

    })
})