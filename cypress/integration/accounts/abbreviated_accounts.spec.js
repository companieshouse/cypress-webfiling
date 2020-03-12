import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage';
import AccountsLandingPage from '../../support/page_objects/AccountsLandingPage';
import AbbreviatedBalanceSheet from '../../support/page_objects/AbbreviatedBalanceSheet';
import IntangibleAssetsFixedNote from '../../support/page_objects/IntangibleAssetsFixedNote';
import TangibleAssetsFixedNote from '../../support/page_objects/TangibleAssetsFixedNote';
import InvestmentsNote from '../../support/page_objects/InvestmentsNote';
import DebtorsNote from '../../support/page_objects/DebtorsNote';
import CreditorsNote from '../../support/page_objects/CreditorsNote';
import CalledUpShareCapitalNote from '../../support/page_objects/CalledUpShareCapitalNote';
import AccountingPoliciesNote from '../../support/page_objects/AccountingPoliciesNote';
import TransactionsWithDirectorsNote from '../../support/page_objects/TransactionsWithDirectorsNote';

const companyOverview = new CompanyOverviewPage();
const accountsLandingPage = new AccountsLandingPage();
const abbreviatedBalanceSheet = new AbbreviatedBalanceSheet();
const intangibleAssetsFixedNote = new IntangibleAssetsFixedNote();
const tangibleAssetsFixedNote = new TangibleAssetsFixedNote();
const investmentsNote = new InvestmentsNote();
const debtorsNote = new DebtorsNote();
const creditorsNote = new CreditorsNote();
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

    it.only('Successfully file Abbreviated Accounts', () => {
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

        // Creditiors before note
        abbreviatedBalanceSheet.openCreditorsBeforeNote();
        cy.accessibilityCheck();
        creditorsNote.enterCreditorsInformation(1, 1, 0, 0, 0, 0)
        .saveNote();
        cy.accessibilityCheck();

        // Creditors after note. Opens the same screen as the above but with an additional delete button.
        // Check the accessibility of this here
        abbreviatedBalanceSheet.openCreditorsAfterNote();
        cy.accessibilityCheck();
        creditorsNote.cancelNote();
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
        accountingPoliciesNote.enterAccountingPolicies();
        cy.accessibilityCheck();
        accountingPoliciesNote.saveNote();
        cy.accessibilityCheck();

        // Transactions with directors note
        abbreviatedBalanceSheet.openTransactionsWithDirectorsNote();
        cy.accessibilityCheck();
        transactionsWithDirectorsNote.addTransaction("Test Person", "Test", 1, 1, 1)
        //.addTransaction("Test Person-Two", "Test 2", 2, 2, 2)
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

    it("Check Micro-entity help text", () => {
        cy.visit("/help/en/stdwf/microAccountsHelp.html");
        cy.accessibilityCheck();
        // Go back to company overview screen to exit the test
        cy.visit('/profile');
    })
        

})
