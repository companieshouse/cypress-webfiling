import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import DormantCompanyAccountsPage from '../../support/page_objects/DormantCompanyAccountsPage';
import DormantAccountsLandingPage from '../../support/page_objects/DormantAccountsLandingPage';
import ContactDetailsAndAuthorisationPage from '../../support/page_objects/ContactDetailsAndAuthorisationPage';
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage';

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const dormantAccountsLandingPage = new DormantAccountsLandingPage();
const dormantCompanyAccountsPage = new DormantCompanyAccountsPage();
const contactDetailsAndAuthorisationPage = new ContactDetailsAndAuthorisationPage();
const submissionConfirmation = new SubmissionConfirmationPage();

describe('Dormant Company Accounts - AA02', () => {
    beforeEach('Select AA02" form from overview', () => {
        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectConfirmationStatementAndAccounts()
            .selectAA02();
        dormantAccountsLandingPage.confirmHeadingContains("Dormant Company Accounts")
            .startAccountsFiling();

    })

    it('AA02 - Successfully file Dormant Company Accounts', () => {
        dormantCompanyAccountsPage.enterCalledUpShareCapitalNotPaid(0)
            .enterCashAtBank(1)
            .enterShareCapital(1, "Ordinary", 1)
            .selectDirectorResponsibilities()
            .enterDateOfApproval(Cypress.moment().format('DD/MM/YYYY'))
            .enterDirectorName("Test", "Person")
            .submitForm();
        cy.accessibilityCheck();
        // the submit form here is to proceed past the Dormant accounts summary page
        dormantCompanyAccountsPage.submitForm();
        // Check the Contact details and authorisation page
        cy.accessibilityCheck();
        contactDetailsAndAuthorisationPage.submitAuthorisation();
        // Check the AA02 submission confiration screen
        cy.accessibilityCheck();
        submissionConfirmation.confirmHeadingContains('WebFiling Service Confirmation').done();
    })

    it('Check Share class selection popup screen', () => {
        cy.visit('/select_menu?param=AA02.IssuedShareCapitalControl.IssuedShareCapitalListControl.IssuedShareCapitalItemControl_1.ShareClass');
        cy.accessibilityCheck();
        // Go back to company overview screen to exit the test
        cy.visit('/profile');
    })
})
