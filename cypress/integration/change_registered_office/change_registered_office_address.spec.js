import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import ChangeRegisteredOfficePage from '../../support/page_objects/ChangeRegisteredOfficePage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'

const companyOverview = new CompanyOverviewPage();
const changeRegisteredOffice = new ChangeRegisteredOfficePage();
const submissionConfirmation = new SubmissionConfirmationPage();

describe('Change of registered office address', () => {
    beforeEach(() => {
        // Go to change registered office address
        cy.accessibilityCheck();
        companyOverview.selectLinkWithText('Change address');
    })

    it('File successful AD01', () => {
        // Alter address - just change premise
        changeRegisteredOffice.lookUpROAddress('100', 'SW1P 1JP');
        cy.accessibilityCheck();

        // Check address is correct
        changeRegisteredOffice.checkAddressByStreetName('ROCHESTER ROW')
            .checkAddressByTown('LONDON')
            .checkCountryValue('GB-ENG')
            .confirmChangeOfAddress();

        // Confirm submission
        submissionConfirmation.confirmHeadingContains('Confirmation of Submission')
    })

    it('AD01 -  Error message validation', () => {
        // Enter address with invalid character in fields and click submit to fire error messages
        changeRegisteredOffice.enterAddressManually()
        .enterInvalidROAddress("`")
        .confirmChangeOfAddress();

        // Check accessibility of page with error messages displayed
        cy.accessibilityCheck();
        
    })

})
