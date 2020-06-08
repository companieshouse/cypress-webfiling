import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage';
import AccountsLandingPage from '../../support/page_objects/AccountsLandingPage';
import AbbreviatedBalanceSheet from '../../support/page_objects/AbbreviatedBalanceSheet';
import IntangibleAssetsFixedNote from '../../support/page_objects/IntangibleAssetsFixedNote';
import TangibleAssetsFixedNote from '../../support/page_objects/TangibleAssetsFixedNote';
import InvestmentsNote from '../../support/page_objects/InvestmentsNote';
import DebtorsNote from '../../support/page_objects/DebtorsNote';
import CalledUpShareCapitalNote from '../../support/page_objects/CalledUpShareCapitalNote';
import AccountingPoliciesNote from '../../support/page_objects/AccountingPoliciesNote';
import TransactionsWithDirectorsNote from '../../support/page_objects/TransactionsWithDirectorsNote';
import { invalid_character } from '../../fixtures/test_inputs.json';
import { text_string } from '../../fixtures/test_inputs.json';

const companyOverview = new CompanyOverviewPage();
const accountsLandingPage = new AccountsLandingPage();
const abbreviatedBalanceSheet = new AbbreviatedBalanceSheet();
const intangibleAssetsFixedNote = new IntangibleAssetsFixedNote();
const tangibleAssetsFixedNote = new TangibleAssetsFixedNote();
const investmentsNote = new InvestmentsNote();
const debtorsNote = new DebtorsNote();
const calledUpShareCapitalNote = new CalledUpShareCapitalNote();
const accountingPoliciesNote = new AccountingPoliciesNote();
const transactionsWithDirectorsNote = new TransactionsWithDirectorsNote();
const submissionConfirmation = new SubmissionConfirmationPage();

