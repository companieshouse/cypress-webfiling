import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage';
import AllFormsPage from '../../support/page_objects/AllformsPage';
import ChangeOfCompanyName from '../../support/page_objects/ChangeOfCompanyName';
import ContactDetailsAndAuthorisationPage from '../../support/page_objects/ContactDetailsAndAuthorisationPage';
import PaymentSelectionPage from '../../support/page_objects/PaymentSelectionPage';
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage';

const companyOverview = new CompanyOverviewPage();
const allFormsPage = new AllFormsPage();
const changeOfCompanyName = new ChangeOfCompanyName();
const contactDetailsAndAuthorisationPage = new ContactDetailsAndAuthorisationPage();
const paymentSelectionPage = new PaymentSelectionPage();
const submissionConfirmationPage = new SubmissionConfirmationPage();

describe('Change of company name - NM01', () => {
    beforeEach(() => {
        //Select form from Company overview
        companyOverview.selectAllForms();
        allFormsPage.selectChangeOfName()
            .selectNm01();
    })

    it('NM01 - Change of Company Name Successful Submission', () => {
        const todaysDate = Cypress.moment().format('DD/MM/YYYY');
        // Proposed New Name tab
        //Initial accessibility check of the tab
        cy.accessibilityCheck();
        changeOfCompanyName.enterProposedName("NM01 Accessibility " + todaysDate)
            .selectNameEnding('LIMITED')
            .continueButton();

        // Resolution Details tab
        //Initial accessibility check of the change company name screen
        cy.accessibilityCheck();
        changeOfCompanyName.enterResolutionDate(todaysDate)
            .continueButton();

        // Submit tab
        //Initial accessibility check of the tab
        cy.accessibilityCheck();
        changeOfCompanyName.giveNoticeOfProposedName()
            .submitChangeOfName();

        //Contact details and authorisation page
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