describe('File Company Accounts', () => {
    beforeEach('Select Accounts from overview', () => {
        // Select accounts from overview
        companyOverview.selectLinkWithText("File company accounts");
        cy.accessibilityCheck();
    })

    it('Successfully file Abbreviated Accounts', () => {
        accountsLandingPage.fileAbbreviatedAccounts();
        // Check the Abbreviated Accounts landing page
        cy.accessibilityCheck();
        // Proceed past micro-entity accounts pre-filing page
        accountsLandingPage.proceedPastPreFilingScreen();
        cy.accessibilityCheck();
        //Populate necessary fields of balance sheet
        abbreviatedBalanceSheet.enterCalledUpShareCapitalNotPaid(0, 0)
            .enterFixedAssets(1, 1, 1, 1, 1, 1)
            .enterCurrentAssets(1, 1, 1, 1, 1, 1, 1, 1)
            .enterCurrentAssetsLiabilities(1, 1, -1, -1)
            .enterTotalNetAssets(-1, -1, -1, -1, -1, -1)
            .enterCapitalAndReserves(1, 1, 1, 1, 1, 1, 0, 0, 1, 1)
            .confirmBalanceSheetStatements()
            .enterDateOfApproval(Cypress.moment().format('DD/MM/YYYY'))
            .enterApprovingDirector("Test Person");
        cy.accessibilityCheck();
        // This first attempt at continuing shows some errors as separate notes are required. 
        abbreviatedBalanceSheet.validateBalanceSheetAndContinue();

        // Check accessibility of these errors here then supply the notes expected.
        cy.accessibilityCheck();

        //Intangible assests note
        abbreviatedBalanceSheet.openIntangibleAssetsNote();
        cy.accessibilityCheck();
        intangibleAssetsFixedNote.enterCost(1, 1, 1, 1, 0)
            .enterAmortisation(0, 1, 0)
            .saveNote();
        cy.accessibilityCheck();

        // Tangible assets note
        abbreviatedBalanceSheet.openTangibleAssetsNote();
        cy.accessibilityCheck();
        tangibleAssetsFixedNote.enterCost(1, 1, 1, 1, 0)
            .enterDepreciation(0, 1, 0)
            .saveNote();
        cy.accessibilityCheck();

        // Investments note
        abbreviatedBalanceSheet.openInvestmentsNote();
        cy.accessibilityCheck();
        investmentsNote.enterNoteText("test")
            .saveNote();
        cy.accessibilityCheck();

        // Debtors note
        abbreviatedBalanceSheet.openDebtorsNote();
        cy.accessibilityCheck();
        debtorsNote.enterDebtorsInformation(1, 1)
            .saveNote();
        cy.accessibilityCheck();

        // Called up share capital note
        abbreviatedBalanceSheet.openCalledUpShareCapitalNote();
        cy.accessibilityCheck();
        calledUpShareCapitalNote.addShareClass("Ordinary", 1, 1, 1)
            .removeShareClass();
        cy.accessibilityCheck();
        calledUpShareCapitalNote.cancelNote();
        cy.accessibilityCheck();

        // Accounting policies note
        abbreviatedBalanceSheet.openAccountingPoliciesNote();
        cy.accessibilityCheck();
        accountingPoliciesNote.enterBasisOfAccounts(text_string)
            .enterTurnover(text_string)
            .enterTangibleAssetsDepreciation(text_string)
            .enterIntangibleAssetsAmortisation(text_string)
            .enterValuationInformation(text_string)
            .enterOtherPolicies(text_string);
        cy.accessibilityCheck();
        accountingPoliciesNote.saveNote();
        cy.accessibilityCheck();

        // Transactions with directors note
        abbreviatedBalanceSheet.openTransactionsWithDirectorsNote();
        cy.accessibilityCheck();
        transactionsWithDirectorsNote.addTransaction("Test Person", "Test", 1, 1, 1)
            .removeTransaction()
        cy.accessibilityCheck();
        transactionsWithDirectorsNote.cancelNote();
        cy.accessibilityCheck();

        // Check the summary page
        cy.accessibilityCheck();
        abbreviatedBalanceSheet.validateBalanceSheetAndContinue();
        // Check the summary page
        cy.accessibilityCheck();
        abbreviatedBalanceSheet.submitAccountsFiling();
        submissionConfirmation.confirmHeadingContains("Confirmation of Submission");
    })

    it("Check Accounts Exclusions page", () => {
        cy.visit("/help/en/stdwf/exclusions.html");
        cy.accessibilityCheck();
        // Go back to company overview screen to exit the test
        cy.visit('/profile');
    })

    it("Check Abbreviated Accounts Balance Sheet help text", () => {
        cy.visit("/help/en/stdwf/accountsHelp.html");
        cy.accessibilityCheck();
        // Go back to company overview screen to exit the test
        cy.visit('/profile');
    })

    it('Check Abbreviated Accounts screens with error messages', () => {
        accountsLandingPage.fileAbbreviatedAccounts();
        // Check the Abbreviated Accounts landing page
        cy.accessibilityCheck();
        // Proceed past micro-entity accounts pre-filing page
        accountsLandingPage.proceedPastPreFilingScreen();
        cy.accessibilityCheck();
        //Populate necessary fields of balance sheet
        abbreviatedBalanceSheet.enterCalledUpShareCapitalNotPaid(invalid_character, invalid_character)
            // Some "Invalid" method's parameters are hidden in the page object for ease of reading the code here.
            // They enter the invalid character into all fields that are not free text in order to fire error messages 
            .enterInvalidFixedAssets()
            .enterInvalidCurrentAssets()
            .enterInvalidCurrentAssetsLiabilities()
            .enterInvalidTotalNetAssets()
            .enterInvalidCapitalAndReserves()
            .enterApprovingDirector(invalid_character);
        cy.accessibilityCheck();
        // Save the form to fire the error messages. 
        abbreviatedBalanceSheet.validateBalanceSheetAndContinue();
        // Check accessibility of the errors here then check the notes balance sheet notes.
        cy.accessibilityCheck();

        //Intangible assests note
        abbreviatedBalanceSheet.openIntangibleAssetsNote();
        intangibleAssetsFixedNote.enterInvalidCost()
            .enterInvalidAmortisation()
            .saveNote();
        cy.accessibilityCheck();
        intangibleAssetsFixedNote.cancelNote();

        // Tangible assets note
        abbreviatedBalanceSheet.openTangibleAssetsNote();
        cy.accessibilityCheck();
        tangibleAssetsFixedNote.enterInvalidCost()
            .saveNote();
        cy.accessibilityCheck();
        tangibleAssetsFixedNote.cancelNote();

        // Debtors note
        abbreviatedBalanceSheet.openDebtorsNote();
        cy.accessibilityCheck();
        debtorsNote.enterDebtorsInformation(invalid_character, invalid_character)
            .saveNote();
        cy.accessibilityCheck();
        debtorsNote.cancelNote();

        // Called up share capital note
        abbreviatedBalanceSheet.openCalledUpShareCapitalNote();
        cy.accessibilityCheck();
        calledUpShareCapitalNote.addInvalidShareClass();
        cy.accessibilityCheck();
        calledUpShareCapitalNote.cancelNote();
        cy.accessibilityCheck();

        // Transactions with directors note
        abbreviatedBalanceSheet.openTransactionsWithDirectorsNote();
        cy.accessibilityCheck();
        transactionsWithDirectorsNote.addInvalidTransaction();
        cy.accessibilityCheck();
        transactionsWithDirectorsNote.cancelNote();
        // Save the form to fire the error messages. 
        abbreviatedBalanceSheet.validateBalanceSheetAndContinue();
        cy.accessibilityCheck();

    })
})
